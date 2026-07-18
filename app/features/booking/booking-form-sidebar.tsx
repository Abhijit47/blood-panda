import { useFormContext, useWatch } from "react-hook-form"
import { useFetcher } from "react-router"
import { toast } from "sonner"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { Spinner } from "~/components/ui/spinner"
import { useBookingContext } from "~/contexts/booking-context.client"
import { formatCurrency } from "~/lib/utils"
import type { BookingFormData } from "~/lib/validators/booking-schema"

export default function BookingFormSidebar() {
  const form = useFormContext<BookingFormData>()
  const {
    step,
    prevStep,
    nextStep,
    canGoToPreviousStep,
    totalPrice,
    originalPrice,
    discountPercentage,
    discountedPrice,
    canGoToNextStep,
  } = useBookingContext()

  // const fetcher = useFetcher({ key: "booking" })
  const fetcher = useFetcher()

  const totalMembers = useWatch({
    control: form.control,
    name: `memberDetails`,
    defaultValue: [],
  })

  const watchedPaymentMode = useWatch({
    control: form.control,
    name: `reviewOrder.paymentMode`,
    defaultValue: "COD",
  })

  const watchedMemberValues = useWatch({
    control: form.control,
    name: `memberDetails`,
  })

  const watchedAddressValues = useWatch({
    control: form.control,
    name: `address`,
  })

  const watchedScheduleValues = useWatch({
    control: form.control,
    name: `schedule`,
  })

  function handleFinalSubmit() {
    const fakePromise = new Promise((resolve) => setTimeout(resolve, 2000))

    if (step === 1 || step === 2 || step === 3) {
      return nextStep()
    } else {
      // then go for final submission
      if (watchedPaymentMode === "COD") {
        // create the booking and show the success page
        toast.promise(fakePromise, {
          loading: "Creating booking...",
          success: "Booking created successfully!",
          error: "Failed to create booking.",
        })
      } else {
        const paymentRequestData = {
          name: watchedMemberValues[0].name,
          email: watchedMemberValues[0].email,
          phone: watchedMemberValues[0].phone,
          amount: discountedPrice,
          address1: watchedAddressValues.location,
          address2: watchedAddressValues.houseNo ?? "",
          pincode: watchedAddressValues.pincode,
          scheduleDate: watchedScheduleValues.scheduleDate,
          scheduleTime: watchedScheduleValues.slotTime,
          paymentMode: watchedPaymentMode,
        }
        const init = fetcher.submit(paymentRequestData, {
          method: "post",
          encType: "application/json",
          // action: "/api/payment/create-payment-request",
          // flushSync: false,
          // relative: "path",
          // preventScrollReset: false,
          // defaultShouldRevalidate: true,
        })
        // create a payment request and redirect to the payment page
        // toast.success("Redirecting to payment gateway...")
        toast.promise(init, {
          loading: "Redirecting to payment gateway...",
          success: (data) => {
            console.log("fetcher", fetcher.data)
            return "Redirected to payment gateway!"
          },
          error: "Failed to redirect to payment gateway.",
        })
      }
    }
  }

  console.log("fetcher", fetcher.data)

  return (
    <Card className={"col-span-full grid h-fit content-start lg:col-span-1"}>
      <CardHeader>
        <CardTitle>{totalMembers.length ?? 0} Member added</CardTitle>
        <CardAction>{formatCurrency(String(totalPrice))}</CardAction>
      </CardHeader>

      <CardContent className={"space-y-4"}>
        <p className={"flex items-center justify-between"}>
          <span className={"font-medium"}>Total MRP</span>
          <span className={"font-semibold"}>
            {formatCurrency(String(originalPrice))}
          </span>
        </p>
        <Separator />
        <p className={"flex items-center justify-between"}>
          <span className={"font-medium"}>
            Discount on MRP
            <Badge className={"text-xs"}>{discountPercentage}%</Badge>
          </span>
          <span className={"font-semibold"}>
            {formatCurrency(String(discountedPrice))}
          </span>
        </p>
        <Separator />
        <p className={"flex items-center justify-between"}>
          <span className={"font-medium"}>Collection Charges</span>
          <span className={"font-semibold"}>{formatCurrency("0")}</span>
        </p>
      </CardContent>

      <CardFooter className={"flex-col gap-4"}>
        <Button
          type="button"
          className={"w-full"}
          onClick={() => prevStep()}
          disabled={!canGoToPreviousStep}
        >
          Previous
        </Button>
        <Button
          type="button"
          className={"w-full"}
          onClick={() => handleFinalSubmit()}
        >
          {canGoToNextStep ? (
            <span>Continue</span>
          ) : fetcher.state === "loading" ? (
            <span className={"inline-flex items-center gap-2"}>
              Loading... <Spinner />
            </span>
          ) : fetcher.state === "submitting" ? (
            <span className={"inline-flex items-center gap-2"}>
              Redirecting... <Spinner />
            </span>
          ) : (
            <span>Book Now</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
