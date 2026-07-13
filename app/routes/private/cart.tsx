import { Link, redirect } from "react-router"
import { getUsers } from "~/.server/loaders"
import { authContext } from "~/auth-context"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { getUserFromSession } from "~/lib/data.server"
import { useCart } from "~/stores/useCart"
import type { SelectUser } from "~/types/db-types"
import type { Route } from "./+types/cart"

import { IconTrash } from "@tabler/icons-react"
import {
  CreditCard,
  Minus,
  Package,
  Plus,
  Shield,
  Trash2,
  Truck,
} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { formatCurrency } from "~/lib/utils"

const authMiddleware: Route.MiddlewareFunction = async (
  { request, context },
  next
) => {
  const data = await getUserFromSession(request)
  if (!data) {
    throw redirect("/login", {
      status: 302,
      headers: { "X-Redirect-Reason": "User not authenticated" },
    })
  }
  context.set(authContext, data.user as SelectUser)
  return next()
}

export const middleware: Route.MiddlewareFunction[] = [authMiddleware]

// Client-side timing middleware
const timingMiddleware: Route.ClientMiddlewareFunction = async ({}, next) => {
  const start = performance.now()
  await next()
  const duration = performance.now() - start
  console.log(`Cart Navigation took ${duration}ms`)
}

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  timingMiddleware,
]

export async function loader({ context }: Route.LoaderArgs) {
  const user = context.get(authContext)
  const users = await getUsers?.()
  // console.log("serverMessage", serverMessage)
  return { user, users }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Cart Page` },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function CartPage({ loaderData }: Route.ComponentProps) {
  const [couponCode, setCouponCode] = useState("PROMO30")

  const {
    items,
    total,
    subtotal,

    updateQuantity,
    removeItem,

    coupon,
    applyCoupon,
    removeCoupon,

    clearCart,
  } = useCart()

  function handleApplyCoupon() {
    if (couponCode.trim() === "") {
      toast.error("Please enter a valid coupon code.")
      return
    }

    // For demonstration, let's assume "PROMO30" gives a 30% discount
    if (couponCode === "PROMO30") {
      applyCoupon({ code: couponCode, discountPercentage: 30 })
      toast.success("Coupon applied successfully!")
    } else {
      toast.error("Invalid coupon code.")
      setCouponCode("") // Clear the input field on invalid code
    }
  }

  return (
    <main className={"mx-auto max-w-(--breakpoint-xl) space-y-8 px-4 py-12"}>
      <section>
        {items.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>
                <h1 className="text-2xl font-semibold">
                  Your cart is empty. Add some items to get started!
                </h1>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Link to="/tests" viewTransition>
                Goto Tests
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Cart Section */}
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-muted-foreground">
                      {items.length} {items.length === 1 ? "item" : "items"} in
                      your cart
                    </p>
                  </CardDescription>
                  <CardAction>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        clearCart()
                        toast.success("Cart cleared successfully.")
                      }}
                    >
                      <IconTrash className={"size-4"} />
                      Clear Cart
                    </Button>
                  </CardAction>
                </CardHeader>

                <ScrollArea className="h-96 w-full">
                  <CardContent>
                    <div className="space-y-4 py-4">
                      {items.map((item) => (
                        <Card key={item.id} className="overflow-hidden p-0">
                          <CardContent className="p-0">
                            <div className="flex h-full flex-col md:flex-row">
                              {/* Product Image */}
                              <div className="relative h-auto w-full md:w-32">
                                <img
                                  src={
                                    "https://avatar.vercel.sh/rauchg?size=30"
                                  }
                                  alt={item.name}
                                  width={500}
                                  height={500}
                                  className="h-full w-full object-cover md:w-32"
                                />
                              </div>

                              {/* Product Details */}
                              <div className="flex-1 p-6 pb-3">
                                <div className="flex justify-between">
                                  <div>
                                    <h3 className="font-medium">{item.name}</h3>
                                    {/* <p className="text-sm text-muted-foreground">
                                {item.color} • {item.size}
                              </p> */}
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeItem({ id: item.id })}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      onClick={() => {
                                        if (item.quantity > 1) {
                                          updateQuantity({
                                            id: item.id,
                                            quantity: item.quantity - 1,
                                          })
                                          toast.success(
                                            "Item quantity updated successfully."
                                          )
                                          return
                                        } else {
                                          return toast.warning(
                                            "You cannot have less than 1 item of the same product."
                                          )
                                        }
                                      }}
                                    >
                                      <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="w-8 text-center">
                                      {item.quantity}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      onClick={() => {
                                        if (item.quantity < 3) {
                                          updateQuantity({
                                            id: item.id,
                                            quantity: item.quantity + 1,
                                          })
                                          toast.success(
                                            "Item quantity updated successfully."
                                          )
                                          return
                                        } else {
                                          return toast.warning(
                                            "You cannot add more than 3 items of the same product."
                                          )
                                        }
                                      }}
                                    >
                                      <Plus className="h-4 w-4" />
                                    </Button>
                                  </div>

                                  <div className="text-right">
                                    <div className="font-medium">
                                      ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    {/* {item.originalPrice && (
                                <div className="text-sm text-muted-foreground line-through">
                                  $
                                  {(item.originalPrice * item.quantity).toFixed(
                                    2
                                  )}
                                </div>
                              )} */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </ScrollArea>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>
                    Review your order details and shipping information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Applied/or not coupon code */}
                  {coupon ? (
                    <div className="flex items-center justify-between rounded-md border p-2">
                      <span className="font-medium">{coupon.code}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          removeCoupon()
                          toast.success("Coupon removed successfully.")
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label>Promo Code</Label>
                      <form
                        className="flex gap-2"
                        onSubmit={(e) => {
                          e.preventDefault()
                          handleApplyCoupon()
                        }}
                      >
                        <Input
                          placeholder="Enter promo code"
                          value={couponCode}
                          readOnly
                          className={"pointer-events-none select-none"}
                        />
                        <Button variant="outline">Apply</Button>
                      </form>
                    </div>
                  )}

                  {/* Order Summary */}
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{formatCurrency(String(subtotal))}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    {coupon && (
                      <div className="flex justify-between text-sm">
                        <span className={"inline-flex items-center gap-1"}>
                          Discount{" "}
                          <Badge className={"text-xs font-medium"}>
                            {coupon.code}
                          </Badge>
                        </span>
                        <span>
                          {" "}
                          -
                          {formatCurrency(
                            String(subtotal * (coupon.discountPercentage / 100))
                          )}
                        </span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatCurrency(String(total))}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 border-t pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="h-4 w-4 text-primary" />
                      <span>Free returns within 30 days</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Fast delivery</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
