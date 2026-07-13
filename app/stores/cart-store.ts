// cart.store.ts

import { createStore } from "@xstate/store-react"
import { persist } from "@xstate/store/persist"
import { reset } from "@xstate/store/reset"
import { undoRedo } from "@xstate/store/undo"
import { validateSchemas } from "@xstate/store/validate"

import { z } from "zod"

const CartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
  image: z.string().optional(),
})

const CouponSchema = z.object({
  code: z.string(),
  discountPercentage: z.number(),
})

const CartContextSchema = z.object({
  items: z.array(CartItemSchema),
  coupon: CouponSchema.nullable(),
})

export const cartStore = createStore({
  schemas: {
    context: CartContextSchema,
  },

  context: {
    items: [],
    coupon: null,
  },

  on: {
    addItem: (
      context,
      event: {
        item: {
          id: string
          name: string
          price: number
          quantity?: number
          image?: string
        }
      }
    ) => {
      const existing = context.items.find((i) => i.id === event.item.id)

      if (existing) {
        return {
          ...context,
          items: context.items.map((i) =>
            i.id === event.item.id
              ? {
                  ...i,
                  quantity: i.quantity + (event.item.quantity ?? 1),
                }
              : i
          ),
        }
      }

      return {
        ...context,
        items: [
          ...context.items,
          {
            ...event.item,
            quantity: event.item.quantity ?? 1,
          },
        ],
      }
    },

    removeItem: (context, event: { id: string }) => ({
      ...context,
      items: context.items.filter((i) => i.id !== event.id),
    }),

    updateQuantity: (
      context,
      event: {
        id: string
        quantity: number
      }
    ) => ({
      ...context,
      items: context.items.map((i) =>
        i.id === event.id
          ? {
              ...i,
              quantity: Math.max(1, event.quantity),
            }
          : i
      ),
    }),

    applyCoupon: (
      context,
      event: {
        code: string
        discountPercentage: number
      }
    ) => ({
      ...context,
      coupon: {
        code: event.code,
        discountPercentage: event.discountPercentage,
      },
    }),

    removeCoupon: (context) => ({
      ...context,
      coupon: null,
    }),

    clearCart: (context) => ({
      ...context,
      items: [],
      coupon: null,
    }),
  },
})
  .with(validateSchemas())
  .with(
    undoRedo({
      strategy: "snapshot",
    })
  )
  .with(
    persist({
      name: "shopping-cart-v1",

      strategy: "snapshot",

      version: 1,

      throttle: 500,

      pick: (context) => ({
        items: context.items,
        coupon: context.coupon,
      }),
    })
  )
  .with(reset())
