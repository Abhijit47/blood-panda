import "dotenv/config"

import {
  // CreateSdkOrderRequest,
  MetaInfo,
  PrefillUserLoginDetails,
} from "@phonepe-pg/pg-sdk-node"
import { type ActionFunctionArgs, data } from "react-router"
// import { paymentClient } from "~/.server/payment"

type PaymentRequestData = {
  name: string
  email: string
  phone: string
  amount: number
  address1: string
  address2: string
  pincode: string
  scheduleDate: string
  scheduleTime: string
  paymentMode: "ONLINE_PAYMENT"
}

export async function action({ request }: ActionFunctionArgs) {
  const payload = (await request.json()) as PaymentRequestData
  // console.log("Received data:", data)

  const redirectUrl = process.env.BETTER_AUTH_URL
  if (!redirectUrl) {
    throw new Error("BETTER_AUTH_URL must be set in the environment variables.")
  }

  const merchantOrderId = crypto.randomUUID()
  const prefillUserLoginDetails =
    PrefillUserLoginDetails.builder().phoneNumber("<PhonepeNumber>")
  const metaInfo = MetaInfo.builder()
    .udf1(payload.name)
    .udf2(payload.email)
    .udf3(payload.phone)
    .udf4(payload.amount.toString())
    .udf5(payload.address1)
    .udf6(payload.address2)
    .udf7(payload.pincode)
    .udf8(payload.scheduleDate)
    .udf9(payload.scheduleTime)
    .udf10(payload.paymentMode)
    .build()

  // Amount in paise (100 = ₹1.00)
  const amountInPaisa = Math.round(payload.amount * 100)

  // const orderRequest = CreateSdkOrderRequest.StandardCheckoutBuilder()
  //   .merchantOrderId(merchantOrderId)
  //   .amount(amountInPaisa)
  //   .metaInfo(metaInfo)
  //   .redirectUrl(`${redirectUrl}/booking-success`)
  //   .expireAfter(3600) // Expire after 1 hour
  //   .message("Message that will be shown for UPI collect transaction")
  //   .build()

  // const result = await paymentClient.pay(orderRequest)
  // try {
  //   console.log({ result })
  //   throw redirect(result.redirectUrl, {
  //     status: 302,
  //     statusText: "Found",
  //   })
  // } catch (err) {
  //   console.error({ err })
  //   throw new Response("Failed to create payment request", { status: 500 })
  // }
  // throw redirect(result.redirectUrl, {
  //   status: 302,
  //   statusText: "Found",
  // })
  // throw redirectDocument(`${redirectUrl}/booking-success`, {
  //   status: 302,
  //   statusText: "Found",
  // })
  return data("some-value", {
    status: 200,
    statusText: "OK",
  })
  // return { ok: true }
}
