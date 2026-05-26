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
  // Multi-game tag (Phase 2.3, 2026-05-12). Backfilled to "nte" for
  // every pre-pivot article. New articles inherit it from
  // articles.outline.game (set by the orchestrator) → frontmatter via
  // PublishAgent.
  game: z.string().default("nte"),
  article_type: z.string(),
  qa_score: z.number().optional(),
  word_count: z.number().optional(),
  published_at: z.string().optional(),
  published_url: z.string().optional(),
  sources: z.array(sourceSchema).optional(),
  hero_image: z.string().optional(),
  inline_images: z.array(z.string()).optional(),
  inline_image_sections: z.array(z.string()).optional(),
  // Optional 1-2 sentence "quick answer" rendered as a callout at the top
  // of the article body. Lets readers get the answer immediately without
  // scrolling — boosts dwell time + reduces bounce. Set in frontmatter
  // by future writer-pipeline upgrade; omitted = no callout (don't fake).
  quick_answer: z.string().optional(),
  // Set true when the article body contains affiliate links — renders the
  // FTC disclosure banner at the top via ArticleLayout. Default false.
  affiliate: z.boolean().optional(),
  // Structured product list for "best X for Y" round-ups and side-by-side
  // comparisons. When present (and affiliate==true), the guides render
  // page mounts <ProductRoundup> above the prose body. Each product yields
  // a card with image / rating / price / pros-cons / "Check on Amazon"
  // affiliate CTA (rel="sponsored").
  products: z
    .array(
      z.object({
        name: z.string(),
        asin: z.string().optional(),
        image: z.string().optional(),
        price_usd: z.number().optional(),
        rating: z.number().optional(),
        review_count: z.number().optional(),
        pros: z.array(z.string()).optional(),
        cons: z.array(z.string()).optional(),
        best_for: z.string().optional(),
        affiliate_url: z.string().optional(),
        verdict: z.string().optional(),
      })
    )
    .optional(),
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
