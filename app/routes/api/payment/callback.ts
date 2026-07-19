import "dotenv/config"

import fs from "fs/promises"
import { join } from "path"
import { type ActionFunctionArgs } from "react-router"
import { createPayment, createWebhook, updateBooking } from "~/.server/actions"
import { paymentClient } from "~/.server/payment"
import { authContext } from "~/auth-context"
import type { Route } from "../../api/payment/+types/callback"

const timingMiddleware: Route.MiddlewareFunction = async ({}, next) => {
  const start = performance.now()
  await next()
  const duration = performance.now() - start
  console.log(`Webhook took ${duration}ms`)
}

export const middleware: Route.MiddlewareFunction[] = [timingMiddleware]

/**
 * **Recommendations for handling webhooks:**
 * - Return 2xx only when you have successfully processed the event.
 * - Return 4xx for issues caused by the sender (bad payload, missing required headers) so the provider usually stops retrying.
 * - Return 5xx when you want the provider to retry (temporary failure like downtime/timeouts).
 */
export async function action({ request, context }: ActionFunctionArgs) {
  const user = context.get(authContext)
  const headers = request.headers
  const payload = await request.text()
  console.log("Received payload:", payload)

  const usernameConfigured = process.env.PHONEPAY_USERNAME
  const passwordConfigured = process.env.PHONEPAY_PASSWORD
  if (!usernameConfigured || !passwordConfigured) {
    console.error(
      "Missing PHONEPE_USERNAME or PHONEPAY_PASSWORD in environment variables"
    )
    return new Response(
      "Missing PHONEPE_USERNAME or PHONEPAY_PASSWORD in environment variables",
      {
        status: 401,
        statusText: "Unauthorized",
      }
    )
  }

  const authorizationHeaderData = headers.get("authorization")
  if (!authorizationHeaderData) {
    console.error("Missing authorization header")
    return new Response("Missing authorization header", {
      status: 400,
      statusText: "Bad Request",
    })
  }
  const phonepeS2SCallbackResponseBodyString = payload

  const callbackResponse = paymentClient.validateCallback(
    usernameConfigured,
    passwordConfigured,
    authorizationHeaderData,
    phonepeS2SCallbackResponseBodyString
  )
  const filepath = "./docs/webhooks"
  const fileName = new Date().getTime() + ".json"
  const joinedPath = join(filepath, fileName)

  if (callbackResponse.type.toString() === "CHECKOUT_ORDER_COMPLETED") {
    console.log("Order completed:", callbackResponse.type)

    await fs.writeFile(joinedPath, JSON.stringify(callbackResponse, null, 2))

    const userId = callbackResponse.payload.metaInfo?.udf1 // userId
    const bookingId = callbackResponse.payload.metaInfo?.udf2 // bookingId

    if (bookingId && userId) {
      const newPaymentPayload = {
        merchantId: callbackResponse.payload.merchantId,
        merchantOrderId: callbackResponse.payload.merchantOrderId ?? "",
        orderId: callbackResponse.payload.orderId,
        state: callbackResponse.payload.state,
        amount: String(callbackResponse.payload.amount),
        currency:
          "currency" in callbackResponse.payload
            ? (callbackResponse.payload.currency as string)
            : "INR",
        expireAt: String(callbackResponse.payload.expireAt),
        userId: userId,
        bookingId: bookingId,
      }
      console.log("Creating payment record with payload:", newPaymentPayload)

      try {
        const newPayment = await createPayment?.(newPaymentPayload)

        if (newPayment) {
          console.log("Payment record created:", newPayment)

          await Promise.all([
            updateBooking?.(bookingId, "CONFIRMED"),
            createWebhook?.(JSON.stringify(callbackResponse), newPayment.id),
          ])
        }
        return newPayment
      } catch (error) {
        console.error("Error deleting booking:", error)
        return new Response("Error deleting booking", {
          status: 400,
          statusText: "Bad Request",
        })
      }
    }

    // Return a 200 OK response to acknowledge receipt of the webhook
    return new Response("Webhook received successfully", {
      status: 200,
      statusText: "OK",
    })
  }

  // handle CHECKOUT_ORDER_FAILED
  if (callbackResponse.type.toString() === "CHECKOUT_ORDER_FAILED") {
    console.log("Payment not successful, deleting booking...")
    const bookingId = callbackResponse.payload.metaInfo?.udf2 // bookingId
    if (bookingId) {
      try {
        await updateBooking?.(bookingId, "CANCELLED")
        console.log("Booking deleted successfully")
      } catch (error) {
        console.error("Error deleting booking:", error)
        return new Response("Error deleting booking", {
          status: 400,
          statusText: "Bad Request",
        })
      }
    }
  }

  console.log("Unhandled callback type:", callbackResponse.type)
  // Return a 400 Bad Request response for unhandled callback types
  return new Response("Unhandled callback type", {
    status: 400,
    statusText: "Bad Request",
  })
}
