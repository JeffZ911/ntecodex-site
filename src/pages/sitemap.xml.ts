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
  for (const c of characters) {
    dynamic.push({ url: `/characters/${c.slug}`, lastmod: c.data.published_at });
  }
  for (const g of guides) {
    dynamic.push({ url: `/guides/${g.slug}`, lastmod: g.data.published_at });
  }
  for (const b of boss) {
    dynamic.push({ url: `/boss/${b.slug}`, lastmod: b.data.published_at });
  }
  for (const n of news) {
    dynamic.push({ url: `/news/${n.slug}`, lastmod: n.data.published_at });
  }
  for (const w of weapons) {
    dynamic.push({ url: `/weapons/${w.slug}`, lastmod: w.data.published_at });
  }

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
