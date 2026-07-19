import "dotenv/config"

import {
  CreateSdkOrderRequest,
  MetaInfo,
  PhonePeException,
  PrefillUserLoginDetails,
} from "@phonepe-pg/pg-sdk-node"
import { serverOnly$ } from "vite-env-only/macros"
import type { BookingStatus } from "~/generated/prisma/enums"
import type { BookingFormData } from "~/lib/validators/booking-schema"
import { paymentClient } from "./payment"
import prisma from "./prisma"

type CreateBookingPayload = BookingFormData & {
  userId: string
}

async function createBookingRecord(payload: CreateBookingPayload) {
  const { memberDetails, address, schedule, reviewOrder } = payload

  try {
    // Task 1: Create members in parallel
    const memberCreationPromises = memberDetails.map((member) =>
      prisma.member.create({
        data: {
          name: member.name,
          age: member.age,
          gender: member.gender,
          phone: member.phone,
          email: member.email,
          testPackages: member.testItems,
        },
      })
    )
    const createdMembers = await Promise.all(memberCreationPromises)

    // Task 2: Create address and schedule in parallel
    const createAddress = prisma.address.create({
      data: {
        type: address.addressType,
        location: address.location,
        houseNo: address.houseNo ?? "n/a",
        landmark: address.landmark,
        pinCode: address.pincode,
      },
    })
    const createSchedule = prisma.schedule.create({
      data: {
        scheduleDate: schedule.scheduleDate,
        slot: schedule.slotTime,
      },
    })
    const [createdAddress, createdSchedule] = await Promise.all([
      createAddress,
      createSchedule,
    ])

    // Task 3: Create booking after members, address, and schedule are created
    const createBooking = await prisma.booking.create({
      data: {
        type: reviewOrder.paymentMode,
        status: "PENDING",
        userId: payload.userId,
      },
    })

    // Task 4: Update members, address, and schedule with the bookingId in parallel
    const updateMembers = prisma.member.updateMany({
      where: {
        id: {
          in: createdMembers.map((member) => member.id),
        },
      },
      data: {
        bookingId: createBooking.id,
      },
    })
    const updateAddress = prisma.address.update({
      where: {
        id: createdAddress.id,
      },
      data: {
        bookingId: createBooking.id,
      },
    })
    const updateSchedule = prisma.schedule.update({
      where: {
        id: createdSchedule.id,
      },
      data: {
        bookingId: createBooking.id,
      },
    })
    await Promise.all([updateMembers, updateAddress, updateSchedule])

    return createBooking
  } catch (error) {
    console.error("Error creating booking:", error)
    throw new Error("Failed to create booking")
  }
}

async function updateBookingRecord(bookingId: string, status: BookingStatus) {
  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status },
    })
    return updatedBooking
  } catch (error) {
    console.error("Error updating booking:", error)
    throw new Error("Failed to update booking")
  }
}

type CreatePaymentRecordPayload = {
  merchantId: string
  merchantOrderId: string
  orderId: string
  state: string
  amount: string
  currency: string
  expireAt: string
  userId: string
  bookingId: string
}

async function createPaymentRecord(payload: CreatePaymentRecordPayload) {
  try {
    const result = await prisma.payment.create({
      data: {
        merchantId: payload.merchantId,
        merchantOrderId: payload.merchantOrderId,
        orderId: payload.orderId,
        state: payload.state,
        amount: payload.amount,
        currency: payload.currency,
        expireAt: payload.expireAt,
        userId: payload.userId,
        bookingId: payload.bookingId,
      },
    })
    return result
  } catch (error) {
    console.error("Error creating payment record:", error)
    throw new Error("Failed to create payment record")
  }
}

async function createWebhookRecord(payload: string, paymentId: string) {
  try {
    const result = await prisma.webhookLog.create({
      data: {
        payload: JSON.parse(payload),
        paymentId: paymentId,
      },
    })
    return result
  } catch (error) {
    console.error("Error creating webhook record:", error)
    throw new Error("Failed to create webhook record")
  }
}

type CheckoutOrderPayload = BookingFormData & {
  userId: string
  bookingId: string
  totalPrice: number
}

async function createCheckoutOrderRequest(payload: CheckoutOrderPayload) {
  const redirectUrl = process.env.BETTER_AUTH_URL
  if (!redirectUrl) {
    throw new Error("BETTER_AUTH_URL must be set in the environment variables.")
  }

  const merchantOrderId = crypto.randomUUID()
  const prefillUserLoginDetails = PrefillUserLoginDetails.builder().phoneNumber(
    payload.memberDetails[0].phone
  )

  const metaInfo = MetaInfo.builder()
    .udf1(payload.userId)
    .udf2(payload.bookingId)
    .udf3(payload.memberDetails[0].name)
    .udf4(payload.memberDetails[0].email)
    .udf5(payload.memberDetails[0].phone)
    .udf6(payload.totalPrice.toString())
    .udf7(payload.address.location)
    .udf8(payload.schedule.scheduleDate)
    .udf9(payload.schedule.slotTime)
    .udf10(payload.address.pincode)
    .build()

  // Amount in paise (100 = ₹1.00)
  const amountInPaisa = Math.round(payload.totalPrice * 100)

  const orderRequest = CreateSdkOrderRequest.StandardCheckoutBuilder()
    .merchantOrderId(merchantOrderId)
    .amount(amountInPaisa)
    // .prefillUserLoginDetails(prefillUserLoginDetails)
    .metaInfo(metaInfo)
    .redirectUrl(`${redirectUrl}/booking-success`)
    .expireAfter(3600) // Expire after 1 hour
    .message("Message that will be shown for UPI collect transaction") // TODO: Add a proper message here
    .build()

  try {
    const result = await paymentClient.pay(orderRequest)
    return result.redirectUrl
  } catch (error) {
    const err = error as PhonePeException //error thrown is of PhonePeException type
    console.log(err?.message)
    throw new Error(
      `Failed to create checkout order: ${err?.message || "Internal Server Error"}`
    )
  }
}

// export const serverMessage = serverOnly$("i only exist on the server")
export const createCheckout = serverOnly$(createCheckoutOrderRequest)

export const createBooking = serverOnly$(createBookingRecord)

export const createPayment = serverOnly$(createPaymentRecord)

export const updateBooking = serverOnly$(updateBookingRecord)

export const createWebhook = serverOnly$(createWebhookRecord)
