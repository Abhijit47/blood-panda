import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email"
import { formatCurrency } from "~/lib/utils"
import tailwindConfig from "./tailwind.config"

const baseUrl = process.env.BETTER_AUTH_URL
  ? `https://${process.env.BETTER_AUTH_URL}`
  : "http://localhost:5173"

const previewProps = {
  name: "Jhon doe",
  email: "someone@gmail.com",
  orderId: "ML4F5L8522",
  documentNo: "186623754793",
  invoiceDate: "18 Jan 2023",
  itemQuantity: 1,
  itemName: "Urine Test",
  itemDescription: "Urine Test (Monthly)",
  itemOrgPrice: "1500",
  discount: "30",

  // billed to
  paymentDoneBy: "Visa .... 7461 (Apple Pay)",
  billedToName: "Alan Turing",
  billedToAddress1: "2125 Chestnut St",
  billedToAddress2: "San Francisco, CA 94123",
  billedToCountry: "USA",
}

type PreviewProps = typeof previewProps

export default function PurchaseReceiptEmail(props: PreviewProps) {
  const totalAmount =
    Number(props.itemOrgPrice) -
    (Number(props.itemOrgPrice) * Number(props.discount)) / 100

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="font-apple bg-white">
          <Preview>
            Blood Test Purchase Receipt - Thank you for your purchase!
          </Preview>
          <Container className="mx-auto w-165 max-w-full px-0 pt-5 pb-12">
            <Section>
              <Row>
                <Column>
                  <Img
                    src={`${baseUrl}/logo-idol.png`}
                    width="80"
                    height="60"
                    alt="Blood Panda"
                  />
                </Column>

                <Column align="right" className="table-cell">
                  <Text className="my-4 text-[32px] leading-6 font-light text-[#888888]">
                    Invoice
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <Heading as="h1" className={"mt-7"}>
                <Text className="m-0 text-center text-[32px] leading-6 font-light text-[#111111]">
                  Thank you for your purchase, {props.name}!
                </Text>
              </Heading>
              <Text className="m-0 mt-4 mb-10 text-center font-sans text-[14px] leading-6 font-medium text-[#111111]">
                Your purchase receipt from Blood Panda is attached below.
              </Text>
            </Section>
            <Section className="border-collapse border-spacing-0 rounded-[3px] bg-[rgb(250,250,250)] p-2 text-[12px] text-[rgb(51,51,51)]">
              <Row className="min-h-11.5">
                <Column colSpan={2}>
                  <Section>
                    <Row>
                      <Column className="min-h-11 border-0 border-r border-b border-solid border-white pl-5">
                        <Text className="m-0 p-0 text-[10px] leading-[1.4] text-[rgb(102,102,102)]">
                          EMAIL ID
                        </Text>
                        <Link className="m-0 p-0 text-[12px] leading-[1.4] text-[#15c] underline">
                          {props.email}
                        </Link>
                      </Column>
                    </Row>

                    <Row>
                      <Column className="min-h-11 border-0 border-r border-b border-solid border-white pl-5">
                        <Text className="m-0 p-0 text-[10px] leading-[1.4] text-[rgb(102,102,102)]">
                          INVOICE DATE
                        </Text>
                        <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                          {props.invoiceDate}
                        </Text>
                      </Column>
                    </Row>

                    <Row>
                      <Column className="min-h-11 border-0 border-r border-b border-solid border-white pl-5">
                        <Text className="m-0 p-0 text-[10px] leading-[1.4] text-[rgb(102,102,102)]">
                          ORDER ID
                        </Text>
                        <Link className="m-0 p-0 text-[12px] leading-[1.4] text-[#15c] underline">
                          {props.orderId}
                        </Link>
                      </Column>
                      <Column className="min-h-11 border-0 border-r border-b border-solid border-white pl-5">
                        <Text className="m-0 p-0 text-[10px] leading-[1.4] text-[rgb(102,102,102)]">
                          DOCUMENT NO.
                        </Text>
                        <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                          {props.documentNo}
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>
                <Column
                  className="min-h-11 border-0 border-r border-b border-solid border-white pl-5"
                  colSpan={2}
                  align="right"
                >
                  <Text className="m-0 p-0 text-[10px] leading-[1.4] text-[rgb(102,102,102)]">
                    BILLED TO
                  </Text>
                  <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                    {props.paymentDoneBy}
                  </Text>
                  <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                    {props.billedToName}
                  </Text>
                  <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                    {props.billedToAddress1}
                  </Text>
                  <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                    {props.billedToAddress2}
                  </Text>
                  <Text className="m-0 p-0 text-[12px] leading-[1.4]">
                    {props.billedToCountry}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className="mt-7.5 mb-3.75 min-h-6 border-collapse border-spacing-0 rounded-[3px] bg-[rgb(250,250,250)] text-[12px] text-[rgb(51,51,51)]">
              <Text className="m-0 bg-[#fafafa] pl-2.5 text-sm leading-6 font-medium">
                Purchase Summary
              </Text>
            </Section>
            <Section>
              <Row>
                <Column className="w-16">
                  <Img
                    src={`${baseUrl}/packages/3.svg`}
                    width="64"
                    height="64"
                    alt={props.itemName}
                    className="ml-5 rounded-[14px] border border-solid border-[rgb(242,242,242)]"
                  />
                </Column>
                <Column className="pl-5.5">
                  <Text className="m-0 p-0 text-xs leading-[1.4] font-semibold">
                    {props.itemName}
                  </Text>
                  <Text className="m-0 p-0 text-xs leading-[1.4] text-[rgb(102,102,102)]">
                    {props.itemDescription}
                  </Text>
                  <Text className="m-0 p-0 text-xs leading-[1.4] text-[rgb(102,102,102)]">
                    Quantity: {props.itemQuantity}
                  </Text>
                </Column>

                <Column
                  className="table-cell w-25 pr-5 align-top"
                  align="right"
                >
                  <Text className="m-0 text-[12px] leading-6 font-semibold">
                    {formatCurrency(props.itemOrgPrice)}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mt-7.5 mb-0" />
            <Section>
              <Row>
                <Column className="table-cell" align="right">
                  <Text className="m-0 p-0 pr-7.5 text-right text-[10px] font-semibold text-[rgb(102,102,102)]">
                    DISCOUNT
                  </Text>
                </Column>
                <Column className="table-cell w-22.5">
                  <Text className="m-0 mr-5 text-right text-base font-semibold whitespace-nowrap">
                    {props.discount}%
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mt-2.5 mb-0" />
            <Section align="right">
              <Row>
                <Column className="table-cell" align="right">
                  <Text className="m-0 p-0 pr-7.5 text-right text-[10px] font-semibold text-[rgb(102,102,102)]">
                    TOTAL
                  </Text>
                </Column>
                <Column className="min-h-12 pt-12 [border-left:1px_solid_rgb(238,238,238)]" />
                <Column className="table-cell w-22.5">
                  <Text className="m-0 mr-5 text-right text-base font-semibold whitespace-nowrap">
                    {formatCurrency(String(totalAmount))}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mb-18.75" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

PurchaseReceiptEmail.defaultProps = {
  ...previewProps,
}
