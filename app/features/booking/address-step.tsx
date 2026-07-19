import { Controller, useFormContext } from "react-hook-form"
import { Map, MapControls } from "~/components/map"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Switch } from "~/components/ui/switch"
import { type BookingFormData } from "~/lib/validators/booking-schema"

export default function AddressStep() {
  const form = useFormContext<BookingFormData>()

  return (
    <FieldGroup className="gap-3">
      <Card className={"rounded-none shadow-none ring-0"}>
        <CardHeader>
          <CardTitle>Where shall we collect your sample?</CardTitle>
        </CardHeader>
        <CardContent className={"space-y-4"}>
          <Controller
            name="address.location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}
              >
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input
                  id="location"
                  placeholder="Enter location"
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Card className="h-80 overflow-hidden p-0">
            <Map center={[77.5946, 12.9716]} zoom={11}>
              <MapControls />
            </Map>
          </Card>

          <div className="grid grid-cols-3 gap-4">
            <Controller
              name="address.houseNo"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className="col-span-full lg:col-span-2"
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="house-flat-floor-no">
                    House / Flat / Floor No.
                  </FieldLabel>
                  <Input
                    id="house-flat-floor-no"
                    placeholder="Enter house / flat / floor no."
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="address.pincode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className="col-span-full lg:col-span-1"
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="pincode">Pincode</FieldLabel>
                  <Input
                    id="pincode"
                    placeholder="Enter pincode"
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="address.landmark"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}
              >
                <FieldLabel htmlFor="landmark-directions">
                  Landmark / Directions to reach (Optional)
                </FieldLabel>
                <Input
                  id="landmark-directions"
                  placeholder="Near nowhere, 123, road"
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <FieldSeparator />

          <Controller
            name="address.isChecked"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel htmlFor="address-type">Address Type</FieldLabel>
                  <FieldDescription>Select your address type</FieldDescription>
                </FieldContent>

                <div className="flex items-center gap-2">
                  <span>Home</span>
                  <Switch
                    id="address-type"
                    className="w-10"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked)
                      form.setValue(
                        "address.addressType",
                        !checked ? "HOME" : "OTHER",
                        {
                          shouldValidate: true,
                          shouldDirty: true,
                          shouldTouch: true,
                        }
                      )
                    }}
                    aria-invalid={fieldState.invalid}
                  />
                  <span>Office</span>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </CardContent>
      </Card>
    </FieldGroup>
  )
}
