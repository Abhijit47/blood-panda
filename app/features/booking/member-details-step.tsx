import { MinusCircleIcon, PlusCircleIcon } from "lucide-react"
import { Controller, useFieldArray, useFormContext } from "react-hook-form"
// import { useLoaderData } from "react-router"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { type MemberDetailsFormData } from "~/lib/validators/booking-schema"
// import type { Route } from "../../../.react-router/types/app/routes/private/+types/booking"
import { Separator } from "~/components/ui/separator"
import { GenderEnums } from "~/constants"
// import type { Route } from "../../routes/private/+types/booking"
import MembersTestItems from "./members-test-items"
import UploadPrescription from "./upload-prescription"

export default function BasicDetailsStep() {
  // const loaderData = useLoaderData<Route.ComponentProps["loaderData"]>()

  const form = useFormContext<MemberDetailsFormData>()

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "memberDetails",
  })

  // Now your UI actions
  // add/remove member -> call both RHF and zustand
  const handleAddMember = () => {
    append({
      name: "",
      email: "",
      phone: "",
      gender: "OTHER",
      age: "0",
      testItems: undefined,
      isAssignedDoctor: false,
      assignedDoctor: "no",
    })
  }

  const handleRemoveMember = (idx: number) => {
    remove(idx)
  }

  return (
    <FieldGroup className={"gap-3"}>
      <Card className={"rounded-none shadow-none ring-0"}>
        <CardHeader>
          <CardTitle>Who is getting tested ?</CardTitle>
        </CardHeader>

        {/* <p>{formatCurrency(String(subtotal))}</p> */}

        <CardContent className={"px-0"}>
          {fields.map((row, idx) => {
            return (
              <Card
                key={row.id}
                className={"rounded-none py-0 shadow-none ring-0"}
              >
                <CardContent
                  className={"grid grid-cols-1 gap-4 px-4 md:grid-cols-2"}
                >
                  <Card className={"rounded-none py-0 shadow-none ring-0"}>
                    <CardHeader>
                      <CardTitle>Member {idx + 1}</CardTitle>
                      {idx === 0 ? null : (
                        <CardAction>
                          <Button
                            type="button"
                            variant={"destructive"}
                            size="sm"
                            onClick={() => handleRemoveMember(idx)}
                            disabled={fields.length === 1}
                            className={
                              "disabled:cursor-not-allowed disabled:opacity-50"
                            }
                          >
                            <MinusCircleIcon className={"size-4"} />
                            Remove member
                          </Button>
                        </CardAction>
                      )}
                    </CardHeader>
                    <CardContent>
                      <FieldGroup className="gap-3">
                        <div
                          className={"grid grid-cols-1 gap-4 lg:grid-cols-2"}
                        >
                          <Controller
                            name={`memberDetails.${idx}.name`}
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}
                              >
                                <FieldLabel htmlFor="member-name">
                                  Member name
                                </FieldLabel>
                                <Input
                                  id="member-name"
                                  placeholder="Alan Turing"
                                  aria-invalid={fieldState.invalid}
                                  {...field}
                                />
                              </Field>
                            )}
                          />
                          <Controller
                            name={`memberDetails.${idx}.email`}
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}
                              >
                                <FieldLabel htmlFor="member-email">
                                  Member email
                                </FieldLabel>
                                <Input
                                  id="member-email"
                                  placeholder="alan@gmail.com"
                                  aria-invalid={fieldState.invalid}
                                  {...field}
                                />
                              </Field>
                            )}
                          />
                        </div>
                        <div
                          className={"grid grid-cols-1 gap-4 lg:grid-cols-2"}
                        >
                          <Controller
                            name={`memberDetails.${idx}.phone`}
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}
                              >
                                <FieldLabel htmlFor="member-phone">
                                  Member phone
                                </FieldLabel>
                                <Input
                                  id="member-phone"
                                  type="tel"
                                  placeholder="+91 9876543210"
                                  aria-invalid={fieldState.invalid}
                                  {...field}
                                />
                              </Field>
                            )}
                          />
                          <Controller
                            name={`memberDetails.${idx}.age`}
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}
                              >
                                <FieldLabel htmlFor="member-age">
                                  Member age
                                </FieldLabel>
                                <Input
                                  id="member-age"
                                  type="number"
                                  placeholder="22"
                                  aria-invalid={fieldState.invalid}
                                  {...field}
                                  onChange={(e) => {
                                    const value = e.target.value
                                    field.onChange(value)
                                  }}
                                />
                              </Field>
                            )}
                          />
                        </div>

                        <FieldSet className="w-full" key={row.id}>
                          <FieldLegend variant="label">
                            Gender Preferences
                          </FieldLegend>
                          <FieldDescription>
                            Please select the gender preference for the medical
                            professional who will be conducting the test.
                          </FieldDescription>
                          <Controller
                            name={`memberDetails.${idx}.gender`}
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <RadioGroup
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                                className={"gap-2"}
                              >
                                {GenderEnums.map((gender, idx) => (
                                  <Field
                                    orientation="horizontal"
                                    data-invalid={fieldState.invalid}
                                    aria-invalid={fieldState.invalid}
                                    key={idx}
                                  >
                                    <RadioGroupItem
                                      value={gender}
                                      id={gender}
                                      aria-invalid={fieldState.invalid}
                                    />
                                    <FieldLabel
                                      htmlFor={gender}
                                      className="font-normal capitalize"
                                    >
                                      {gender}
                                    </FieldLabel>
                                  </Field>
                                ))}

                                {fieldState.invalid && (
                                  <FieldError errors={[fieldState.error]} />
                                )}
                              </RadioGroup>
                            )}
                          />
                        </FieldSet>
                      </FieldGroup>
                    </CardContent>
                  </Card>

                  <MembersTestItems parentIndex={idx} key={row.id} />

                  {/* Upload prescription */}
                  <UploadPrescription parentIdx={idx} key={row.id} />
                </CardContent>
                <Separator className={"mb-4"} />
              </Card>
            )
          })}
        </CardContent>

        <CardFooter>
          <Button
            type="button"
            variant={"outline"}
            size="sm"
            onClick={() => handleAddMember()}
            disabled={fields.length >= 3}
            className={"disabled:cursor-not-allowed disabled:opacity-50"}
          >
            <PlusCircleIcon className={"size-4"} />
            Add member
          </Button>
        </CardFooter>
      </Card>
    </FieldGroup>
  )
}
