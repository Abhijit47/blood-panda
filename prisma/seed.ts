import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../app/generated/prisma/client.js"

import { readdir, readFile } from "node:fs/promises"
import { join } from "node:path"
import type { MiniPackage } from "~/types/index.js"

const normalizeCategory = (value: string) =>
  value
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .toLowerCase()
function nameLowerUnderScore(name: string) {
  // loop through each character in the string and replace hyphen with underscores and convert to lowercase

  // handle this case: hormones, thyroid_tumor_markers (remove comma, space with uderscore, and convert to lowercase)
  return normalizeCategory(
    name
      .split("")
      .map(
        (char) =>
          char === "-" || char === " " || char === ","
            ? "_"
            : char.toLowerCase()
        // char === " " || char === "," ? "_" : char === " " ? "_" : char
      )
      // .map((char) => (char === "-" ? "_" : char.toLowerCase()))
      .join("")
  )
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({
  adapter,
})

const primaryCategoryFilePath = join(
  process.cwd(),
  "./docs/primary_category.json"
)
// const primaryCategoryFilePath = "../docs/primary_category.json"
// const secondaryCategoryFilePath = "../docs/secondary_category.json"
const secondaryCategoryFilePath = join(
  process.cwd(),
  "./docs/secondary_category.json"
)

const bloodTestsFilePath = join(process.cwd(), "./docs/blood_test.json")

const miniPackagesFilePath = join(process.cwd(), "./docs/mini_package.json")

const packagesCategoryFilePath = join(
  process.cwd(),
  "./docs/package_category.json"
)

const packagesFilePath = join(process.cwd(), "./docs/package_modified.json")

async function readPrimaryCategoryFromFile(
  filePath: string,
  encoding: BufferEncoding
) {
  return readFile(filePath, encoding).then((res) => JSON.parse(res))
}

// read all json files only
const MiniPackagesfilesPath = "./app/constants/mini-packages"
const PackagesfilesPath = "./app/constants/packages"

async function readingFileFromLocal(
  filesPath: string,
  encoding: BufferEncoding
) {
  return readdir(filesPath, { withFileTypes: true }).then((files) => {
    const jsonFiles = files.filter(
      (file) => file.isFile() && file.name.endsWith(".json")
    )
    // console.log("jsonFiles", jsonFiles.map((file) => file.name))

    return Promise.all(
      jsonFiles.map(async (file) => {
        return {
          fileName: file.name.replace(".json", ""),
          data: (await readFile(`${filesPath}/${file.name}`, encoding).then(
            (res) => JSON.parse(res)
          )) as MiniPackage,
        }
      })
    )
  })
}

export async function main() {
  try {
    console.log("Start seeding ... 🌱🌱🌱")

    // console.log("prepared", prepared)

    // const res1 = await readPrimaryCategoryFromFile(
    //   primaryCategoryFilePath,
    //   "utf-8"
    // )
    // const res2 = await readPrimaryCategoryFromFile(
    //   secondaryCategoryFilePath,
    //   "utf-8"
    // )
    // const res3 = await readPrimaryCategoryFromFile(bloodTestsFilePath, "utf-8")
    // console.log("res3", res3)

    // const res4 = await readingFileFromLocal(filesPath, "utf-8")
    // // console.log("res", res4)

    // const res5 = (await readPrimaryCategoryFromFile(
    //   packagesCategoryFilePath,
    //   "utf-8"
    // )) as {
    //   id: string
    //   name: string
    //   features: string[]
    //   createdAt: string
    //   updatedAt: string
    //   packageId: string
    // }[]
    // console.log("res5", res5)

    // remove the duplicates by name
    // const filtered = res5.filter(
    //   (value, index, self) =>
    //     index === self.findIndex((t) => t.name === value.name)
    // )
    // console.log("filtered", filtered)
    // console.log("filtered.len", filtered.length)

    // const res6 = await readingFileFromLocal(PackagesfilesPath, "utf-8")
    // console.log("res5", JSON.stringify(res6, null, 2))

    // const preparedPackages = res6.map((plan) => {
    //   return {
    //     name: nameLowerUnderScore(plan.fileName),
    //   }
    // })

    // const final1 = res1.map((item: any) => ({
    //   ...item,
    //   name: nameLowerUnderScore(item.name),
    // }))
    // const final2 = res2.map((item: any) => ({
    //   ...item,
    //   name: nameLowerUnderScore(item.name),
    // }))

    // const prepared = res4.map((plan) => {
    //   return {
    //     name: nameLowerUnderScore(plan.fileName),
    //     description:
    //       "This package includes " +
    //       plan.data.benefits.length +
    //       " individual tests",
    //     cover: "/packages-bg.png",
    //     originalAmount: plan.data.orgPrice,
    //     discountedAmount: plan.data.disPrice,
    //     offerAmount: plan.data.offerPercent,
    //     benefits: plan.data.benefits,
    //     extraFeatures: plan.data.extraFeatures,
    //   }
    // })

    // console.log("primaryCategoryFilePath", final1)
    // console.log("secondaryCategoryFilePath", final2)

    // const sortedPackages = await readPrimaryCategoryFromFile(
    //   packagesFilePath,
    //   "utf-8"
    // )
    // const preparedPackages = sortedPackages.map((plan: any) => {
    //   return {
    //     name: plan.name,
    //     description: plan.description,
    //     cover: plan.cover,
    //     originalAmount: plan.originalAmount,
    //     discountedAmount: plan.discountedAmount,
    //     offerAmount: plan.offerAmount,
    //     extraFeatures: plan.extraFeatures,
    //     categoryIds: plan.category,
    //   }
    // })

    // console.log("preparedPackages", preparedPackages)
    // console.log("preparedPackages.len", preparedPackages.length)

    // ===*******=== WORKING CODE ===*******===
    // await prisma.$connect()

    // ===== BloodTest category creation =====
    // for (const item of final1) {
    //   await new Promise((resolve) => setTimeout(resolve, 50))
    //   await prisma.primaryCategory.create({
    //     data: {
    //       id: item.id,
    //       name: item.name,
    //     },
    //   })
    //   await new Promise((resolve) => setTimeout(resolve, 150))
    //   console.log("Created primary category:", item.name, "created.")
    // }

    // for (const item of final2) {
    //   await new Promise((resolve) => setTimeout(resolve, 50))
    //   await prisma.secondaryCategory.create({
    //     data: {
    //       id: item.id,
    //       name: item.name,
    //     },
    //   })
    //   await new Promise((resolve) => setTimeout(resolve, 150))
    //   console.log("Created secondary category:", item.name, "created.")
    // }
    // ===== BloodTest category creation end =====

    // ===== BloodTest category creation =====
    // for (const item of res3) {
    //   await new Promise((resolve) => setTimeout(resolve, 50))
    //   await prisma.bloodTest.create({
    //     data: {
    //       name: item.name,
    //       originalPrice: item.originalPrice,
    //       discountedPrice: item.discountedPrice,
    //       discountAmount: item.discountAmount,
    //       primaryCategoryId: item.primaryCategoryId,
    //       secondaryCategoryId: item.secondaryCategoryId,
    //     },
    //   })
    //   await new Promise((resolve) => setTimeout(resolve, 150))
    //   console.log("Created blood test:", item.name, "created.")
    // }
    // ===== BloodTest category creation end =====

    // ===== Mini packages creation =====
    // for (const item of prepared) {
    //   await new Promise((resolve) => setTimeout(resolve, 50))
    //   await prisma.miniPackage.create({
    //     data: {
    //       name: item.name,
    //       description: item.description,
    //       cover: item.cover,
    //       benefits: item.benefits,
    //       originalAmount: item.originalAmount,
    //       discountedAmount: item.discountedAmount,
    //       offerAmount: item.offerAmount,
    //       extraFeatures: item.extraFeatures,
    //     },
    //   })
    //   await new Promise((resolve) => setTimeout(resolve, 150))
    //   console.log("Created mini package:", item.name, "created.")
    // }
    // ===== Mini packages creation end =====

    // ===== Packages category creation =====
    // for (const item of filtered) {
    //   await new Promise((resolve) => setTimeout(resolve, 50))
    //   await prisma.packageCategory.create({
    //     data: {
    //       name: item.name,
    //       features: item.features,
    //     },
    //   })
    //   console.log("Created package category:", item.name, "created.")
    //   await new Promise((resolve) => setTimeout(resolve, 150))
    // }
    // ===== Packages category creation end =====

    // ===== Packages creation =====
    // for (const plan of preparedPackages) {
    //   await new Promise((resolve) => setTimeout(resolve, 150))
    //   await prisma.package.create({
    //     data: {
    //       name: plan.name,
    //       description: plan.description,
    //       originalAmount: plan.originalAmount,
    //       discountedAmount: plan.discountedAmount,
    //       offerAmount: plan.offerAmount,
    //       extraFeatures: plan.extraFeatures,
    //       cover: plan.cover,
    //       packageCategories: {
    //         connect: plan.categoryIds.map((id: string) => ({ id })),
    //       },
    //     },
    //     include: {
    //       packageCategories: true,
    //     },
    //   })
    //   await new Promise((resolve) => setTimeout(resolve, 250))
    //   console.log("Created package:", plan.name, "created.")
    // }
    // ===== Packages creation end=====

    // for (const plan of prepared) {
    //   await prisma.bloodTest.create({
    //     data: {
    //       name: plan.name,
    //       originalPrice: plan.originalPrice,
    //       discountedPrice: plan.discountedPrice,
    //       discountAmount: plan.discountAmount,
    //       primaryCategoryId: plan.primaryCategoryId,
    //       secondaryCategoryId: plan.secondaryCategoryId,
    //     },
    //   })
    // }
  } catch (error) {
    console.error("Error seeding data:", error)
    process.exit(1) // Exit the process with a failure code
  }
}

main()
  .then(async () => {
    // await prisma.$disconnect()
    console.log("Seeding finished. 🌱🌱🌱")
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
