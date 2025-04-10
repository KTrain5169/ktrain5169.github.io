// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
import { glob, file } from "astro/loaders"; 
// 2. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    author: reference('authors'),
    draft: z.boolean()
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects"}),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    creationDate: z.coerce.date().optional(),
    maintainer: z.string().optional(),
    link: z.string().optional(),
    download: z.string().optional(),
    source: z.string().optional(),
    docs: z.string().optional(),
  }),
});

const authorCollection = defineCollection({
  loader: file("src/data/authors.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    nicks: z.array(z.string()).optional(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    pfp: z.string().optional(),
    written_posts: z.array(z.string()), // we reference these later
    socials: z.array(z.object({
      title: z.string(),
      link: z.string()
    })).optional(),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  authors: authorCollection,
};
