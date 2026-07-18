import "dotenv/config"

import {
  CreateSdkOrderRequest,
  MetaInfo,
  PrefillUserLoginDetails,
} from "@phonepe-pg/pg-sdk-node"
import { serverOnly$ } from "vite-env-only/macros"
import type { PaymentRequestData } from "~/types"
import { paymentClient } from "./payment"

async function createCheckoutOrderRequest(payload: PaymentRequestData) {
  const redirectUrl = process.env.BETTER_AUTH_URL
  if (!redirectUrl) {
    throw new Error("BETTER_AUTH_URL must be set in the environment variables.")
  }

  const merchantOrderId = crypto.randomUUID()
  const prefillUserLoginDetails = PrefillUserLoginDetails.builder().phoneNumber(
    payload.phone
  )
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

  const orderRequest = CreateSdkOrderRequest.StandardCheckoutBuilder()
    .merchantOrderId(merchantOrderId)
    .amount(amountInPaisa)
    // .prefillUserLoginDetails(prefillUserLoginDetails)
    .metaInfo(metaInfo)
    .redirectUrl(`${redirectUrl}/booking-success`)
    .expireAfter(3600) // Expire after 1 hour
    .message("Message that will be shown for UPI collect transaction")
    .build()

  const result = await paymentClient.pay(orderRequest)

  return result.redirectUrl
}

// export const serverMessage = serverOnly$("i only exist on the server")
export const createCheckout = serverOnly$(createCheckoutOrderRequest)
