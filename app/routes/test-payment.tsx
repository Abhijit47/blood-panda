// import type { Route } from "./+types/blog"

import { redirect, useFetcher } from "react-router"
import { createCheckout } from "~/.server/actions"
import { authContext } from "~/auth-context"
import { Button } from "~/components/ui/button"
import { getUserFromSession } from "~/lib/data.server"
import type { PaymentRequestData } from "~/types"
import type { SelectUser } from "~/types/db-types"
import type { Route } from "./+types/test-payment"

const authMiddleware: Route.MiddlewareFunction = async (
  { request, context },
  next
) => {
  const data = await getUserFromSession(request)
  if (!data) {
    throw redirect("/login", {
      status: 302,
      headers: { "X-Redirect-Reason": "User not authenticated" },
    })
  }
  context.set(authContext, data.user as SelectUser)
  return next()
}

export const middleware: Route.MiddlewareFunction[] = [authMiddleware]

export async function loader({ context }: Route.LoaderArgs) {
  const user = context.get(authContext)
  return { user }
}

export async function action({ request }: Route.ActionArgs) {
  const payload = (await request.json()) as PaymentRequestData
  // console.log("Received data:", data)

  const url = await createCheckout?.(payload)

  if (!url) {
    throw new Response("Failed to create checkout order", { status: 500 })
  } else {
    throw redirect(url, {
      status: 302,
      statusText: "Found",
    })
  }
}

export default function TestPayment({ loaderData }: Route.ComponentProps) {
  const user = loaderData.user
  const fetcher = useFetcher({ key: "test-payment" })

  function handleTestPayment() {
    const paymentRequestData = {
      userId: user.id,
      name: "John Doe",
      email: "someone@gmail.com",
      phone: "1234567890",
      amount: 1250,
      address1: "123 Main St",
      address2: "Apt 4B",
      pincode: "123456",
      scheduleDate: "2024-06-15",
      scheduleTime: "10:00 AM",
    }
    const init = fetcher.submit(paymentRequestData, {
      method: "post",
      encType: "application/json",
      // action: "/api/payment/create-payment-request",
      // flushSync: false,
      // relative: "path",
      // preventScrollReset: false,
      // defaultShouldRevalidate: true,
    })
  }

  return (
    <div>
      <h1>Test Payment Page</h1>

      <Button type="button" onClick={handleTestPayment}>
        Send Test Payment
      </Button>
    </div>
  )
}
