import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
    loader: glob({
        base: "./src/content/news",
        pattern: "**/*.{md,mdx}",
    }),
    schema: z.object({
        title: z.string(),
        publishedAt: z.coerce.date(),
        description: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { news };
