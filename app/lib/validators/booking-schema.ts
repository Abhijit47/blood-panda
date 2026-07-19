import z from "zod"
import { AddressTypeEnums, GenderEnums, PaymentMethodEnums } from "~/constants"

export const testItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  originalPrice: z.number(),
  discountedPrice: z.number(),
  discountAmount: z.number(),
  primaryCategory: z.string(),
  secondaryCategory: z.string(),
  isFastingRequired: z.boolean(),
})

const memberDetailsField = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10),
  gender: z.enum(GenderEnums),
  age: z.string(),
  testItems: z.array(testItemSchema).optional(),
  isAssignedDoctor: z.boolean().default(false),
  assignedDoctor: z.enum(["yes", "no"]).default("no"),
})

export const memberDetailsFormSchema = z.object({
  memberDetails: memberDetailsField
    .array()
    .min(1, "At least one member is required"),
})

export const addressFormSchema = z.object({
  location: z.string().min(1, "Location is required"),
  houseNo: z.string().optional(),
  pincode: z.string().min(6, "Pincode is required"),
  landmark: z.string().optional(),
  isChecked: z.boolean().default(false), // this will excluded for db
  addressType: z.enum(AddressTypeEnums).default("HOME"),
})

export const scheduleFormSchema = z.object({
  scheduleDate: z.string(),
  slotTime: z.string(),
})

export const reviewOrderSchema = z.object({
  paymentMode: z.enum(PaymentMethodEnums).default("ONLINE_PAYMENT"),
})

export const bookingFormSchema = z.object({
  ...memberDetailsFormSchema.shape,
  address: addressFormSchema,
  schedule: scheduleFormSchema,
  reviewOrder: reviewOrderSchema,
})

export type TestItem = z.infer<typeof testItemSchema>
export type MemberDetailsFormData = z.infer<typeof memberDetailsFormSchema>
export type AddressFormData = z.infer<typeof addressFormSchema>
export type ScheduleFormData = z.infer<typeof scheduleFormSchema>

export type BookingFormData = z.infer<typeof bookingFormSchema>
