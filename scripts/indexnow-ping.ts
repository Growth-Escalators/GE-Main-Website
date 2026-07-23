/**
 * IndexNow on-demand submitter for growthescalators.com
 * ---------------------------------------------------------------------------
 * Automated daily pings already run via the Vercel Cron job at
 * app/api/cron/indexnow/route.ts (see vercel.json), which submits every URL in
 * app/sitemap.ts — so new blog posts get picked up within a day of deploy with
 * no manual step. Use THIS script when you want an immediate ping right after
 * publishing, instead of waiting for the next cron run.
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

import { submitToIndexNow, INDEXNOW_SITE } from '../lib/indexnow'

// Core URL set submitted when no args are given. Mirrors the static routes in
// app/sitemap.ts (home + money pages + main nav). Keep the two in sync; blog
// posts are dynamic, so submit those explicitly by passing them as args (or
// just let the daily cron pick them up).
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
  const urlList = args.length > 0 ? args : CORE_PATHS.map((p) => `${INDEXNOW_SITE}${p}`)

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow:`)
  for (const u of urlList) console.log(`  ${u}`)

  const result = await submitToIndexNow(urlList)

  if (result.rejected.length > 0) {
    console.error(`\nRefused (not on ${new URL(INDEXNOW_SITE).host} or malformed):`)
    for (const u of result.rejected) console.error(`  ${u}`)
  }

  console.log(`\nIndexNow responded: ${result.status} ${result.statusText}`)
  if (result.body) console.log(result.body)

  if (!result.ok) {
    console.error(`\nSubmission was NOT accepted.`)
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
