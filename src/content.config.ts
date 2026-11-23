import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Posts live in src/content/blog/<YYYY-MM>/<slug>.md; the id (YYYY-MM/slug) is the URL under /blog/.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    archived: z.boolean().default(false),
  }),
});

export const collections = { blog };
