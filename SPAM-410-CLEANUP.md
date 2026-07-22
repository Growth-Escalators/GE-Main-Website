# Spam-URL 410 Cleanup — growthescalators.com

**Status:** Branch `feat/seo-indexing-cleanup`. Code done + verified locally. **Not pushed / not deployed** — review, merge to `main`, and let Vercel deploy.
**Date:** 2026-07-23

## What this fixes

Google Search Console → Page indexing showed **16,554 "Not found (404)"** and **3,137 "Crawled –
currently not indexed."** After parsing the actual GSC exports (`~/Downloads/…Coverage-Drilldown-
2026-07-21*.xlsx`, 1,000-row samples per reason), the cause is clear:

- **~98–99% of both buckets are spam URLs**, not normal pages. The site's pre-migration **WordPress
  build was hacked** with a Japanese-keyword / fake-marketplace cloaking injection. Signature URLs:
  - numeric `.shtml` fake pages — `/64427160.shtml`  (≈509 of the 404 sample)
  - bare long-numeric paths — `/428812736`  (≈348 + 397)
  - fake marketplace — `/shopdetail/5425170/`  (≈285)
  - fake products — `/product/edit/ZCFD3488890`  (≈60 + 12)
  - locale-cloaked — `/zhHant/product/surugaya/…?campaign_uid=…`
  - injected search — `/search?category&search_word&restrict[]=person_id(int)=…`
- The Next.js migration already **killed all of them** (confirmed `404` live). But a 404 makes Google
  re-check the URL for months, so the counts drain slowly.
- Only **~17 real URLs** appeared across both 1,000-row samples. All verified healthy:
  - The 4 D2C/doctor blog posts in "crawled – not indexed" return **200** — that's normal freshness
    lag, not a bug (handled in Phase C, not here).
  - The legacy slugs (`/our-services/`, `/about-us/`, …) already **308 → www → canonical** — the GSC
    404s against them are *stale pre-redirect crawls* that self-heal on the next crawl.
  - `consulting.growthescalators.com` is a dead subdomain (connection fails) — handle separately.

**So: no new redirects are justified.** The lever is to convert the dead spam URLs from `404` to
**`410 Gone`** so Google/Bing drop them fast, then finish the job in GSC (Phase C).

## The change (this branch)

**`middleware.ts` (new)** — returns `410 Gone` for confirmed-dead spam/WordPress patterns
(`.shtml`, bare-numeric, `/shopdetail/`, `/product/`, `/zh*/`, `/search`, `/wp-*`, `/feed`,
`/category|tag|author/`, date archives, `/gesto_template/`) and for spam query keys
(`campaign_uid`, `search_word`, `restrict[]`, `person_id`, `replytocom`, `cd_html`). It is scoped so
it can never touch a real route, the API, static assets, or real tracking params (utm/gclid/fbclid).
`next.config.js` `redirects()` run before middleware, so the legacy 1:1 slug redirects still win.

No `next.config.js` change (all legacy sources already redirect). No robots.txt disallow — blocking
the crawl would stop Google seeing the 410 (GE SEO Standard: remove with status codes, not robots).

## Verified locally (`npm run build` clean, `ƒ Middleware` registered; `npm start` curl matrix)

- Spam → **410**: `.shtml`, `/428812736`, `/shopdetail/…`, `/product/edit/…`, `/zhHant/product/…`,
  `/search?…`, `/wp-admin`, `/wp-includes/…`, `/feed`, `/comments/feed`, `/category|tag|author/…`,
  `/2023`, `/2023/08`, `/gesto_template/…`, `/?campaign_uid=…`  ✅
- Real routes → **200**: `/`, `/services`, `/d2c`, `/doctors`, `/blog`, `/blog/<real-post>`,
  every `*-jaipur` landing page, `/portfolio`, `/staffing`, `/privacy-policy`  ✅
- Legacy redirects → **308 → correct dest**: `/our-services→/services`, `/about-us→/about`,
  `/e-commerce→/d2c`, `/restaurants→/restaurant-marketing-agency-jaipur`, …  ✅
- Untouched: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/logo.webp`, `/services?utm_source&gclid`,
  `/api/lead` (→405, not 410)  ✅

## Phase C — do these in the browser after deploy (Jatin)

1. **GSC → Indexing → Pages → "Not found (404)" → Validate Fix.** Same for "Server error (5xx)" once
   those 2 URLs are checked. Junk that returns 410 drops out automatically over the following weeks.
2. **GSC → Removals → New request → "Remove all URLs with this prefix"** for the worst spam prefixes
   to speed it up (temporary ~6-month hide; the 410 is the permanent removal):
   `/shopdetail/`, `/product/`, `/zhHant/`, `/search`, `/category/`, `/tag/`, `/author/`, `/wp-`.
   (Numeric `.shtml` / bare-numeric have no common prefix — the 410 handles those.)
3. **Request Indexing** (URL Inspection) on the 4 real posts sitting in "crawled – not indexed"
   (once each; quota ~10/day):
   `/blog/how-much-should-d2c-brand-spend-on-ads-by-revenue-stage`,
   `/blog/google-ads-vs-meta-ecommerce-2026`,
   `/blog/ai-marketing-agency-vs-in-house-vs-freelancer-cost-math`,
   `/blog/why-performance-marketing-for-doctors-is-different`.
   Then add internal links to them from `/d2c` and `/doctors` to help them earn indexing.
4. **Bing Webmaster Tools** — confirm verified + sitemap submitted, and that **IndexNow** is pinging
   (repo has `scripts/indexnow-ping.ts` + key `public/85e4c1e4229d47f8bed45289e8820ac6.txt`). Bing
   feeds ChatGPT, so this matters for AI visibility.
5. **Server error (5xx): 2 pages** — export that drilldown (or check Vercel runtime logs) to get the 2
   URLs. Likely a spam URL that errored or a transient blip; confirm and fix if real.
6. **Excluded by noindex: 1** — confirm it's `/restaurants` (intentional). If so, no action.
7. **Dead `consulting.` subdomain** — either point its DNS at this project (a redirect rule is already
   staged, commented, in `next.config.js`) or remove the DNS record so it stops being crawled.

## Follow-up not in this branch

- **`public/og-image.jpg` is missing** but referenced in 20 files (root `app/layout.tsx` OG + JSON-LD
  `logo`, and 18 landing `layout.tsx`) → broken social/AI preview + broken schema logo on every page.
  A ready-to-render 1200×630 brand card is at `/tmp/og-card.html` (render with any headless browser,
  or content-creative in Canva) → drop the result at `public/og-image.jpg`. Pre-existing gap, not a
  regression from this branch.
