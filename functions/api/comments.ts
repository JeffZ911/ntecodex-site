/* /api/comments — Cloudflare Pages Function
 *
 *   GET  /api/comments?article_slug=<slug>
 *        Returns { items: [{user_name, content, created_at, ...}] }
 *        of status='approved' comments for that article. Uses
 *        SUPABASE_SERVICE_ROLE_KEY (server-side only, never returned).
 *
 *   POST /api/comments
 *        Body: { message_type, article_slug, name, content, turnstile_token }
 *        Validates Turnstile, runs cheap spam heuristics, inserts into
 *        user_messages with status='pending' (or 'spam' if a rule triggers).
 *
 * Env vars (set on the CF Pages project):
 *   - SUPABASE_URL                 plain text
 *   - SUPABASE_SERVICE_ROLE_KEY    secret
 *   - TURNSTILE_SECRET             secret (skipped if SKIP_TURNSTILE=true)
 *   - SKIP_TURNSTILE               "true" enables a local-test backdoor
 */

interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  TURNSTILE_SECRET?: string;
  SKIP_TURNSTILE?: string;
  // Site we resolve to (for now hard-coded; multi-site comes later)
  SITE_DOMAIN?: string;
}

const SITE_DOMAIN_DEFAULT = "ntecodex.com";

// Spam heuristics
const SPAM_KEYWORDS = [
  "casino", "viagra", "cialis", "porn", "xxx",
  "crypto invest", "forex trading",
  "cheap nfl", "replica handbag",
];
const URL_RE = /(https?:\/\/|www\.)\S+/gi;

interface CommentRow {
  user_name: string | null;
  content: string;
  created_at: string;
  article_slug: string;
  status: string;
}

function jsonResp(body: any, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

async function siteIdFromDomain(env: Env, domain: string): Promise<string | null> {
  const url =
    `${env.SUPABASE_URL}/rest/v1/sites?domain=eq.${encodeURIComponent(domain)}&select=id`;
  const r = await fetch(url, {
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
    },
  });
  if (!r.ok) return null;
  const rows = (await r.json()) as { id: string }[];
  return rows[0]?.id || null;
}

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
  const fd = new FormData();
  fd.append("secret", secret);
  fd.append("response", token);
  if (ip) fd.append("remoteip", ip);
  try {
    const r = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: fd }
    );
    const j = await r.json() as { success?: boolean };
    return !!j.success;
  } catch {
    return false;
  }
}

function classify(content: string): "spam" | "pending" {
  const lc = content.toLowerCase();
  const urls = (content.match(URL_RE) || []).length;
  if (urls > 3) return "spam";
  for (const kw of SPAM_KEYWORDS) {
    if (lc.includes(kw)) return "spam";
  }
  return "pending";
}

// ============================================================== GET handler
export const onRequestGet: PagesFunction<Env> = async (ctx) => {
  const url = new URL(ctx.request.url);
  const slug = url.searchParams.get("article_slug");
  if (!slug) return jsonResp({ error: "article_slug required" }, 400);

  const siteId = await siteIdFromDomain(ctx.env, ctx.env.SITE_DOMAIN || SITE_DOMAIN_DEFAULT);
  if (!siteId) return jsonResp({ error: "site not found" }, 500);

  const q =
    `${ctx.env.SUPABASE_URL}/rest/v1/user_messages` +
    `?site_id=eq.${siteId}` +
    `&article_slug=eq.${encodeURIComponent(slug)}` +
    `&status=eq.approved` +
    `&select=user_name,content,created_at,article_slug,status` +
    `&order=created_at.desc&limit=100`;
  const r = await fetch(q, {
    headers: {
      apikey: ctx.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${ctx.env.SUPABASE_SERVICE_ROLE_KEY}`,
    },
  });
  if (!r.ok) {
    return jsonResp({ error: `db ${r.status}` }, 500);
  }
  const items = (await r.json()) as CommentRow[];
  return jsonResp({ items });
};

// ============================================================= POST handler
export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  // Parse body
  let body: any;
  try {
    body = await ctx.request.json();
  } catch {
    return jsonResp({ error: "invalid JSON" }, 400);
  }

  const messageType = String(body.message_type || "").trim();
  const articleSlug = body.article_slug == null
    ? null
    : String(body.article_slug).trim();
  const name = String(body.name || "").trim().slice(0, 80) || null;
  const content = String(body.content || "").trim();
  const turnstileToken = String(body.turnstile_token || "").trim();

  if (messageType !== "comment" && messageType !== "contact") {
    return jsonResp({ error: "message_type must be comment or contact" }, 400);
  }
  if (messageType === "comment" && !articleSlug) {
    return jsonResp({ error: "article_slug required for comment" }, 400);
  }
  if (content.length < 3 || content.length > 2000) {
    return jsonResp({ error: "content must be 3-2000 characters" }, 400);
  }

  // Turnstile (skippable for local dev)
  const skip = ctx.env.SKIP_TURNSTILE === "true";
  const ip =
    ctx.request.headers.get("cf-connecting-ip") ||
    ctx.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";
  if (!skip) {
    if (!ctx.env.TURNSTILE_SECRET) {
      return jsonResp({ error: "Turnstile not configured" }, 500);
    }
    if (!turnstileToken) {
      return jsonResp({ error: "Turnstile token missing" }, 400);
    }
    const ok = await verifyTurnstile(turnstileToken, ctx.env.TURNSTILE_SECRET, ip);
    if (!ok) {
      return jsonResp({ error: "Turnstile verification failed" }, 400);
    }
  }

  // Spam classification (auto pending vs auto spam)
  const initialStatus = classify(content);

  const siteId = await siteIdFromDomain(ctx.env, ctx.env.SITE_DOMAIN || SITE_DOMAIN_DEFAULT);
  if (!siteId) return jsonResp({ error: "site not found" }, 500);

  const userAgent =
    ctx.request.headers.get("user-agent")?.slice(0, 500) || null;

  const row = {
    site_id: siteId,
    message_type: messageType,
    article_slug: articleSlug,
    user_name: name,
    user_email: null,
    content,
    status: initialStatus,
    ip_address: ip || null,
    user_agent: userAgent,
    turnstile_token: skip ? null : turnstileToken.slice(0, 1000),
  };

  const r = await fetch(`${ctx.env.SUPABASE_URL}/rest/v1/user_messages`, {
    method: "POST",
    headers: {
      apikey: ctx.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${ctx.env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!r.ok) {
    const text = await r.text();
    return jsonResp({ error: `db ${r.status}`, detail: text.slice(0, 400) }, 500);
  }

  return jsonResp({
    success: true,
    status: initialStatus,
    message:
      initialStatus === "spam"
        ? "Submitted, but flagged for review."
        : "Thanks — your message is awaiting review.",
  });
};
