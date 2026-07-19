interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_THEME_COOKIE_SECRET: string
  readonly VITE_BETTER_AUTH_URL: string
  readonly VITE_TEST_WEBHOOK_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
