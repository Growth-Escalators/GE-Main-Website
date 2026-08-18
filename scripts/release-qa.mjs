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
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1])
    .map((url) => new URL(url).pathname)
}

function localLinks(html) {
  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)].map((match) => match[1])
  const paths = new Set()
  for (const href of hrefs) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue
    try {
      const url = href.startsWith('http') ? new URL(href) : new URL(href, PROD)
      if (url.hostname !== 'www.growthescalators.com') continue
      if (url.pathname.startsWith('/api/')) continue
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

function h1Count(html) {
  return (html.match(/<h1(?:\s|>)/gi) || []).length
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
  if (paths.includes('/restaurants')) fail('Retired /restaurants route reappeared in sitemap')

  const discoveredLinks = new Set()
  for (const path of paths) {
    let response
    try {
      response = await get(path)
    } catch (error) {
      fail(`${path} request failed: ${error.message}`)
      continue
    }

    if (!response.ok) {
      fail(`${path} returned ${response.status}`)
      continue
    }

    const html = await response.text()
    const h1s = h1Count(html)
    if (h1s !== 1) fail(`${path} has ${h1s} H1 elements (expected exactly 1)`)

    const canonical = canonicalFrom(html)
    const expectedCanonical = `${PROD}${path === '/' ? '/' : path}`
    if (!canonical) fail(`${path} is missing a canonical`)
    else {
      const normalized = canonical.endsWith('/') && path !== '/' ? canonical.slice(0, -1) : canonical
      const expected = expectedCanonical.endsWith('/') && path !== '/' ? expectedCanonical.slice(0, -1) : expectedCanonical
      if (normalized !== expected) fail(`${path} canonical mismatch: ${canonical} (expected ${expectedCanonical})`)
    }

    if (/info@growthescalators\.com/i.test(html)) fail(`${path} contains the retired Info@ email`)
    if (/Meta\s*&\s*Google Ads certified/i.test(html)) fail(`${path} contains the unverified certification claim`)

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
    try {
      response = await get(path, { method: 'GET' })
    } catch (error) {
      fail(`Internal link ${path} request failed: ${error.message}`)
      continue
    }
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

  if (warnings.length) {
    console.log('\nWarnings:')
    for (const item of warnings) console.log(`- ${item}`)
  }

  if (failures.length) {
    console.error(`\nFAILED (${failures.length})`)
    for (const item of failures) console.error(`- ${item}`)
    process.exit(1)
  }

  console.log(`\nPASS — ${paths.length} sitemap routes and ${discoveredLinks.size} internal destinations checked.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
