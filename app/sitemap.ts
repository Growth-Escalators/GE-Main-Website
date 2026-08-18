import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const SITE = 'https://www.growthescalators.com'
const OVERNIGHT_REFRESH = '2026-08-19T00:30:00+05:30'

type Route = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  lastModified?: string
}

const ROUTES: Route[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly', lastModified: '2026-08-18T23:00:00+05:30' },
  { path: '/services', priority: .9, changeFrequency: 'monthly', lastModified: '2026-08-18T23:00:00+05:30' },
  { path: '/staffing', priority: .9, changeFrequency: 'monthly' },
  { path: '/uk-offshore-tech-resources', priority: .9, changeFrequency: 'monthly' },
  { path: '/uae-offshore-tech-resources', priority: .9, changeFrequency: 'monthly' },
  { path: '/us-tech-staffing-fulfilment', priority: .9, changeFrequency: 'monthly' },
  { path: '/australia-offshore-tech-resources', priority: .9, changeFrequency: 'monthly' },
  { path: '/white-label-software-development', priority: .9, changeFrequency: 'monthly', lastModified: '2026-07-13T13:30:00+05:30' },
  { path: '/work', priority: .9, changeFrequency: 'weekly', lastModified: '2026-08-18T23:00:00+05:30' },
  { path: '/portfolio', priority: .9, changeFrequency: 'weekly', lastModified: '2026-08-18T23:00:00+05:30' },
  { path: '/about', priority: .7, changeFrequency: 'monthly', lastModified: '2026-08-18T23:00:00+05:30' },
  { path: '/contact', priority: .8, changeFrequency: 'yearly', lastModified: '2026-08-18T23:00:00+05:30' },
  { path: '/blog', priority: .9, changeFrequency: 'weekly' },
  { path: '/d2c', priority: .9, changeFrequency: 'monthly' },
  { path: '/d2c/fashion', priority: .9, changeFrequency: 'monthly' },
  { path: '/performance-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/real-estate-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/software-development-company-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/website-development-company-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/travel-agency-marketing-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/dental-clinic-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/coaching-institute-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/gym-fitness-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/jewellery-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/salon-spa-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/hotel-resort-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/interior-designer-marketing-agency-jaipur', priority: .8, changeFrequency: 'monthly' },
  { path: '/car-detailing-marketing-agency-jaipur', priority: .8, changeFrequency: 'monthly' },
  { path: '/doctors-marketing-agency-jaipur', priority: .9, changeFrequency: 'monthly' },
  { path: '/patient-acquisition-agency', priority: .8, changeFrequency: 'monthly' },
  { path: '/personal-branding-for-doctors', priority: .8, changeFrequency: 'monthly' },
  { path: '/ecommerce-advertising-agency', priority: .9, changeFrequency: 'monthly' },
  { path: '/meta-ads-agency-for-ecommerce', priority: .8, changeFrequency: 'monthly' },
  { path: '/ecommerce-scaling-agency', priority: .8, changeFrequency: 'monthly' },
  { path: '/d2c/beauty', priority: .9, changeFrequency: 'monthly' },
  { path: '/skincare-retention-marketing', priority: .8, changeFrequency: 'monthly' },
  { path: '/b2b-lead-generation-agency', priority: .9, changeFrequency: 'monthly' },
  { path: '/linkedin-marketing-agency', priority: .8, changeFrequency: 'monthly' },
  { path: '/saas-marketing-agency', priority: .8, changeFrequency: 'monthly' },
  { path: '/doctors', priority: .9, changeFrequency: 'monthly' },
  { path: '/roofing', priority: .9, changeFrequency: 'monthly' },
  { path: '/real-estate', priority: .9, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: .3, changeFrequency: 'yearly', lastModified: '2026-05-28T18:14:21+05:30' },
  { path: '/terms-and-conditions', priority: .3, changeFrequency: 'yearly', lastModified: '2026-05-28T18:14:21+05:30' },
]

const OVERNIGHT_ROUTES = new Set([
  '/staffing', '/uk-offshore-tech-resources', '/uae-offshore-tech-resources', '/us-tech-staffing-fulfilment', '/australia-offshore-tech-resources',
  '/blog', '/d2c', '/d2c/fashion', '/performance-marketing-agency-jaipur', '/real-estate-marketing-agency-jaipur', '/software-development-company-jaipur', '/website-development-company-jaipur',
  '/travel-agency-marketing-jaipur', '/dental-clinic-marketing-agency-jaipur', '/coaching-institute-marketing-agency-jaipur', '/gym-fitness-marketing-agency-jaipur',
  '/jewellery-marketing-agency-jaipur', '/salon-spa-marketing-agency-jaipur', '/hotel-resort-marketing-agency-jaipur', '/interior-designer-marketing-agency-jaipur', '/car-detailing-marketing-agency-jaipur',
  '/doctors-marketing-agency-jaipur', '/patient-acquisition-agency', '/personal-branding-for-doctors', '/ecommerce-advertising-agency', '/meta-ads-agency-for-ecommerce', '/ecommerce-scaling-agency',
  '/d2c/beauty', '/skincare-retention-marketing', '/b2b-lead-generation-agency', '/linkedin-marketing-agency', '/saas-marketing-agency', '/doctors', '/roofing', '/real-estate',
])

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE}${route.path}`,
    lastModified: OVERNIGHT_ROUTES.has(route.path) ? OVERNIGHT_REFRESH : route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: .7,
  }))

  return [...staticEntries, ...postEntries]
}
