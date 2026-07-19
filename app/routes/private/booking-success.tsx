import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import type { Route } from "./+types/booking-success"

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Booking Success Page` },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function BookingSuccess({}: Route.ComponentProps) {
  return (
    <main className={"mx-auto max-w-(--breakpoint-xl) space-y-8 px-4 py-4"}>
      <div>BookingSuccess</div>
      <Button type="button" asChild>
        <Link to="/test-payment" viewTransition>
          Go to Test Payment Page
        </Link>
      </Button>
    </main>
  )
}
