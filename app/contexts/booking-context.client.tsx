import { zodResolver } from "@hookform/resolvers/zod"
import { createContext, useContext, useState } from "react"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { useLoaderData } from "react-router"
import { toast } from "sonner"
import {
  bookingFormSchema,
  type BookingFormData,
} from "~/lib/validators/booking-schema"
import type { Route } from "../routes/private/+types/booking"
// import { useFormStorage } from "react-hook-form-storage"
import { useFormPersist } from "@liorpo/react-hook-form-persist"
import useSessionStorage from "~/hooks/use-session-storage"

type BookingStats = {
  currentStep: number
  isFirstStepCompleted: boolean
  isSecondStepCompleted: boolean
  isThirdStepCompleted: boolean
  firstStepProgress: number
  secondStepProgress: number
  thirdStepProgress: number
}

type BookingContextType = {
  step: number
  nextStep: () => void
  prevStep: () => void
  canGoToNextStep: boolean
  canGoToPreviousStep: boolean
  clearStorage: () => void

  bookingStats: BookingStats

  totalPrice: number
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

type BookingContextProviderProps = {
  children: React.ReactNode
}

const initialValue: BookingStats = {
  currentStep: 1,
  isFirstStepCompleted: false,
  isSecondStepCompleted: false,
  isThirdStepCompleted: false,
  firstStepProgress: 0,
  secondStepProgress: 0,
  thirdStepProgress: 0,
}

export function BookingContextProvider(props: BookingContextProviderProps) {
  const { children } = props

  const [bookingStats, setBookingStats] = useSessionStorage({
    key: "booking-form-stats",
    initialValue: initialValue,
  })

  const [step, setStep] = useState(bookingStats.currentStep) // max 4 steps

  const canGoToPreviousStep = step > 1
  const canGoToNextStep = step < 4

  const { user } = useLoaderData<Route.ComponentProps["loaderData"]>()

  const formInstance = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema as any),
    mode: "onChange",
    defaultValues: {
      memberDetails: [
        {
          name: user?.name || "",
          email: user?.email || "",
          phone: "",
          gender: "OTHER",
          age: "0",
          testItems: undefined,
          isAssignedDoctor: false,
          assignedDoctor: "no",
        },
      ],
      address: {
        location: "",
        houseNo: "",
        landmark: "",
        pincode: "",
        isChecked: false,
        addressType: "HOME",
      },
      schedule: {
        scheduleDate: "",
        slotTime: "",
      },
      reviewOrder: {
        paymentMode: "COD",
      },
    },
  })

  const discountPercentage = 30

  const watchBasicDetails = useWatch({
    control: formInstance.control,
    name: `memberDetails`,
    defaultValue: [],
    compute: (member) => {
      const testItems =
        member.map((item) => item?.testItems || [])?.flat() || []

      const originalPrice = testItems.reduce(
        (acc, cur) => acc + (cur?.originalPrice || 0),
        0
      )
      const discountedPrice =
        originalPrice - originalPrice * (discountPercentage / 100)
      // const discountedPrice =
      //   originalPrice - originalPrice * (discountPercentage / 100)

      const totalPrice = discountedPrice * member.length

      return { originalPrice, discountedPrice, totalPrice, member }
    },
  })

  function nextStep() {
    const validatingForm: Promise<boolean> = new Promise(async (res, rej) => {
      const ok =
        step === 1
          ? await formInstance.trigger("memberDetails")
          : step === 2
            ? await formInstance.trigger("address")
            : step === 3
              ? await formInstance.trigger("schedule")
              : true

      if (ok) {
        res(true)
      } else {
        rej(false)
      }
    })

    toast.promise(validatingForm, {
      loading: "Validating form...",
      success: (result) => {
        if (result) {
          setStep((prev) => Math.min(prev + 1, 4))
          setBookingStats((prev) => ({
            ...prev,
            currentStep: Math.min(prev.currentStep + 1, 4),
            isFirstStepCompleted: step >= 1,
            isSecondStepCompleted: step >= 2,
            isThirdStepCompleted: step >= 3,

            firstStepProgress: step >= 1 ? 100 : 0,
            secondStepProgress: step >= 2 ? 100 : 0,
            thirdStepProgress: step >= 3 ? 100 : 0,
          }))
        }
        return "Form is valid! Moving to next step..."
      },
      error: "Please fix the errors in the form before proceeding.",
    })
  }

  function prevStep() {
    setStep((prev) => Math.max(prev - 1, 1))
    setBookingStats((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 1),
      isFirstStepCompleted: step >= 1,
      isSecondStepCompleted: step >= 2,
      isThirdStepCompleted: step >= 3,

      firstStepProgress: step >= 2 ? 100 : 0,
      secondStepProgress: step >= 3 ? 100 : 0,
      thirdStepProgress: step >= 4 ? 100 : 0,
    }))
  }

  const { clear: clearStorage } = useFormPersist("booking-form", {
    control: formInstance.control,
    setValue: formInstance.setValue,
    storage: sessionStorage,
    timeout: 24 * 60 * 60 * 1000, // 24 hours
    debounceDelay: 500, // Save after 500ms of inactivity
    onTimeout: () => {
      console.log("Form data expired")
    },
    onDataRestored: (values) => {
      console.log(values)
    },
    validate: true, // Trigger validation when data is restored
    dirty: true, // Mark form as dirty
    touch: true, // Mark fields as touched
  })

  const values: BookingContextType = {
    step,
    nextStep,
    prevStep,
    canGoToNextStep,
    canGoToPreviousStep,
    clearStorage,

    bookingStats,

    // isLoading,
    // isRestored,
    originalPrice: watchBasicDetails.originalPrice,
    discountedPrice: watchBasicDetails.discountedPrice,
    totalPrice: watchBasicDetails.totalPrice,
    discountPercentage,
    // totalMember: watchBasicDetails.member.length,
  }

  return (
    <BookingContext.Provider value={values}>
      <FormProvider {...formInstance}>{children}</FormProvider>
    </BookingContext.Provider>
  )
}

export function useBookingContext() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error(
      "useBookingContext must be used within a BookingContextProvider"
    )
  }
  return context
}
