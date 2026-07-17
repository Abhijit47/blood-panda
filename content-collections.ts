import {
  defineCollection,
  defineConfig,
  defineSingleton,
  type CollectionContext,
  type Schema,
} from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import { exec as execProcess } from "node:child_process"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { promisify } from "util"
import { z } from "zod"

const exec = promisify(execProcess)

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(), // Changed from 'coverImage' to match JSON
  summary: z.string(),
  content: z.string(),
  categories: z.array(z.string()),
  author: z.string(),
  draft: z.boolean().default(false),
  createdAt: z.coerce.date().transform((d) => d.toISOString()),
})

export const policySchema = z.object({
  title: z.string(),
  summary: z.string(),
  content: z.string(),
  slug: z.string(),
  lastModified: z.string(),
  draft: z.boolean().default(false),
})

const privacyPolicy = defineSingleton({
  name: "privacy-policy",
  filePath: "/app/contents/policies/privacy-policy.mdx",
  schema: policySchema,

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip("document is a draft")
    }
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })
    return {
      ...document,
      mdx,
    }
  },
})

const termsAndConditions = defineSingleton({
  name: "terms-and-conditions",
  filePath: "/app/contents/policies/terms-and-conditions.mdx",
  schema: policySchema,
  transform: async (document, context) => {
    if (document.draft) {
      return context.skip("document is a draft")
    }
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })
    return {
      ...document,
      mdx,
    }
  },
})

const refundPolicy = defineSingleton({
  name: "refund-policy",
  filePath: "/app/contents/policies/refund-policy.mdx",
  schema: policySchema,
  transform: async (document, context) => {
    if (document.draft) {
      return context.skip("document is a draft")
    }
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })
    return {
      ...document,
      mdx,
    }
  },
})

export type PostValues = z.infer<typeof postSchema>

export type PostDocument = Schema<"frontmatter", typeof postSchema>

export type Transformed = CollectionContext<PostValues>["collection"]

function calcReadTime(document: PostDocument) {
  const wordsPerMinute = 150 // Average reading speed
  const text = document.content
  const wordCount = text.split(/\s+/).length

  return Math.ceil(wordCount / wordsPerMinute)
}

const posts = defineCollection({
  name: "posts",
  directory: "/app/contents/posts/",
  include: ["**/*.md", "**/*.mdx"],
  schema: postSchema,

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip("document is a draft")
    }

    const docs = await context.collection.documents()
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath
    )

    // Transform the content to a MDX component
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    // Get last modification date from Git
    // const lastModified = await context.cache(
    //   document._meta.filePath,
    //   async (filePath) => {
    //     const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`)
    //     if (stdout) {
    //       return new Date(stdout.trim()).toISOString()
    //     }
    //     return new Date().toISOString()
    //   }
    // )

    // Assuming 200 words per minute reading speed
    // const wordLimit = 200;
    // const readTime = Math.ceil(document.content.split(' ').length / wordLimit);
    const readTime = calcReadTime(document)

    return {
      ...document,
      mdx,
      // lastModified,
      // slug: document.title.toLowerCase().replace(/ /g, "-"),
      readTime,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null,
    }
  },
  onSuccess: (post) => {
    console.log(`Successfully validated post: ${post.length}`)
  },
})

export default defineConfig({
  content: [posts, privacyPolicy, termsAndConditions, refundPolicy],
})
