import { defineCollection, z } from "astro:content";

// Source object as emitted by PublishAgent (grounding URI + title)
const sourceSchema = z.union([
  z.string(),
  z.object({ uri: z.string(), title: z.string().optional() }).passthrough(),
]);

// NOTE: `slug` is reserved by Astro and consumed for entry slug generation —
// it must NOT appear in the schema (Astro reads it from frontmatter directly,
// then exposes it as entry.slug).
const baseFrontmatter = {
  title: z.string(),
  article_type: z.string(),
  qa_score: z.number().optional(),
  word_count: z.number().optional(),
  published_at: z.string().optional(),
  published_url: z.string().optional(),
  sources: z.array(sourceSchema).optional(),
  hero_image: z.string().optional(),
  inline_images: z.array(z.string()).optional(),
};

// Long-form article types live under their own folder.
const guides = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

const boss = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

const characters = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFrontmatter,
    character_data: z
      .object({
        character_id: z.string().optional(),
        rarity: z.number().nullable().optional(),
        element: z.string().optional(),
        weapon_type: z.string().optional(),
        tier: z.string().optional(),
        role: z.array(z.string()).optional(),
        release_banner: z.string().optional(),
      })
      .passthrough()
      .optional(),
  }),
});

const weapons = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

const news = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

// "faq-source" is the per-Q source folder; pages aggregate them at /faq.
const faqSource = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

// "tier-list-source" is per-tier-list-article source; aggregated at /tier-list.
const tierListSource = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

export const collections = {
  guides,
  boss,
  characters,
  weapons,
  news,
  "faq-source": faqSource,
  "tier-list-source": tierListSource,
};
