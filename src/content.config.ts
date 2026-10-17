import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      state: z.enum(["Fertig", "In Arbeit"]),
      github: z.url().optional(),
      links: z
        .array(
          z.object({
            title: z.string(),
            url: z.url(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      startDate: z.date().optional(),
      endDate: z.date().optional(),
    }),
});

export const collections = { projects };
