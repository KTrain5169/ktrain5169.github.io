// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    author: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  projects: projects,
};
