# Growth Escalators — Post-Rebuild SEO Recovery & Growth Plan

**Created:** 20 August 2026  
**Scope:** Growth Escalators production website after the Phase 2 redesign  
**Primary objective:** Preserve existing rankings and indexed URL equity, minimise migration volatility, then grow non-branded organic traffic from the new architecture.

---

## 1. Launch principles

1. **Keep ranking URLs stable.** Do not change slugs for aesthetic reasons.
2. **Preserve search intent.** An old niche URL should resolve to the same niche page or a genuinely equivalent replacement, never a generic homepage merely to avoid a 404.
3. **Use real sitemap dates.** `lastModified` changes only after a meaningful content/layout/schema/internal-link change — never automatically on every build.
4. **Do not repeatedly redesign during reprocessing.** Small ranking fluctuations after a major rebuild are expected. Diagnose material drops; do not react to every position change.
5. **Measure pages and query clusters individually.** Whole-site averages can hide one broken commercial page.
6. **Build topical authority, not a flat collection of landing pages.** Parent pages, child pages, articles and proof should reinforce each other through contextual internal links.

---

## 2. Migration fixes completed on the rebuild branch

- Restored exact historical URLs:
  - `/restaurant-marketing-agency-jaipur`
  - `/law-firm-marketing-agency-jaipur`
  - `/wedding-event-marketing-agency-jaipur`
- Removed their generic homepage redirects.
- Redirected `/restaurants` to the restored restaurant page.
- Restored pages use the current shared IndustryLandingPage design and retain self-referencing canonicals.
- Added dedicated metadata, Service schema, Breadcrumb schema and FAQ schema.
- Added all three restored pages to the XML sitemap.
- Added sitewide footer discovery links for all three pages.
- Updated homepage positioning to:
  - **Growth Escalators — Performance Marketing, Web, AI & Talent**
- Updated real `lastModified` dates for routes materially changed in the 20 August rebuild.
- Added a repeatable Lighthouse workflow for representative public pages.

---

## 3. Production launch checklist — Day 0

Run this only after the rebuild branch is reconciled with the latest `main` and the final production deployment is live.

### Technical verification

For every high-value route confirm:

- HTTP `200` for live pages.
- No unintended redirect chain.
- One self-referencing canonical.
- `index, follow` on production.
- Correct title and meta description.
- One clear H1 matching the page intent.
- Important copy present in server-rendered HTML.
- FAQ / Service / Breadcrumb structured data present where applicable.
- Internal links render as normal crawlable `<a href>` links.
- No broken hero/showcase images.
- Forms submit successfully.
- No production runtime errors.

### Priority URLs for manual URL Inspection

Request indexing in this order rather than trying to submit every URL individually:

1. `/`
2. `/d2c`
3. `/performance-marketing-agency-jaipur`
4. `/ecommerce-advertising-agency`
5. `/doctors`
6. `/jewellery-marketing-agency-jaipur`
7. `/restaurant-marketing-agency-jaipur`
8. `/law-firm-marketing-agency-jaipur`
9. `/wedding-event-marketing-agency-jaipur`
10. `/website-development-company-jaipur`
11. `/software-development-company-jaipur`
12. `/staffing`

Do not repeatedly request indexing for the same URL. The sitemap and normal crawling should handle the rest.

---

## 4. Google Search Console steps

There is no Search Console connector in the current automation stack, so these actions require a signed-in Search Console user.

### Resubmit the sitemap

1. Open the Search Console property for `https://www.growthescalators.com/`.
2. Open **Sitemaps**.
3. Submit `sitemap.xml` if it is not already listed, or resubmit the existing sitemap after production launch.
4. Confirm the sitemap returns success and the discovered-page count is plausible.

### Inspect priority URLs

1. Open **URL inspection**.
2. Paste one priority production URL.
3. Confirm the canonical Google sees is the intended canonical.
4. Use **Test live URL** if the indexed copy is stale.
5. Use **Request indexing** once after the successful production migration.

### Save a pre/post migration baseline

Export or record:

- last 28 days Pages report;
- last 90 days Pages report;
- last 28/90 days Queries report;
- clicks;
- impressions;
- CTR;
- average position;
- indexed / not-indexed status for commercial pages.

This baseline is essential for separating normal volatility from a real regression.

---

## 5. Topical internal-link architecture

Internal links should be contextual, descriptive and useful to the visitor. Avoid repeating the same exact-match keyword anchor dozens of times.

### D2C / Ecommerce cluster

**Parent / pillar:** `/d2c`

Children / related commercial pages:

- `/d2c/fashion`
- `/d2c/beauty`
- `/ecommerce-advertising-agency`
- `/meta-ads-agency-for-ecommerce`
- `/ecommerce-scaling-agency`
- `/skincare-retention-marketing`

Supporting D2C articles should link to the most relevant commercial page, and commercial pages should link back to useful explanatory articles or proof.

### Healthcare cluster

**Parent / pillar:** `/doctors`

Children:

- `/doctors-marketing-agency-jaipur`
- `/dental-clinic-marketing-agency-jaipur`
- `/patient-acquisition-agency`
- `/personal-branding-for-doctors`

Healthcare pages should cross-link only where the buyer intent actually overlaps.

### B2B / SaaS cluster

**Parent / pillar:** `/b2b-lead-generation-agency`

Children:

- `/linkedin-marketing-agency`
- `/saas-marketing-agency`

Supporting articles should focus on pipeline creation, LinkedIn distribution, demand generation, attribution and long-cycle buying journeys.

### Jaipur local-services cluster

**Primary local commercial hub:** `/performance-marketing-agency-jaipur`

Relevant niche pages:

- `/real-estate-marketing-agency-jaipur`
- `/travel-agency-marketing-jaipur`
- `/dental-clinic-marketing-agency-jaipur`
- `/coaching-institute-marketing-agency-jaipur`
- `/gym-fitness-marketing-agency-jaipur`
- `/jewellery-marketing-agency-jaipur`
- `/salon-spa-marketing-agency-jaipur`
- `/hotel-resort-marketing-agency-jaipur`
- `/interior-designer-marketing-agency-jaipur`
- `/car-detailing-marketing-agency-jaipur`
- `/restaurant-marketing-agency-jaipur`
- `/law-firm-marketing-agency-jaipur`
- `/wedding-event-marketing-agency-jaipur`

Do not create a huge block of identical links on every page. Each local page should surface approximately 3–6 genuinely adjacent resources through body copy or the existing Related Resources component.

### Development cluster

- `/website-development-company-jaipur`
- `/software-development-company-jaipur`
- `/white-label-software-development`

Link direct-client development intent separately from agency white-label / delivery-partner intent.

### Staffing cluster

**Parent:** `/staffing`

Children:

- `/uk-offshore-tech-resources`
- `/uae-offshore-tech-resources`
- `/us-tech-staffing-fulfilment`
- `/australia-offshore-tech-resources`

Country pages should link back to the staffing hub and to another country page only when it helps a buyer comparing delivery markets.

### Internal-link rules

- Parent → priority children.
- Child → parent.
- 3–6 useful contextual links on a commercial page is normally enough.
- Link siblings when the user could logically need both.
- Use natural descriptive anchors, not repetitive keyword stuffing.
- Important pages must not depend only on footer links.
- Blog posts should point to the most relevant money page, not automatically to the homepage.
- Commercial pages should surface relevant proof and educational resources.

---

## 6. Query-driven content expansion — Weeks 1–4

After Google begins reprocessing the rebuild, use Search Console instead of guessing what copy to add.

For each money page:

1. Filter Search Console to the page.
2. Export queries.
3. Prioritise queries with meaningful impressions and average positions roughly 5–20.
4. Group semantically related queries.
5. Determine whether the page already answers the underlying question clearly.
6. Add a useful section only when it materially improves the page.
7. Add internal links to a better sibling page when the query represents different intent rather than forcing one page to rank for everything.

Avoid padding pages with generic AI-written paragraphs. New sections should contribute evidence, process, comparison, first-party experience, a useful answer or a real buyer decision aid.

---

## 7. First-party proof plan

The restored restaurant, law/professional-services and wedding/event pages currently use honestly labelled cross-category / aggregate proof rather than fabricated vertical case studies.

Upgrade them as soon as real publishable proof is available:

- client name if permission exists;
- problem / baseline;
- work performed;
- timeframe;
- measured result;
- screenshots or source evidence where appropriate;
- direct quote only with permission;
- explicit explanation of what metric means.

Never invent a result simply to make a vertical page appear more experienced.

---

## 8. Core Web Vitals testing

### What Google considers “good” field performance

At the 75th percentile of real-user visits:

- **LCP:** ≤ 2.5 seconds
- **INP:** ≤ 200 ms
- **CLS:** ≤ 0.1

### Two different tests are required

#### A. Lab testing — Lighthouse / PageSpeed Insights

Use for debugging a specific build. Watch:

- Performance score;
- LCP;
- CLS;
- FCP;
- Total Blocking Time;
- Speed Index;
- unused / blocking JavaScript;
- oversized image opportunities;
- render-blocking resources.

A repeatable GitHub Actions Lighthouse workflow is included at:

`.github/workflows/lighthouse-audit.yml`

Representative URLs:

- homepage;
- `/d2c`;
- `/jewellery-marketing-agency-jaipur`.

Run it again after the rebuilt site becomes production so the comparison is apples-to-apples.

#### B. Field testing — CrUX / Search Console Core Web Vitals

This is real-user data aggregated over time. Check Search Console → **Core Web Vitals** after the new production experience has accumulated sufficient usage.

Do not expect a newly rebuilt URL to have instant post-launch field data: the report represents a rolling real-user window.

### Current technical watch list

The production build currently shows roughly:

- shared IndustryLandingPage money pages: ~157 kB First Load JS;
- homepage: ~205 kB First Load JS;
- services: ~204 kB;
- staffing: ~197 kB;
- international staffing pages: ~159 kB.

These bundle sizes are not themselves Core Web Vitals, but they identify where performance work should be prioritised if lab or field data regresses.

If LCP is weak, investigate first:

- hero image format, dimensions and priority;
- whether important hero text/image is visually delayed by client animation;
- render-blocking CSS / fonts;
- TTFB and cache behaviour.

If INP / TBT is weak, investigate first:

- global GrowthBot JavaScript;
- global cursor / scroll effects;
- animation libraries on pages that do not need them;
- third-party analytics and tags;
- long main-thread tasks.

If CLS is weak, investigate first:

- unsized images / media;
- dynamic widgets inserted above existing content;
- font swaps;
- banners or forms changing dimensions after hydration.

Performance changes must be based on measured bottlenecks rather than removing functionality speculatively.

---

## 9. Monitoring rules for the first 30 days

### Review twice per week

For priority money pages capture:

- clicks;
- impressions;
- CTR;
- average position;
- top queries;
- indexed status;
- organic landing-page sessions / leads where analytics allows.

### Normal migration movement — watch, do not panic

Examples:

- position 3 → 5;
- position 8 → 11;
- temporary impression variance while Google recrawls the changed page.

Do not rewrite the page immediately for small movement.

### Investigate immediately

Examples:

- an indexed money URL becomes excluded or crawled-not-indexed unexpectedly;
- a ranking page changes from 200 to redirect / 404;
- canonical changes to another URL;
- position 4 → 40 across its main query family;
- impressions collapse across a previously stable page cluster;
- production receives noindex;
- major CWV deterioration after the rebuild;
- sudden server errors / 5xx responses.

---

## 10. 30-day execution sequence

### Day 0–2 — migration protection

- reconcile latest `main` into the rebuild branch;
- rerun build / route checks;
- production deploy after approval;
- verify 200 / canonical / indexability / structured data;
- submit sitemap in Search Console;
- inspect / request indexing for priority URLs;
- save 28-day and 90-day GSC baselines;
- run Lighthouse baseline after production deploy.

### Days 3–7 — architecture

- review Related Resources blocks across all commercial pages;
- enforce parent ↔ child topical links;
- connect high-value blog posts to corresponding money pages;
- remove internal links pointing through unnecessary redirects;
- ensure every priority money page has at least one strong contextual path from an authoritative parent page.

### Week 2 — query opportunities

- identify queries in positions 5–20;
- improve sections that are already close to page-one visibility;
- optimise weak titles / snippets when impressions are strong but CTR is poor;
- avoid creating a new page when the existing page already matches the query intent.

### Week 3 — proof and differentiation

- add real screenshots / case-study evidence where available;
- add first-party lessons, process details and buyer decision aids;
- strengthen author / company credibility on informational content;
- build one useful supporting article only where it reinforces a commercial cluster.

### Week 4 — evaluate

- compare pre- vs post-rebuild clicks, impressions, CTR and positions by URL;
- compare the six topical clusters separately;
- check Core Web Vitals field trends;
- document recoveries, winners and genuine regressions;
- prioritise the next 30-day SEO sprint from evidence.

---

## 11. Definition of success

The rebuild is not successful merely because aggregate traffic returns to its old number.

Success means:

- old valuable URLs preserve indexation and query relevance;
- restored niche URLs recover / expand impressions;
- high-intent commercial pages gain more page-one query coverage;
- D2C, healthcare, B2B/SaaS, Jaipur-local, development and staffing clusters become easier for search engines to understand;
- rankings become less dependent on isolated pages;
- organic sessions generate measurable commercial enquiries;
- visual quality improves without Core Web Vitals materially regressing.
