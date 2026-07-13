// useCart.ts

import { useSelector } from "@xstate/store-react"
import { cartStore } from "./cart-store"

export function useCart() {
  const cart = useSelector(cartStore, (state) => state.context)

  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const discount = cart.coupon
    ? subtotal * (cart.coupon.discountPercentage / 100)
    : 0

  const total = subtotal - discount

  return {
    ...cart,

    subtotal,
    discount,
    total,

    addItem: cartStore.trigger.addItem,
    removeItem: cartStore.trigger.removeItem,
    updateQuantity: cartStore.trigger.updateQuantity,

    applyCoupon: cartStore.trigger.applyCoupon,

    removeCoupon: cartStore.trigger.removeCoupon,

    clearCart: cartStore.trigger.clearCart,

    undo: cartStore.trigger.undo,
    redo: cartStore.trigger.redo,

    reset: cartStore.trigger.reset,
  }
}
