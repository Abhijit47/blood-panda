import { createEmailClient } from "@opencoredev/email-sdk"
import { resend } from "@opencoredev/email-sdk/resend"
import "dotenv/config"

export const emailClient = createEmailClient({
  adapters: [resend({ apiKey: process.env.RESEND_API_KEY! })],
})
