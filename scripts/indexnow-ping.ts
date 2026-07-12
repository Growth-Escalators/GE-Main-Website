/**
 * IndexNow on-demand submitter for growthescalators.com
 * ---------------------------------------------------------------------------
 * IndexNow is the instant-indexing protocol supported by Bing and Yandex. Bing's
 * index is what feeds ChatGPT's web retrieval, so pinging IndexNow on publish is
 * the fastest path to Bing (and therefore AI-search) visibility.
 *
 * Usage:
 *   npx tsx scripts/indexnow-ping.ts
 *       -> submits the core URL set below (home + money pages + main routes).
 *
 *   npx tsx scripts/indexnow-ping.ts <url> [url2 ...]
 *       -> submits exactly the URLs you pass (e.g. a freshly published blog post):
 *          npx tsx scripts/indexnow-ping.ts https://www.growthescalators.com/blog/new-post
 *
 * Notes:
 *   - Uses the global `fetch` (Node 18+). No dependencies, nothing to install.
 *   - Only run this against the LIVE site: IndexNow fetches KEY_LOCATION to verify
 *     ownership, so the key file must be reachable at that URL. Do not run it
 *     "locally" expecting an effect — there is no localhost target here.
 *   - Every submitted URL must be on HOST; IndexNow rejects mixed-host lists.
 */

const HOST = 'www.growthescalators.com'
const SITE = `https://${HOST}`

// IndexNow ownership key. This MUST stay in sync with the key file served at
// public/<key>.txt — i.e. public/85e4c1e4229d47f8bed45289e8820ac6.txt, whose
// only contents is exactly this string. If you rotate the key, update BOTH.
const KEY = '85e4c1e4229d47f8bed45289e8820ac6'
const KEY_LOCATION = `${SITE}/${KEY}.txt`

// Shared IndexNow endpoint — distributes the submission to all participating
// engines (Bing, Yandex, Seznam, Naver) so we only ping once.
const ENDPOINT = 'https://api.indexnow.org/indexnow'

// Core URL set submitted when no args are given. Mirrors the static routes in
// app/sitemap.ts (home + money pages + main nav). Keep the two in sync; blog
// posts are dynamic, so submit those explicitly by passing them as args.
const CORE_PATHS: string[] = [
  '/',
  '/services',
  '/staffing',
  '/work',
  '/portfolio',
  '/about',
  '/contact',
  '/blog',
  '/d2c',
  '/d2c/fashion',
  '/performance-marketing-agency-jaipur',
  '/doctors',
  '/roofing',
  '/restaurants',
  '/real-estate',
  '/privacy-policy',
  '/terms-and-conditions',
]

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const urlList = args.length > 0 ? args : CORE_PATHS.map((p) => `${SITE}${p}`)

  // Guard: refuse anything not on HOST (or malformed) before we hit the API.
  const bad = urlList.filter((u) => {
    try {
      return new URL(u).host !== HOST
    } catch {
      return true
    }
  })
  if (bad.length > 0) {
    console.error(`Refusing to submit — these URLs are not on ${HOST} (or are malformed):`)
    for (const u of bad) console.error(`  ${u}`)
    process.exit(1)
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow (${ENDPOINT}):`)
  for (const u of urlList) console.log(`  ${u}`)

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  const body = (await res.text()).trim()
  console.log(`\nIndexNow responded: ${res.status} ${res.statusText}`)
  if (body) console.log(body)

  // 200 = accepted; 202 = accepted, key validation pending. Anything else is a
  // real failure (403 = key not found/mismatch, 422 = URL/host mismatch, etc.).
  if (res.status !== 200 && res.status !== 202) {
    console.error(`\nSubmission was NOT accepted. Check the key file is live at: ${KEY_LOCATION}`)
    process.exit(1)
  }

  console.log('\nDone. Bing/Yandex will fetch the key file to confirm ownership, then queue the URLs.')
}

main().catch((err) => {
  console.error('IndexNow submission failed:', err)
  process.exit(1)
})

// Make this a module (required under tsconfig `isolatedModules`).
export {}
