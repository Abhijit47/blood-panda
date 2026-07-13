import { IconBasket } from "@tabler/icons-react"
import { readFile } from "fs/promises"
import { XCircleIcon } from "lucide-react"
import { debounce, parseAsString, useQueryState } from "nuqs"
import { loadSearchParams } from "~/.server/searchParams"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "~/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import {
  tests,
  type PrimaryCategory,
  type TestItem,
} from "~/constants/tests-data"
import { formatCurrency, formattedCategoryName } from "~/lib/utils"
import { useCart } from "~/stores/useCart"
import type { Route } from "./+types/tests"

export async function loader({ request }: Route.LoaderArgs) {
  const { testName } = loadSearchParams(request) // request.url works too

  const loadTests = await readFile(`./app/constants/tests.json`, "utf-8").then(
    (res) => JSON.parse(res)
  )

  const buildTestIndex = () => {
    const index = new Map<string, TestItem>() // exact lookup
    const allTests: TestItem[] = [] // for partial
    ;(Object.keys(loadTests) as Array<PrimaryCategory>).forEach(
      (primaryKey) => {
        const subCategoryGroups = tests[primaryKey]

        for (const subCategoryGroup of subCategoryGroups) {
          for (const subCategoryKey of Object.keys(subCategoryGroup)) {
            const grp = subCategoryGroup as unknown as Record<
              string,
              TestItem[]
            >
            const arr = grp[subCategoryKey] as unknown as TestItem[]
            for (const test of arr) {
              allTests.push(test)
              index.set(test.testName.toLowerCase(), test)
            }
          }
        }
      }
    )

    return { index, allTests }
  }

  const { index: exactIndex, allTests } = buildTestIndex()

  function searchTestByName(testName: string): TestItem | null {
    const q = testName.trim().toLowerCase()
    if (!q) return null

    // exact match first
    const exact = exactIndex.get(q)
    if (exact) return exact

    // partial match (q appears anywhere in testName)
    const hit = allTests.find((t) => t.testName.toLowerCase().includes(q))
    return hit ?? null
  }

  const searchItem = searchTestByName(testName)

  // console.log("searchItem", searchItem)

  const randomDelay = Math.floor(Math.random() * 1000) + 500 // random delay between 500ms and 1500ms

  await new Promise((resolve) => setTimeout(resolve, randomDelay)) // simulate delay

  return { loadTests, searchItem }
}

export function HydrateFallback() {
  return <p>Loading Tests...</p>
}

export default function TestsPage({ loaderData }: Route.ComponentProps) {
  const { loadTests, searchItem } = loaderData

  const data = loadTests as typeof tests

  // const [isPending, startTransition] = useTransition()

  const [name, setName] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      history: "push",
      shallow: false,
      scroll: false,
      limitUrlUpdates: debounce(300), // time in ms
      // startTransition: startTransition,
      clearOnDefault: true,
    })
  )

  const { addItem } = useCart()

  return (
    <main className={"mx-auto max-w-(--breakpoint-xl) space-y-8 px-4 py-12"}>
      <section className={""}>
        <div
          className={
            "relative aspect-square h-full w-full sm:aspect-video md:aspect-video lg:aspect-26/9"
          }
        >
          <img
            src="/packages/packages-bg.png"
            alt="packages-bg"
            width={"100%"}
            height={"100%"}
            className={"absolute top-0 left-0 -z-10 h-full w-full object-cover"}
          />
          <div
            className={
              "flex h-full w-full max-w-lg flex-col items-start justify-center gap-4 px-4 md:px-8 lg:px-12"
            }
          >
            <h1 className={"text-4xl font-bold text-primary"}>
              Blood Test at Home in Bangalore
            </h1>
            <p className={"text-lg text-muted-foreground"}>
              With Blood Panda, book a blood or urine lab test at home & get the
              fastest blood sample collection from home from a Certified lab
              near you in Bangalore.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput
            placeholder="Type to search..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {searchItem ? (
        <div className={"space-y-4 py-12"}>
          <div className={"flex items-center gap-4"}>
            <h2 className="text-lg text-muted-foreground">
              Search Result for: <span className="font-semibold">{name}</span>
            </h2>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size={"xs"}
                  className={"size-6"}
                  onClick={() => setName(null)}
                >
                  <XCircleIcon className={"size-4"} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear search</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div
            className={
              "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }
          >
            <Card className={"py-0"}>
              <CardHeader
                className={"h-18 bg-primary py-2 text-accent shadow-lg"}
              >
                <CardTitle className={"text-sm"}>
                  <h3 className={"text-sm"}>{searchItem.testName}</h3>
                </CardTitle>
              </CardHeader>

              <CardContent className={"space-x-3"}>
                <span className="text-muted-foreground line-through">
                  {formatCurrency(searchItem.orgPrice)}
                </span>{" "}
                <span className="text-xl font-bold text-primary">
                  {formatCurrency(searchItem.disPrice)}
                </span>
              </CardContent>

              <CardFooter className={"justify-between py-4"}>
                <Button className={"w-full"} type="button">
                  Add to cart
                  <IconBasket className="size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div>
          {Object.entries(data).map(([category, subCategories]) => (
            <section key={category} className="space-y-4">
              <h2 className="text-lg font-semibold text-muted-foreground">
                {formattedCategoryName(category)}
              </h2>
              {subCategories.map((subCategory, index) => (
                <div key={index} className="space-y-8">
                  {Object.entries(subCategory).map(
                    ([subCategoryName, tests]) => (
                      <div key={crypto.randomUUID()} className="space-y-4 p-2">
                        <h3 className="text-lg font-medium text-gray-700">
                          {formattedCategoryName(subCategoryName)}
                        </h3>

                        <div
                          className={
                            "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          }
                        >
                          {tests.map((test: TestItem) => (
                            <Card key={test.id} className={"py-0"}>
                              <CardHeader
                                className={"h-18 bg-primary py-2 text-accent"}
                              >
                                <CardTitle>
                                  <h4 className={"text-sm"}>{test.testName}</h4>
                                </CardTitle>
                              </CardHeader>

                              <CardContent className={"space-x-3"}>
                                <span className="text-muted-foreground line-through">
                                  {formatCurrency(test.orgPrice)}
                                </span>{" "}
                                <span className="text-xl font-bold text-primary">
                                  {formatCurrency(test.disPrice)}
                                </span>
                              </CardContent>

                              <CardFooter className={"py-4"}>
                                <Button
                                  className={"w-full"}
                                  type="button"
                                  onClick={() =>
                                    addItem({
                                      item: {
                                        id: test.id,
                                        name: test.testName,
                                        price: Number(test.disPrice),
                                        quantity: 1,
                                        image:
                                          "https://avatar.vercel.sh/rauchg.png",
                                      },
                                    })
                                  }
                                >
                                  Add to cart
                                  <IconBasket className="size-4" />
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      )}
    </main>
  )
}
