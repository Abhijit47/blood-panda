import {
  CreateSdkOrderRequest,
  MetaInfo,
  PrefillUserLoginDetails,
} from "@phonepe-pg/pg-sdk-node"
import { Suspense } from "react"
import { redirect } from "react-router"
import { getTests } from "~/.server/loaders"
import { paymentClient } from "~/.server/payment"
import prisma from "~/.server/prisma"
import { authContext } from "~/auth-context"
import { BookingContextProvider } from "~/contexts/booking-context.client"
import BookingForm from "~/features/booking/booking-form"
import { getUserFromSession } from "~/lib/data.server"
import type { SelectUser } from "~/types/db-types"
import type { Route } from "./+types/booking"

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

const timingMiddleware: Route.ClientMiddlewareFunction = async ({}, next) => {
  const start = performance.now()
  await next()
  const duration = performance.now() - start
  console.log(`Booking Navigation took ${duration}ms`)
}

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  timingMiddleware,
]

export async function loader({ context }: Route.LoaderArgs) {
  const user = context.get(authContext)
  // console.log("serverMessage", serverMessage)
  // const allTests = (await readFile(`./app/constants/tests.json`, "utf-8").then(
  //   (res) => JSON.parse(res)
  // )) as typeof tests

  // defered loading of all tests data from server
  const loadAllTests = getTests?.()

  // const allTests = loadAllTests?.map((test) => ({
  //   ...test,
  //   primaryCategory: test.primaryCategory.name,
  //   secondaryCategory: test.secondaryCategory.name,
  //   originalPrice: test.originalPrice.toNumber(),
  //   discountedPrice: test.discountedPrice.toNumber(),
  //   discountAmount: test.discountAmount.toNumber(),
  // }))

  // defered loading of bookings data from server
  const bookings = prisma.booking.findUnique({
    where: {
      id: "6a26ae35-6a2a-4bba-b271-84cdc9397029",
      userId: user.id,
    },
    select: {
      id: true,
      // userId: true,
      members: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          gender: true,
          packages: {
            select: {
              id: true,
              name: true,
              originalPrice: true,
              discountedPrice: true,
            },
          },
          age: true,
        },
      },
      address: true,
      schedule: true,
    },
  })

  return { user, loadAllTests, bookings }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Booking Page` },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export function HydrateFallback({}: Route.HydrateFallbackProps) {
  return (
    <main className={"mx-auto max-w-(--breakpoint-xl) space-y-8 px-4 py-12"}>
      <h1 className={"text-3xl font-semibold"}>HydrateFallback...</h1>
    </main>
  )
}

function nameLowerUnderScore(name: string) {
  return name.toLowerCase().replace(/\s+/g, "_")
}

const normalizeCategory = (value: string) =>
  value
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .toLowerCase()

// const foundCategory = secCat.find(
//   (cat) => normalizeCategory(cat.name) === normalizeCategory(key)
// )

const testItems = [
  {
    unknown_sub_category: [
      {
        id: "916cd103-20bc-48dc-a30a-0f128177bedd",
        testName: "Prenatal Screen I",
        orgPrice: "2380",
        disPrice: "1700",
      },
      {
        id: "2d858d05-2a0c-4774-a885-0db7103e8b62",
        testName: "Prenatal Screen II",
        orgPrice: "2380",
        disPrice: "1700",
      },
      {
        id: "38cfc812-4ac7-4dcf-bfc5-e824080f023d",
        testName: "Prenatal Screen (NIPT)",
        orgPrice: "4900",
        disPrice: "3500",
      },
      {
        id: "3b94dba4-a958-4bfb-8b49-a740eb0d9a18",
        testName: "Beta HCG",
        orgPrice: "1050",
        disPrice: "750",
      },
      {
        id: "44602f28-3572-46e4-b090-c44529087b18",
        testName: "AMH",
        orgPrice: "2380",
        disPrice: "1700",
      },
    ],
  },
  {
    unknown_sub_category: [
      {
        id: "1e593d67-8ee0-405b-bba7-30a07ea8a02b",
        testName: "Progesterone",
        orgPrice: "630",
        disPrice: "450",
      },
      {
        id: "e50f0c80-8a56-498e-a327-dc76e1a1a84f",
        testName: "Estradiol",
        orgPrice: "840",
        disPrice: "600",
      },
      {
        id: "9a74c3af-e073-4990-9432-e89e1834918e",
        testName: "FSH",
        orgPrice: "560",
        disPrice: "400",
      },
      {
        id: "d8089ca6-50c0-4dd7-bdfe-71e646d89682",
        testName: "LH",
        orgPrice: "490",
        disPrice: "350",
      },
    ],
  },
]

export default function BookingPage({ loaderData }: Route.ComponentProps) {
  type TestKeys = keyof (typeof testItems)[number]

  const primaryCategoryId = "90884da7-d0fe-4acb-bead-fa82003c9824"
  // const secondaryCategoryId = ""

  const prepared = testItems.flatMap((category) =>
    Object.entries(category).flatMap(([categoryName, tests]) => {
      // ======================================
      // if (categoryName === "routine_tests") {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "d5ac78e9-9937-489b-ac13-4f3a4692386b",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("coagulation-thrombosis")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "f1b508d1-6977-413b-b01c-e83dec3dab4d",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("diabetes-metabolic_health")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "c5e67f05-850e-4edf-a811-1ebc55340fab",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("lipid-cardiovascular_risk")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "ddf11eee-ca09-418a-ad22-8c4b7e9d74b8",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("microbiology-culture")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "84dc3405-e410-45fc-9a43-f2f759ad31e5",
      //     }
      //   })
      // }
      // =============================
      // if (categoryName === "unknown_sub_category") {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: "b949112b-3b74-4114-9158-65d7834e761f",
      //       secondaryCategoryId: "13e21c60-f9d1-407c-9fc4-dd0a89b7caa2",
      //     }
      //   })
      // }
      // =============================
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("infection-fever_profile")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "40b96a1f-252d-4ecc-86b5-468b784e4109",
      //     }
      //   })
      // }
      // if (categoryName === "unknown_sub_category") {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "13e21c60-f9d1-407c-9fc4-dd0a89b7caa2",
      //     }
      //   })
      // }
      // if (categoryName === "inflammation_rheumatology") {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "a9e22004-22ab-4791-92e1-46a1039685ed",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("autoimmune-disorders")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "f0e68c3b-4682-493b-a3a2-8971e379b45e",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) === normalizeCategory("cardiac-markers")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "6331391a-6480-44f9-a9cf-84061c6be60e",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("nutrition_deficiency-profile")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "59df647a-1919-45c0-88bb-65b176c44fb4",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("pancreatic-function")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "b5779bc7-a2f9-4fe3-ae11-4d134b711877",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) === normalizeCategory("kidney-health")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "b4401e7a-4197-4ae8-9477-6e543f462ebd",
      //     }
      //   })
      // }
      // if (categoryName === "unknown_sub_category") {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "13e21c60-f9d1-407c-9fc4-dd0a89b7caa2",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) === normalizeCategory("allergy-profile")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "19c54211-2d63-40dd-85cc-cc21c4d7c14d",
      //     }
      //   })
      // }
      // if (
      //   normalizeCategory(categoryName) ===
      //   normalizeCategory("specialized-proteins")
      // ) {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "0fd7b4c1-c1ce-479f-9257-d9a7d96f9302",
      //     }
      //   })
      // }
      // ===================================
      // if (categoryName === "unknown_sub_category") {
      //   return tests.map((test) => {
      //     return {
      //       id: test.id,
      //       name: test.testName,
      //       originalPrice: test.orgPrice,
      //       discountedPrice: test.disPrice,
      //       discountAmount: "30",
      //       primaryCategoryId: primaryCategoryId,
      //       secondaryCategoryId: "13e21c60-f9d1-407c-9fc4-dd0a89b7caa2",
      //     }
      //   })
      // }
      // ===================================
      // return tests.map((test) => {
      //   return {
      //     id: test.id,
      //     name: test.testName,
      //     originalPrice: test.orgPrice,
      //     discountedPrice: test.disPrice,
      //     discountAmount: "30",
      //     primaryCategoryId: "",
      //     secondaryCategoryId: "",
      //   }
      // })
    })
  )

  // console.log("prepared", JSON.stringify(prepared))

  return (
    <main className={"mx-auto max-w-(--breakpoint-xl) space-y-8 px-4 py-4"}>
      <Suspense fallback={<div>Loading...</div>}>
        <BookingContextProvider>
          <BookingForm />
        </BookingContextProvider>
      </Suspense>
    </main>
  )
}

type PaymentRequestData = {
  name: string
  email: string
  phone: string
  amount: number
  address1: string
  address2: string
  pincode: string
  scheduleDate: string
  scheduleTime: string
  paymentMode: "ONLINE_PAYMENT"
}

export async function action({ request }: Route.ActionArgs) {
  const payload = (await request.json()) as PaymentRequestData
  // console.log("Received data:", data)

  const redirectUrl = import.meta.env.VITE_BETTER_AUTH_URL
  if (!redirectUrl) {
    throw new Error("BETTER_AUTH_URL must be set in the environment variables.")
  }

  const merchantOrderId = crypto.randomUUID()
  const prefillUserLoginDetails = PrefillUserLoginDetails.builder().phoneNumber(
    payload.phone
  )
  const metaInfo = MetaInfo.builder()
    .udf1(payload.name)
    .udf2(payload.email)
    .udf3(payload.phone)
    .udf4(payload.amount.toString())
    .udf5(payload.address1)
    .udf6(payload.address2)
    .udf7(payload.pincode)
    .udf8(payload.scheduleDate)
    .udf9(payload.scheduleTime)
    .udf10(payload.paymentMode)
    .build()

  // Amount in paise (100 = ₹1.00)
  const amountInPaisa = Math.round(payload.amount * 100)

  const orderRequest = CreateSdkOrderRequest.StandardCheckoutBuilder()
    .merchantOrderId(merchantOrderId)
    .amount(amountInPaisa)
    // .prefillUserLoginDetails(prefillUserLoginDetails)
    .metaInfo(metaInfo)
    .redirectUrl(`${redirectUrl}/booking-success`)
    .expireAfter(3600) // Expire after 1 hour
    .message("Message that will be shown for UPI collect transaction")
    .build()

  const result = await paymentClient.pay(orderRequest)
  throw redirect(result.redirectUrl, {
    status: 302,
    statusText: "Found",
  })
}
