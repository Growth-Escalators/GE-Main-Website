import fs from 'node:fs'

const read = (path) => fs.readFileSync(path, 'utf8')

const sitemap = read('app/sitemap.ts')
const contextLinks = read('components/seo/SeoContextLinks.tsx')
const footer = read('components/sections/Footer.tsx')
const brandPriority = read('components/seo/BrandServicePriority.tsx')
const redirects = read('next.config.js')
const layout = read('app/layout.tsx')

const CRITICAL_MONEY_ROUTES = [
  '/d2c',
  '/d2c/fashion',
  '/d2c/fashion/womens-clothing',
  '/d2c/beauty',
  '/ecommerce-advertising-agency',
  '/meta-ads-agency-for-ecommerce',
  '/ecommerce-scaling-agency',
  '/skincare-retention-marketing',
  '/performance-marketing-agency-jaipur',
  '/seo-lead-generation-agency-jaipur',
  '/jewellery-marketing-agency-jaipur',
  '/real-estate-marketing-agency-jaipur',
  '/real-estate/project-launch-marketing',
  '/restaurant-marketing-agency-jaipur',
  '/law-firm-marketing-agency-jaipur',
  '/wedding-event-marketing-agency-jaipur',
  '/travel-agency-marketing-jaipur',
  '/travel-marketing-agency',
  '/coaching-institute-marketing-agency-jaipur',
  '/gym-fitness-marketing-agency-jaipur',
  '/salon-spa-marketing-agency-jaipur',
  '/hotel-resort-marketing-agency-jaipur',
  '/interior-designer-marketing-agency-jaipur',
  '/car-detailing-marketing-agency-jaipur',
  '/doctors',
  '/doctors-marketing-agency-jaipur',
  '/ivf-marketing-agency-jaipur',
  '/orthopedic-marketing-agency-jaipur',
  '/dental-clinic-marketing-agency-jaipur',
  '/patient-acquisition-agency',
  '/personal-branding-for-doctors',
  '/b2b-lead-generation-agency',
  '/linkedin-marketing-agency',
  '/saas-marketing-agency',
  '/website-development-company-jaipur',
  '/software-development-company-jaipur',
  '/white-label-digital-marketing-agency',
  '/white-label-web-development-agency',
  '/white-label-software-development',
  '/white-label-shopify-development-agency',
  '/white-label-performance-marketing-agency',
  '/white-label-seo-agency',
  '/staffing',
  '/uk-offshore-tech-resources',
  '/uae-offshore-tech-resources',
  '/us-tech-staffing-fulfilment',
  '/australia-offshore-tech-resources',
]

const BRAND_CORE_ROUTES = [
  '/d2c',
  '/website-development-company-jaipur',
  '/software-development-company-jaipur',
  '/staffing',
  '/seo-lead-generation-agency-jaipur',
]

const WHITE_LABEL_ROUTES = [
  '/white-label-digital-marketing-agency',
  '/white-label-web-development-agency',
  '/white-label-software-development',
  '/white-label-shopify-development-agency',
  '/white-label-performance-marketing-agency',
  '/white-label-seo-agency',
]

const RESTORED_ROUTES = [
  '/restaurant-marketing-agency-jaipur',
  '/law-firm-marketing-agency-jaipur',
  '/wedding-event-marketing-agency-jaipur',
]

const failures = []
const inboundSources = `${contextLinks}\n${footer}`

for (const route of CRITICAL_MONEY_ROUTES) {
  if (!sitemap.includes(`path: '${route}'`)) {
    failures.push(`${route}: missing from sitemap`)
  }
  if (!inboundSources.includes(`href: '${route}'`) && !inboundSources.includes(`href=\"${route}\"`)) {
    failures.push(`${route}: missing from contextual/footer internal-link sources`)
  }
}

for (const route of BRAND_CORE_ROUTES) {
  if (!footer.includes(`href: '${route}'`)) {
    failures.push(`${route}: missing from Core Services footer links`)
  }
  if (!brandPriority.includes(`href: '${route}'`)) {
    failures.push(`${route}: missing from homepage core-service priority links`)
  }
}

for (const route of WHITE_LABEL_ROUTES) {
  const pagePath = `app${route}/page.tsx`
  if (!fs.existsSync(pagePath)) failures.push(`${route}: white-label page file is missing`)
  if (!contextLinks.includes(`href: '${route}'`)) failures.push(`${route}: missing from white-label contextual links`)
}

if (!footer.includes("href: '/white-label-digital-marketing-agency'")) {
  failures.push('/white-label-digital-marketing-agency: white-label hub missing from global footer')
}

if (!sitemap.includes("const WHITE_LABEL_2026_08_21 = '2026-08-21T19:55:00+05:30'")) {
  failures.push('sitemap: white-label lastModified marker missing')
}

for (const route of RESTORED_ROUTES) {
  const pagePath = `app${route}/page.tsx`
  if (!fs.existsSync(pagePath)) failures.push(`${route}: restored page file is missing`)

  const homeRedirectPatterns = [
    `{ source: '${route}', destination: '/', permanent: true }`,
    `{source:'${route}',destination:'/',permanent:true}`,
  ]
  if (homeRedirectPatterns.some((pattern) => redirects.includes(pattern))) {
    failures.push(`${route}: still redirects to homepage`)
  }
}

if (!redirects.includes("{ source: '/restaurants', destination: '/restaurant-marketing-agency-jaipur', permanent: true }")) {
  failures.push('/restaurants: must redirect directly to restored restaurant page')
}

const expectedTitle = 'Growth Escalators — Performance Marketing, Development, SEO & Tech Talent'
if (!layout.includes(expectedTitle)) failures.push(`homepage metadata: expected title \"${expectedTitle}\" not found`)

if (!sitemap.includes("const REBUILD_2026_08_20 = '2026-08-20T23:23:00+05:30'")) {
  failures.push('sitemap: rebuild lastModified marker missing')
}

if (failures.length) {
  console.error('\nSEO integrity check failed:\n')
  failures.forEach((failure) => console.error(`  - ${failure}`))
  process.exit(1)
}

console.log(`SEO integrity check passed: ${CRITICAL_MONEY_ROUTES.length} money routes are sitemap-listed and internally discoverable.`)
console.log('Core brand routes, US white-label cluster, restored Jaipur routes, redirect continuity, homepage title and sitemap markers are valid.')
