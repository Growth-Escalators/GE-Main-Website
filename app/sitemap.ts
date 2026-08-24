import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const SITE = 'https://www.growthescalators.com'
const REBUILD_2026_08_20 = '2026-08-20T23:23:00+05:30'
const BRAND_ARCH_2026_08_21 = '2026-08-21T12:06:00+05:30'
const SEO_CLUSTER_2026_08_21 = '2026-08-21T16:33:00+05:30'
const WHITE_LABEL_2026_08_21 = '2026-08-21T19:55:00+05:30'
const INDEXING_LINKS_2026_08_23 = '2026-08-23T21:50:00+05:30'
const PRIORITY_8020_2026_08_24 = '2026-08-24T13:03:00+05:30'

/*
 * `lastModified` is intentionally tied to real, significant page changes.
 * Do not replace these values with `new Date()` at build time: doing so would
 * make every deployment look like a content update and weaken the signal.
 */
const STATIC_ROUTES: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  lastModified?: string
}[] = [
  { path: '/',                       priority: 1.0, changeFrequency: 'weekly',   lastModified: BRAND_ARCH_2026_08_21 },
  { path: '/services',               priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-04-24T16:34:20+05:30' },
  { path: '/staffing',               priority: 0.9, changeFrequency: 'monthly', lastModified: BRAND_ARCH_2026_08_21 },
  { path: '/uk-offshore-tech-resources',        priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/uae-offshore-tech-resources',       priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/us-tech-staffing-fulfilment',       priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/australia-offshore-tech-resources', priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/white-label-software-development',  priority: 0.95, changeFrequency: 'monthly', lastModified: WHITE_LABEL_2026_08_21 },
  { path: '/work',                   priority: 0.9, changeFrequency: 'weekly',   lastModified: '2026-04-24T16:34:20+05:30' },
  { path: '/portfolio',              priority: 0.9, changeFrequency: 'weekly',   lastModified: '2026-05-21T11:11:56+05:30' },
  { path: '/about',                  priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-08-17T12:00:00+05:30' },
  { path: '/contact',                priority: 0.8, changeFrequency: 'yearly', lastModified: '2026-06-22T17:18:21+05:30' },
  { path: '/blog',                   priority: 0.9, changeFrequency: 'weekly', lastModified: '2026-04-30T01:03:34+05:30' },

  // Core brand / commercial pillars.
  { path: '/d2c',                                      priority: 0.95, changeFrequency: 'monthly', lastModified: BRAND_ARCH_2026_08_21 },
  { path: '/website-development-company-jaipur',       priority: 0.95, changeFrequency: 'monthly', lastModified: BRAND_ARCH_2026_08_21 },
  { path: '/software-development-company-jaipur',      priority: 0.95, changeFrequency: 'monthly', lastModified: BRAND_ARCH_2026_08_21 },
  { path: '/seo-lead-generation-agency-jaipur',        priority: 0.95, changeFrequency: 'monthly', lastModified: BRAND_ARCH_2026_08_21 },

  // US white-label agency cluster — national commercial intent, India delivery disclosed honestly.
  { path: '/white-label-digital-marketing-agency',      priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/white-label-seo-agency',                    priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/white-label-web-development-agency',        priority: 0.9, changeFrequency: 'monthly', lastModified: WHITE_LABEL_2026_08_21 },
  { path: '/white-label-shopify-development-agency',    priority: 0.9, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/white-label-performance-marketing-agency',  priority: 0.9, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },

  // Shopify / web / software / fashion SEO cluster — unique search intent pages.
  { path: '/shopify-development-agency',                      priority: 0.9, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/shopify-development-company-jaipur',              priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/ecommerce-website-development-company-jaipur',    priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/website-redesign-agency-jaipur',                  priority: 0.8, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/custom-software-development-company-jaipur',      priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/web-app-development-company-jaipur',              priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/saas-development-company-jaipur',                 priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/d2c/fashion/womens-clothing',                     priority: 0.9, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/d2c/fashion/kurti',                               priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },
  { path: '/d2c/fashion/meta-ads',                            priority: 0.85, changeFrequency: 'monthly', lastModified: SEO_CLUSTER_2026_08_21 },

  // High-value vertical pages selected for 80/20 commercial upside.
  { path: '/ivf-marketing-agency-jaipur',               priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/orthopedic-marketing-agency-jaipur',        priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/real-estate/project-launch-marketing',      priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/travel-marketing-agency',                   priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },

  // Shared IndustryLandingPage money pages — materially redesigned on 2026-08-20.
  { path: '/d2c/fashion',                              priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/d2c/beauty',                               priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/performance-marketing-agency-jaipur',      priority: 0.9, changeFrequency: 'monthly', lastModified: INDEXING_LINKS_2026_08_23 },
  { path: '/real-estate-marketing-agency-jaipur',      priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/travel-agency-marketing-jaipur',           priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/dental-clinic-marketing-agency-jaipur',    priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/coaching-institute-marketing-agency-jaipur', priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/gym-fitness-marketing-agency-jaipur',      priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/jewellery-marketing-agency-jaipur',        priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/salon-spa-marketing-agency-jaipur',        priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/hotel-resort-marketing-agency-jaipur',     priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/interior-designer-marketing-agency-jaipur', priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/car-detailing-marketing-agency-jaipur',    priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/doctors-marketing-agency-jaipur',          priority: 0.95, changeFrequency: 'monthly', lastModified: PRIORITY_8020_2026_08_24 },
  { path: '/patient-acquisition-agency',               priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/personal-branding-for-doctors',            priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/ecommerce-advertising-agency',             priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/meta-ads-agency-for-ecommerce',             priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/ecommerce-scaling-agency',                 priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/skincare-retention-marketing',             priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/b2b-lead-generation-agency',               priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/linkedin-marketing-agency',                priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/saas-marketing-agency',                    priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/doctors',                                  priority: 0.9, changeFrequency: 'monthly', lastModified: INDEXING_LINKS_2026_08_23 },
  { path: '/roofing',                                  priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/real-estate',                              priority: 0.9, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },

  // Restored historical Jaipur-local BOFU routes — exact URLs retained.
  { path: '/restaurant-marketing-agency-jaipur',       priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/law-firm-marketing-agency-jaipur',         priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },
  { path: '/wedding-event-marketing-agency-jaipur',    priority: 0.8, changeFrequency: 'monthly', lastModified: REBUILD_2026_08_20 },

  // Legal — crawlable but intentionally low priority.
  { path: '/privacy-policy',         priority: 0.3, changeFrequency: 'yearly', lastModified: '2026-05-28T18:14:21+05:30' },
  { path: '/terms-and-conditions',   priority: 0.3, changeFrequency: 'yearly', lastModified: '2026-05-28T18:14:21+05:30' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE}${route.path}`,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Blog posts are picked up automatically from content/blog/.
  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...postEntries]
}
