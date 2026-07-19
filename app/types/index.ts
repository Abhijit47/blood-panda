export type PackageDetails = {
  totalTests: number
  description: string
  categories: {
    id: string
    name: string
    count: string
    features: string[]
  }[]
  orgPrice: string
  disPrice: string
  offerPercentage: string
  extraFeatures: string[]
}

export type MiniPackage = {
  id: string
  benefits: string[]
  orgPrice: string
  disPrice: string
  offerPercent: string
  extraFeatures: string[]
}

export type PaymentRequestData = {
  userId: string
  name: string
  email: string
  phone: string
  amount: number
  address1: string
  address2: string
  pincode: string
  scheduleDate: string
  scheduleTime: string
}
