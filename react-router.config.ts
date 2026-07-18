import type { Config } from "@react-router/dev/config"
import { vercelPreset } from "@vercel/react-router/vite"

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  appDirectory: "app",
  buildDirectory: "build",
  ssr: true,
  prerender: [
    "/",
    "/tests",
    "/packages/silver",
    "/packages/gold",
    "/packages/diamond",
    "/packages/platinum",
    "/packages/signature",
    "/packages/mini-packages/renal-pack",
    "/packages/mini-packages/obesity-pack",
    "/packages/mini-packages/liver-pack",
    "/packages/mini-packages/hypertension-pack",
    "/packages/mini-packages/gut-pack",
    "/packages/mini-packages/fever-pack",
    "/packages/mini-packages/diabetic-pack",
    "/packages/mini-packages/cardiac-pack",
    "/packages/mini-packages/bone-pack",
    "/blogs",
    "/contact-us",
    "/privacy-policy",
    "/refund-policy",
    "/terms-and-condition",
  ],
  presets: [vercelPreset()],
  future: {
    v8_middleware: true,
  },
} satisfies Config
