// cart.types.ts

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface Coupon {
  code: string
  discountPercentage: number
}

export interface CartContext {
  items: CartItem[]
  coupon: Coupon | null
}
