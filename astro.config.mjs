import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// We hand-roll sitemap.xml.ts instead of using @astrojs/sitemap to avoid
// the integration's "undefined.reduce" crash when dynamic-route collections
// are empty (news / weapons in early launch).
export default defineConfig({
  site: "https://ntecodex.com",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
