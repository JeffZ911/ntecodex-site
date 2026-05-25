import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// Dependency-free rehype plugin: harden outbound citation links (the writer
// now cites authoritative sources inline). Any absolute http(s) link whose
// host isn't ntecodex.com gets target=_blank + rel="noopener noreferrer".
// Internal/relative links are untouched (they stay same-tab, dofollow).
const SITE_HOST = "ntecodex.com";
function rehypeExternalLinks() {
  const walk = (node) => {
    if (
      node.tagName === "a" &&
      node.properties &&
      typeof node.properties.href === "string"
    ) {
      const href = node.properties.href;
      if (/^https?:\/\//i.test(href) && !href.includes(SITE_HOST)) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

// We hand-roll sitemap.xml.ts instead of using @astrojs/sitemap to avoid
// the integration's "undefined.reduce" crash when dynamic-route collections
// are empty (news / weapons in early launch).
export default defineConfig({
  site: "https://ntecodex.com",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: "static",
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
