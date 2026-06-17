import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://ntecodex.com";

const STATIC_PATHS = [
  "/",
  "/tier-list",
  "/characters",
  "/guides",
  "/boss",
  "/faq",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
];

export const GET: APIRoute = async () => {
  const characters = await getCollection("characters");
  const guides = await getCollection("guides");
  const boss = await getCollection("boss");
  const news = await getCollection("news");
  const weapons = await getCollection("weapons");

  const dynamic: { url: string; lastmod?: string }[] = [];

  // Quality gate (content-pruning, 2026-05-25): pages with qa_score < 6.0 are
  // noindex'd (strong-tier band), so they must NOT appear in the sitemap —
  // advertising noindex'd URLs sends Google mixed signals. Keep the threshold
  // in sync with ArticleLayout's NOINDEX_BELOW.
  const NOINDEX_BELOW = 6.0;

  // Prefer entry.data.published_url (authoritative — matches what
  // PublishAgent wrote and what the [...slug] route resolves to). Falls back
  // to the directory-derived form when missing.
  const pushEntry = (
    fallbackPrefix: string,
    e: { slug: string; data: { published_url?: string; published_at?: string; qa_score?: number; affiliate?: boolean } }
  ) => {
    if (typeof e.data.qa_score === "number" && e.data.qa_score < NOINDEX_BELOW) return;
    // Affiliate gear roundups are noindex'd (see ArticleLayout) to concentrate
    // authority on game content — keep them out of the sitemap to match.
    if (e.data.affiliate === true) return;
    const url = e.data.published_url || `/${fallbackPrefix}/${e.slug}`;
    dynamic.push({ url, lastmod: e.data.published_at });
  };

  for (const c of characters) pushEntry("characters", c);
  for (const g of guides)     pushEntry("guides",     g);
  for (const b of boss)       pushEntry("boss",       b);
  for (const n of news)       pushEntry("news",       n);
  for (const w of weapons)    pushEntry("weapons",    w);

  const today = new Date().toISOString().slice(0, 10);
  const all: { url: string; lastmod: string }[] = [
    ...STATIC_PATHS.map((p) => ({ url: p, lastmod: today })),
    ...dynamic.map((d) => ({ url: d.url, lastmod: (d.lastmod || today).slice(0, 10) })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    all
      .map(
        (e) =>
          `  <url><loc>${SITE}${e.url}</loc><lastmod>${e.lastmod}</lastmod></url>`
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
