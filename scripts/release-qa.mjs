#!/usr/bin/env node

const BASE = (process.argv[2] || process.env.QA_BASE_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')
const PROD = 'https://www.growthescalators.com'
const failures = []
const warnings = []

function fail(message) { failures.push(message) }
function warn(message) { warnings.push(message) }

async function get(path, init = {}) {
  const url = path.startsWith('http') ? path : `${BASE}${path}`
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)
  try {
    return await fetch(url, { redirect: 'follow', ...init, signal: controller.signal })
  } finally {
    clearTimeout(timeout)
  }
}

function sitemapPaths(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
}

function localLinks(html) {
  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1])
  const paths = new Set()
  for (const href of hrefs) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue
    try {
      const url = href.startsWith('http') ? new URL(href) : new URL(href, PROD)
      if (url.hostname !== 'www.growthescalators.com' || url.pathname.startsWith('/api/')) continue
      paths.add(url.pathname || '/')
    } catch {}
  }
  return [...paths]
}

function canonicalFrom(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)
  return match?.[1] || ''
}

function normalizedCanonical(value) {
  try {
    const url = new URL(value)
    const pathname = url.pathname === '/' ? '' : url.pathname.replace(/\/$/, '')
    return `${url.origin}${pathname}`
  } catch {
    return value.replace(/\/$/, '')
  }
}

function metaDescription(html) {
  const match = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)
  return match?.[1] || ''
}

function pageTitle(html) { return html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || '' }
function h1Count(html) { return (html.match(/<h1(?:\s|>)/gi) || []).length }

async function postLead(payload) {
  return get('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
}

async function main() {
  console.log(`Release QA against ${BASE}`)

  const robots = await get('/robots.txt')
  if (!robots.ok) fail(`/robots.txt returned ${robots.status}`)
  const robotsText = await robots.text()
  if (!robotsText.includes(`${PROD}/sitemap.xml`)) fail('robots.txt does not reference the production sitemap')

  const sitemap = await get('/sitemap.xml')
  if (!sitemap.ok) fail(`/sitemap.xml returned ${sitemap.status}`)
  const sitemapText = await sitemap.text()
  const paths = sitemapPaths(sitemapText)
  if (paths.length < 40) fail(`Sitemap unexpectedly small: ${paths.length} routes`)
  if (new Set(paths).size !== paths.length) fail('Sitemap contains duplicate URLs')
  if (paths.includes('/restaurants')) fail('Retired /restaurants route reappeared in sitemap')

  const discoveredLinks = new Set()
  for (const path of paths) {
    let response
    try { response = await get(path) } catch (error) { fail(`${path} request failed: ${error.message}`); continue }
    if (!response.ok) { fail(`${path} returned ${response.status}`); continue }

    const html = await response.text()
    const h1s = h1Count(html)
    if (h1s !== 1) fail(`${path} has ${h1s} H1 elements (expected exactly 1)`)
    if (!pageTitle(html)) fail(`${path} is missing a document title`)
    if (!metaDescription(html)) fail(`${path} is missing a meta description`)

    const canonical = canonicalFrom(html)
    const expectedCanonical = `${PROD}${path === '/' ? '' : path}`
    if (!canonical) fail(`${path} is missing a canonical`)
    else if (normalizedCanonical(canonical) !== normalizedCanonical(expectedCanonical)) {
      fail(`${path} canonical mismatch: ${canonical} (expected ${expectedCanonical || PROD})`)
    }

    if (/info@growthescalators\.com/i.test(html)) fail(`${path} contains the retired Info@ email`)
    if (/Meta\s*&\s*Google Ads certified/i.test(html)) fail(`${path} contains the unverified certification claim`)
    if (/187\+\s*Google reviews/i.test(html)) fail(`${path} incorrectly labels the 187+ brands proof as Google reviews`)
    if (/187\+\s*(?:clients|reviews)/i.test(html)) fail(`${path} converts the 187+ brands proof into a client/review count`)
    if (/reviewCount\\?"?:\\?"?187/i.test(html)) fail(`${path} emits an unsupported reviewCount of 187`)
    if (/ratingCount\\?"?:\\?"?187/i.test(html)) fail(`${path} emits an unsupported ratingCount of 187`)

    for (const link of localLinks(html)) discoveredLinks.add(link)
  }

  const contact = await get('/contact')
  const contactHtml = await contact.text()
  if (!contactHtml.includes('jatin@growthescalators.com')) fail('/contact is missing canonical Jatin email')
  if (!contactHtml.includes('+91-7733888883')) fail('/contact is missing canonical phone display')

  const og = await get('/opengraph-image')
  if (!og.ok) fail(`/opengraph-image returned ${og.status}`)
  const ogType = og.headers.get('content-type') || ''
  if (!ogType.startsWith('image/')) fail(`/opengraph-image content-type is ${ogType || 'missing'}`)

  for (const path of [...discoveredLinks].sort()) {
    let response
    try { response = await get(path) } catch (error) { fail(`Internal link ${path} request failed: ${error.message}`); continue }
    if (response.status >= 400) fail(`Internal link ${path} returned ${response.status}`)
  }

  const commercialChecks = [
    ['/d2c', /D2C/i],
    ['/doctors', /(patient|healthcare)/i],
    ['/real-estate', /(site visit|booking|real estate)/i],
    ['/b2b-lead-generation-agency', /(pipeline|B2B)/i],
    ['/staffing', /(India|offshore)/i],
    ['/us-tech-staffing-fulfilment', /(offshore|India)/i],
  ]
  for (const [path, pattern] of commercialChecks) {
    const response = await get(path)
    const html = await response.text()
    if (!pattern.test(html)) fail(`${path} lost its core buyer-intent language`)
  }

  const standardLead = await postLead({ name: 'Release QA', email: 'qa@example.com', phone: '+910000000000', company: 'QA', service: 'Performance Ads', budget: 'QA', source: 'Release QA — local only' })
  if (!standardLead.ok) fail(`Standard /api/lead contract returned ${standardLead.status}`)

  const invalidUsLead = await postLead({ name: 'Release QA', email: 'qa@example.com', company: 'QA', role: 'Java Developer', seats: '1', market: 'US', source: 'Release QA — local only' })
  if (invalidUsLead.status !== 400) fail(`US market validation accepted a lead without companyType/timezone (${invalidUsLead.status})`)

  const validUsLead = await postLead({ name: 'Release QA', email: 'qa@example.com', company: 'QA', role: 'Java Developer', seats: '1', market: 'US', companyType: 'Staffing company', usTimeZone: 'ET', source: 'Release QA — local only' })
  if (!validUsLead.ok) fail(`Valid US /api/lead contract returned ${validUsLead.status}`)

  if (warnings.length) { console.log('\nWarnings:'); for (const item of warnings) console.log(`- ${item}`) }
  if (failures.length) { console.error(`\nFAILED (${failures.length})`); for (const item of failures) console.error(`- ${item}`); process.exit(1) }

  console.log(`\nPASS — ${paths.length} sitemap routes, ${discoveredLinks.size} internal destinations and lead contracts checked.`)
}

main().catch((error) => { console.error(error); process.exit(1) })
