import { Clock10, MapPinCheck } from "lucide-react"
import { Controller, useFormContext, useWatch } from "react-hook-form"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "~/components/ui/field"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import type { BookingFormData } from "~/lib/validators/booking-schema"

const paymentOptions = [
  {
    id: crypto.randomUUID(),
    name: "COD",
    value: "COD",
    description: "Pay with cash upon delivery.",
  },
  {
    id: crypto.randomUUID(),
    name: "Online Payment",
    value: "ONLINE_PAYMENT",
    description: "Pay securely using your credit card, debit card, or UPI.",
  },
]

export default function ReviewStep() {
  const form = useFormContext<BookingFormData>()

  const watchedAddressValues = useWatch({
    name: "address",
    control: form.control,
  })

  const watchedScheduleValues = useWatch({
    name: "schedule",
    control: form.control,
  })

  return (
    <Card className={"gap-0 rounded-none shadow-none ring-0"}>
      <CardHeader>
        <CardTitle>
          <h3>Review your order</h3>
        </CardTitle>
        <CardDescription>
          <p>Order Summary</p>
        </CardDescription>
        <CardAction>0.00</CardAction>
      </CardHeader>
      <CardContent className="px-0">
        <Card className={"gap-2 rounded-none shadow-none ring-0"}>
          <CardHeader>
            <CardTitle>
              <h4 className={"text-sm"}>Sample Collection</h4>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <ItemGroup>
              <Item variant="outline" size={"xs"}>
                <ItemMedia variant="image">
                  <MapPinCheck />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>From Home</ItemTitle>
                  <ItemDescription>
                    {/* Bengaluru, Karnataka 560002, India */}
                    {watchedAddressValues?.location},{" "}
                    {watchedAddressValues?.pincode}, India
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button type="button" size="sm" variant="outline">
                    Edit
                  </Button>
                </ItemActions>
              </Item>
              <Item variant="outline" size={"xs"}>
                <ItemMedia variant="image">
                  <Clock10 />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>1st Collection</ItemTitle>
                  <ItemDescription>
                    {/* {format(
                      new Date(watchedScheduleValues?.scheduleDate) ??
                        new Date(),
                      "dd MMM yyyy"
                    )}{" "}
                    at {watchedScheduleValues?.slotTime} */}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button type="button" size="sm" variant="outline">
                    Edit
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </CardContent>
          <CardContent>
            <FieldGroup>
              <Controller
                name="reviewOrder.paymentMode"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FieldSet data-invalid={fieldState.invalid}>
                    <FieldLegend>Plan</FieldLegend>
                    <FieldDescription>
                      You can upgrade or downgrade your plan at any time.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      aria-invalid={fieldState.invalid}
                    >
                      {paymentOptions.map((opts) => (
                        <FieldLabel
                          key={opts.id}
                          htmlFor={`form-rhf-radiogroup-${opts.id}`}
                        >
                          <Field
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                          >
                            <FieldContent>
                              <FieldTitle>{opts.name}</FieldTitle>
                              <FieldDescription>
                                {opts.description}
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              value={opts.value}
                              id={`form-rhf-radiogroup-${opts.id}`}
                              aria-invalid={fieldState.invalid}
                            />
                          </Field>
                        </FieldLabel>
                      ))}
                    </RadioGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldSet>
                )}
              />
            </FieldGroup>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
