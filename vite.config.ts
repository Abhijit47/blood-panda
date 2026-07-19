import contentCollections from "@content-collections/remix-vite"
import { reactRouter } from "@react-router/dev/vite"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import { reactCompilerPreset } from "@vitejs/plugin-react"
import { reactRouterDevTools } from "react-router-devtools"
import { defineConfig } from "vite"
import { envOnlyMacros } from "vite-env-only"
import devtoolsJson from "vite-plugin-devtools-json"
import relay from "vite-plugin-relay"

// export default defineConfig({
//   resolve: { tsconfigPaths: true },
//   plugins: [tailwindcss(), reactRouter()],
// })

export default defineConfig((opts) => ({
  build: {
    rolldownOptions: {
      // renamed from rollupOptions
      output: {
        // manualChunks is deprecated — use codeSplitting instead
        codeSplitting: {
          // groups: [{ name: "components", test: /node_modules/ }],
          groups: [
            {
              name: "components",
              test: (id) => id.includes("node_modules"),
            },
          ],
        },
      },
    },
    cssMinify: "lightningcss", // default; can set 'esbuild' to revert
  },
  // server: {
  //   allowedHosts: ["localhost", "leonidas-caulescent-elfriede.ngrok-free.dev"],
  //   cors: { origin: "*" },
  //   proxy: {
  //     "/api": {
  //       // localAddress: "http://localhost:5173",
  //       target: "https://leonidas-caulescent-elfriede.ngrok-free.dev",
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  resolve: { tsconfigPaths: true },
  plugins: [
    reactRouterDevTools({
      includeInProd: {
        client: false,
        server: false,
      },
    }),
    tailwindcss(),
    reactRouter(),
    // react(),
    babel({
      // presets: ["jotai-babel/preset", reactCompilerPreset()],
      presets: [reactCompilerPreset()],
    }),
    contentCollections(),
    devtoolsJson({ uuid: crypto.randomUUID() }),
    // denyImports({
    //   client: {
    //     specifiers: ["fs-extra", /^node:/, "@prisma/*", "drizzle-orm/*"],
    //     files: ["**/.server/*", "**/*.server.*"],
    //   },
    //   server: {
    //     specifiers: ["jquery"],
    //   },
    // }),
    envOnlyMacros(),
    relay,
  ],
}))
