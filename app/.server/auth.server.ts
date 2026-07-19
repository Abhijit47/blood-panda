import { betterAuth } from "better-auth"

import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from "./prisma"

const isDev = import.meta.env.DEV

const trustedOrigin = import.meta.env.VITE_BETTER_AUTH_URL

export const auth = betterAuth({
  appName: "Blood Panda",
  advanced: {
    database: {
      generateId: "uuid",
    },
    useSecureCookies: isDev ? false : true,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    transaction: true,
  }),

  experimental: { joins: true },
  //...other options
  emailAndPassword: {
    enabled: true,
    autoSignIn: true, // automatically sign in the user after registration
  },
  // socialProviders: {
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID as string,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  //   },
  // },
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
    },
  },

  session: {
    storeSessionInDatabase: true,
    preserveSessionInDatabase: true,
    cookieCache: {
      maxAge: 60 * 60 * 24, // 1 day
      enabled: true,
      // refreshCache: {
      //   updateAge: 60, // Refresh when 60 seconds remain before expiry
      // },
    },
  },

  trustedOrigins: [trustedOrigin],
})

export type Auth = typeof auth

export type ServerSession = (typeof auth.$Infer)["Session"]
