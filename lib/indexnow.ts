/**
 * Shared IndexNow submission logic for growthescalators.com.
 *
 * IndexNow is the instant-indexing protocol supported by Bing and Yandex. Bing's
 * index is what feeds ChatGPT's web retrieval, so pinging IndexNow is the fastest
 * path to Bing (and therefore AI-search) visibility. Used by both the on-demand
 * CLI (scripts/indexnow-ping.ts) and the automated cron route
 * (app/api/cron/indexnow/route.ts).
 */

export const INDEXNOW_HOST = 'www.growthescalators.com'
export const INDEXNOW_SITE = `https://${INDEXNOW_HOST}`

// IndexNow ownership key. This MUST stay in sync with the key file served at
// public/<key>.txt — i.e. public/85e4c1e4229d47f8bed45289e8820ac6.txt, whose
// only contents is exactly this string. If you rotate the key, update BOTH.
const KEY = '85e4c1e4229d47f8bed45289e8820ac6'
const KEY_LOCATION = `${INDEXNOW_SITE}/${KEY}.txt`

// Shared IndexNow endpoint — distributes the submission to all participating
// engines (Bing, Yandex, Seznam, Naver) so we only ping once.
const ENDPOINT = 'https://api.indexnow.org/indexnow'

export interface IndexNowResult {
  ok: boolean
  status: number
  statusText: string
  body: string
  submitted: string[]
  rejected: string[]
}

/**
 * Submits a URL list to IndexNow. Every URL must be on INDEXNOW_HOST — mixed
 * hosts are rejected by IndexNow itself, so we filter here and report which
 * URLs were skipped rather than failing the whole batch.
 */
export async function submitToIndexNow(urlList: string[]): Promise<IndexNowResult> {
  const submitted: string[] = []
  const rejected: string[] = []
  for (const u of urlList) {
    try {
      if (new URL(u).host === INDEXNOW_HOST) submitted.push(u)
      else rejected.push(u)
    } catch {
      rejected.push(u)
    }
  }

  if (submitted.length === 0) {
    return { ok: false, status: 0, statusText: 'no valid URLs', body: '', submitted, rejected }
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: submitted,
    }),
  })

  const body = (await res.text()).trim()
  // 200 = accepted; 202 = accepted, key validation pending. Anything else is a
  // real failure (403 = key not found/mismatch, 422 = URL/host mismatch, etc.).
  const ok = res.status === 200 || res.status === 202

  return { ok, status: res.status, statusText: res.statusText, body, submitted, rejected }
}
