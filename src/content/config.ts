import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    state: z.enum(["Fertig", "In Arbeit"]),
    github: z.string().url().optional(),
    links: z.array(z.object({
      title: z.string(),
      url: z.string().url()
    })).optional().default([]),
    featured: z.boolean().optional().default(false),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
});

export const collections = { projects };
