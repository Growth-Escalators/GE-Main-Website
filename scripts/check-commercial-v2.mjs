import fs from 'node:fs'

const read = (filePath) => fs.readFileSync(filePath, 'utf8')
const failures = []

const PRIORITY_ROUTES = [
  '/doctors-marketing-agency-jaipur',
  '/ivf-marketing-agency-jaipur',
  '/orthopedic-marketing-agency-jaipur',
  '/jewellery-marketing-agency-jaipur',
  '/real-estate-marketing-agency-jaipur',
  '/real-estate/project-launch-marketing',
  '/d2c/fashion/womens-clothing',
  '/travel-marketing-agency',
  '/white-label-digital-marketing-agency',
  '/white-label-seo-agency',
]

for (const route of PRIORITY_ROUTES) {
  const pagePath = `app${route}/page.tsx`
  if (!fs.existsSync(pagePath)) {
    failures.push(`${route}: page file missing`)
    continue
  }
  const source = read(pagePath)
  if (!source.includes('PriorityCommercialPage')) {
    failures.push(`${route}: no longer renders PriorityCommercialPage`)
  }
}

const commercial = read('components/commercial/CommercialV2Landing.tsx')
const priority = read('components/commercial/PriorityCommercialPage.tsx')
const sitemap = read('app/sitemap.ts')
const seoStandard = read('SEO-DESIGN-STANDARD.md')

const commercialContracts = [
  ['FAQPage', 'FAQPage JSON-LD'],
  ['<details', 'crawlable native FAQ details'],
  ['Define. Measure. Analyze. Improve. Control. Then scale.', 'DMAIC + GE Scale explanation'],
  ['COMMERCIAL DECISION LOGIC', 'IF/BUT/THEN decision section'],
  ['LeadForm', 'shared lead form'],
  ['relatedResources', 'topic-cluster resources'],
]

for (const [needle, label] of commercialContracts) {
  if (!commercial.includes(needle)) failures.push(`CommercialV2Landing: missing ${label}`)
}

if (!commercial.includes("index === METHOD.length - 1 ? 'GE COMMERCIAL EXTENSION' : 'DMAIC CORE'")) {
  failures.push('CommercialV2Landing: DMAIC core and GE Scale extension labels were altered')
}

const currentNapFragments = ['Class of Pearl', 'Durgapura', "postalCode: '302018'"]
for (const fragment of currentNapFragments) {
  if (!priority.includes(fragment)) failures.push(`PriorityCommercialPage: current NAP fragment missing: ${fragment}`)
}

const forbiddenNapFragments = ['Pratap Nagar', 'Sector 26, Sanganer', "postalCode: '302033'"]
for (const fragment of forbiddenNapFragments) {
  if (priority.includes(fragment)) failures.push(`PriorityCommercialPage: old NAP fragment reintroduced: ${fragment}`)
}

const travelContracts = [
  'DIRECT TRAVEL ACQUISITION',
  'Create Demand',
  'Capture Search',
  'WhatsApp',
]
for (const fragment of travelContracts) {
  if (!priority.includes(fragment)) failures.push(`Travel V2: direct-acquisition contract missing: ${fragment}`)
}

if (!priority.includes('not TripAdvisor, MakeMyTrip, Goibibo or OTA optimisation')) {
  failures.push('Travel V2: explicit no-OTA positioning is missing')
}

const agencyContracts = [
  "formVariant: 'agency'",
  'Client Brief',
  'SOW · NDA',
  'agency-owned',
  'whiteLabelSeo',
]
for (const fragment of agencyContracts) {
  if (!priority.includes(fragment)) failures.push(`White-label V2: agency-fulfilment contract missing: ${fragment}`)
}

// Real-estate strategy exclusion: there must not be an NRI-targeting URL in the
// sitemap. The two plain-text NRI references in PriorityCommercialPage are
// explicit negative exclusions, not a service/keyword target.
if (/path:\s*['"][^'"]*nri/i.test(sitemap)) {
  failures.push('Real estate: an NRI-targeting URL was added to the sitemap')
}

const nriMentions = priority.match(/\bNRI\b/gi) ?? []
if (nriMentions.length > 2) {
  failures.push(`Real estate: unexpected NRI targeting language detected (${nriMentions.length} mentions; maximum allowed is two explicit exclusions)`)
}

if (!priority.includes("formVariant: 'clinic'") || !priority.includes("formVariant: 'd2c'") || !priority.includes("formVariant: 'agency'")) {
  failures.push('PriorityCommercialPage: buyer-specific clinic/d2c/agency form variants are not all preserved')
}

const requiredStandardRules = [
  'SEO preservation and search intent',
  'DIAGNOSE',
  'EXPLAIN',
  'PROVE',
  'CONVERT',
  'Define → Measure → Analyze → Improve → Control → Scale',
  'Do not use the previous Sector 26 / Pratap Nagar / 302033 address.',
]
for (const rule of requiredStandardRules) {
  if (!seoStandard.includes(rule)) failures.push(`SEO-DESIGN-STANDARD.md: rule missing: ${rule}`)
}

if (failures.length) {
  console.error('\nCommercial V2 integrity check failed:\n')
  failures.forEach((failure) => console.error(`  - ${failure}`))
  process.exit(1)
}

console.log(`Commercial V2 integrity check passed: ${PRIORITY_ROUTES.length} priority routes retain the buyer-specific V2 system.`)
console.log('FAQ crawlability, DMAIC/Scale semantics, NAP, travel direct-acquisition, real-estate exclusions and buyer-specific forms are intact.')
