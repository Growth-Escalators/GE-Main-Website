import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const SITE = 'https://www.growthescalators.com'

/* Static routes — keep in sync when new top-level pages are added.
   Industry landing pages and blog posts are added programmatically below.

   `lastModified` MUST be the real last content-change date, not the build date.
   A fake `new Date()` per build teaches Google to distrust the sitemap's lastmod
   signal entirely (GE SEO Standard v1, Layer 2). Seeded 2026-07-10 from each
   route's `app/<route>/page.tsx` git history (`git log -1 --format=%cI -- <file>`).
   Bump a route's date by hand only when that route's actual content changes.
   `lastModified` is optional on this type for exactly one reason: a route with
   no real content yet (see the three international-landing routes below) must
   omit it rather than fabricate one — "real date or omit it" per the standard. */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; lastModified?: string }[] = [
  { path: '/',                       priority: 1.0, changeFrequency: 'weekly',  lastModified: '2026-06-22T17:18:21+05:30' },
  { path: '/services',               priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-04-24T16:34:20+05:30' },
  { path: '/staffing',               priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-06-27T12:29:19+05:30' },
  { path: '/uk-offshore-tech-resources', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-13T12:00:00+05:30' },
  // UAE/US/Australia siblings of /uk-offshore-tech-resources — international-landing
  // Stage B shipped all three pages 2026-08-14 (verified: tsc/build clean, all
  // routes 200, browser QA passed — see the Stage C handoff report). Real
  // completion date used per the "real date or omit it" rule above.
  { path: '/uae-offshore-tech-resources',        priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-14T12:00:00+05:30' },
  { path: '/us-tech-staffing-fulfilment',        priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-14T12:00:00+05:30' },
  { path: '/australia-offshore-tech-resources',  priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-14T12:00:00+05:30' },
  { path: '/white-label-software-development', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-13T13:30:00+05:30' },
  { path: '/work',                   priority: 0.9, changeFrequency: 'weekly',  lastModified: '2026-04-24T16:34:20+05:30' },
  { path: '/portfolio',              priority: 0.9, changeFrequency: 'weekly',  lastModified: '2026-05-21T11:11:56+05:30' },
  { path: '/about',                  priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-05-21T12:20:09+05:30' },
  { path: '/contact',                priority: 0.8, changeFrequency: 'yearly',  lastModified: '2026-06-22T17:18:21+05:30' },
  { path: '/blog',                   priority: 0.9, changeFrequency: 'weekly',  lastModified: '2026-04-30T01:03:34+05:30' },
  // Industry landing pages — high priority, conversion-focused
  //
  // 2026-07-25: FAQ answers on these 32 routes went from click-to-render (only the
  // defaultOpen answer was in server HTML) to always-server-rendered (components/landing/
  // IndustryLandingPage.tsx FaqItem — `hidden` attribute instead of conditional mount).
  // That's a real content-visibility change for a crawler, so lastModified is bumped for
  // every route below through /real-estate. /white-label-software-development (above) is
  // NOT touched — its FAQs render via native <details>/<summary>, already server-rendered
  // pre- and post-fix, so nothing about its crawlable content changed.
  { path: '/d2c',                    priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/d2c/fashion',            priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/performance-marketing-agency-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/real-estate-marketing-agency-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  // Direct-client dev money pages (added 2026-07-21) — distinct from /white-label-software-development (agency intent).
  { path: '/software-development-company-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/website-development-company-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  // Niche BOFU money pages — Wave 1 (added 2026-07-21). Detailed, image-rich, each with a lead-magnet calculator.
  { path: '/travel-agency-marketing-jaipur',            priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/dental-clinic-marketing-agency-jaipur',     priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/coaching-institute-marketing-agency-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/gym-fitness-marketing-agency-jaipur',       priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  // Niche BOFU money pages — Wave 2 & 3 (added 2026-07-21). Same engine, image-rich, lead-magnet calculators.
  { path: '/jewellery-marketing-agency-jaipur',          priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/salon-spa-marketing-agency-jaipur',          priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/hotel-resort-marketing-agency-jaipur',       priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/interior-designer-marketing-agency-jaipur',  priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/car-detailing-marketing-agency-jaipur',      priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  // Intent-differentiated BOFU cluster — one route per distinct buyer/search intent (added 2026-07-12).
  { path: '/doctors-marketing-agency-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/patient-acquisition-agency',      priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/personal-branding-for-doctors',   priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/ecommerce-advertising-agency',    priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/meta-ads-agency-for-ecommerce',   priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/ecommerce-scaling-agency',        priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/d2c/beauty',                      priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/skincare-retention-marketing',    priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/b2b-lead-generation-agency',      priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/linkedin-marketing-agency',       priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/saas-marketing-agency',           priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/doctors',                priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  { path: '/roofing',                priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  // /restaurants de-targeted 2026-07-12 (Jatin) — noindexed + out of sitemap; page kept for a possible revisit in ~2–3 months.
  { path: '/real-estate',            priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-07-25T18:00:00+05:30' },
  // Legal — keep crawlable but low priority
  { path: '/privacy-policy',         priority: 0.3, changeFrequency: 'yearly',  lastModified: '2026-05-28T18:14:21+05:30' },
  { path: '/terms-and-conditions',   priority: 0.3, changeFrequency: 'yearly',  lastModified: '2026-05-28T18:14:21+05:30' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE}${r.path}`,
    ...(r.lastModified ? { lastModified: r.lastModified } : {}),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  // Blog posts are picked up automatically — drop a new .md file in
  // content/blog/ and it appears here on the next build.
  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...postEntries]
}
