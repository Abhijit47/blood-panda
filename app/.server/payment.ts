import "dotenv/config"

import { Env, StandardCheckoutClient } from "@phonepe-pg/pg-sdk-node"

const CLIENT_ID = process.env.PHONEPAY_CLIENT_ID
const CLIENT_SECRET = process.env.PHONEPAY_CLIENT_SECRET
const CLIENT_VERSION = process.env.PHONEPAY_CLIENT_VERSION ?? "0"

const clientId = CLIENT_ID
const clientSecret = CLIENT_SECRET
const clientVersion =
  process.env.NODE_ENV === "development" ? 0 : Number(CLIENT_VERSION)
const env =
  process.env.NODE_ENV === "development" ? Env.SANDBOX : Env.PRODUCTION

if (!clientId || !clientSecret) {
  throw new Error(
    "PHONEPAY_CLIENT_ID and PHONEPAY_CLIENT_SECRET must be set in the environment variables."
  )
}

export const paymentClient = StandardCheckoutClient.getInstance(
  clientId,
  clientSecret,
  clientVersion,
  env
)
