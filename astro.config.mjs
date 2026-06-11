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

// Dependency-free remark plugin: strip the first H1 from every markdown body.
// ArticleLayout already renders an <h1> from frontmatter `title`, so a leading
// `# Title` in the body produced a duplicate H1 on 700+ pages — bad for SEO
// (multiple H1s dilute the page topic) and UX (the title appears twice). This
// removes only the FIRST h1; any later h1 (unlikely) is preserved.
function remarkStripFirstH1() {
  return (tree) => {
    if (!tree || !Array.isArray(tree.children)) return;
    const idx = tree.children.findIndex(
      (n) => n && n.type === "heading" && n.depth === 1
    );
    if (idx >= 0) tree.children.splice(idx, 1);
  };
}

// We hand-roll sitemap.xml.ts instead of using @astrojs/sitemap to avoid
// the integration's "undefined.reduce" crash when dynamic-route collections
// are empty (news / weapons in early launch).

// Dependency-free rehype plugin: native lazy-loading for article-body images.
// (Hero images are template-level with fetchpriority=high; body images are
// below the fold by definition → lazy + async decode improves LCP/CWV.)
function rehypeLazyImages() {
  function walk(node) {
    if (node.type === "element" && node.tagName === "img") {
      node.properties = node.properties || {};
      if (!node.properties.loading) node.properties.loading = "lazy";
      if (!node.properties.decoding) node.properties.decoding = "async";
    }
    (node.children || []).forEach(walk);
  }
  return (tree) => walk(tree);
}

export default defineConfig({
  site: "https://ntecodex.com",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkStripFirstH1],
    rehypePlugins: [rehypeExternalLinks, rehypeLazyImages],
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
