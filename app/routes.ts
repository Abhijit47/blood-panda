import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes"

export default [
  layout("routes/public/layout.tsx", [
    index("routes/public/home.tsx"),
    route("tests", "routes/public/tests.tsx"),
    route("contact-us", "routes/public/contact.tsx"),
    route("privacy-policy", "routes/public/privacy-policy.tsx"),
    route("terms-and-condition", "routes/public/terms-and-condition.tsx"),
    route("refund-policy", "routes/public/refund-policy.tsx"),

    ...prefix("blogs", [
      index("routes/public/blogs.tsx"),
      route(":blogSlug", "routes/public/blog.tsx"),
    ]),

    ...prefix("packages", [
      route(":package", "routes/public/packages/package.tsx"),

      ...prefix("mini-packages", [
        route(":miniPackage", "routes/public/packages/mini-package.tsx"),
      ]),
      // index("./concerts/home.tsx"),
      // route(":city", "./concerts/city.tsx"),
      // route("trending", "./concerts/trending.tsx"),
    ]),
  ]),

  layout("routes/auth/layout.tsx", [
    route("login", "./routes/auth/login.tsx"),
    route("register", "./routes/auth/register.tsx"),
  ]),

  // Error: No route matches URL "/.well-known/appspecific/com.chrome.devtools.json"
  route(
    "/.well-known/appspecific/com.chrome.devtools.json",
    "routes/public/debug-null.tsx"
  ),

  // Theme setting API route
  route("/action/set-theme", "routes/action.set-theme.ts"),

  // Auth API route
  route("/api/auth/*", "routes/api.auth.$.ts"),

  // Save API route
  route("/api/save", "routes/api.save.ts"),

  route(
    "/api/payment/create-payment-request",
    "routes/api/payment/create-payment-request.ts"
  ),

  layout("routes/private/layout.tsx", [
    route("cart", "routes/private/cart.tsx"),
    route("profile", "routes/private/profile.tsx"),
    route("booking", "routes/private/booking.tsx", { id: "booking" }),
    route("booking-success", "routes/private/booking-success.tsx"),
  ]),

  layout("routes/admin/layout.tsx", [
    route("admin", "routes/admin/home.tsx"),
    route("admin/patients", "routes/admin/patients.tsx"),
    route("admin/prescriptions", "routes/admin/prescriptions.tsx"),
    route("admin/subscribers", "routes/admin/subscribers.tsx"),
    route("admin/bookings", "routes/admin/bookings.tsx"),
  ]),
] satisfies RouteConfig
