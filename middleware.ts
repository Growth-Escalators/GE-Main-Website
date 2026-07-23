import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * 410 Gone handler for dead legacy / spam URLs.
 *
 * WHY: growthescalators.com ran on WordPress before this Next.js site. During that era the
 * site was hit by a Japanese-keyword / fake-marketplace SEO spam injection (a "cloaking hack"),
 * so Google discovered ~16.5k junk URLs — numeric `.shtml` pages, bare long-numeric paths,
 * `/shopdetail/…`, `/product/edit/…`, locale-cloaked `/zhHant/product/surugaya/…`, and an
 * injected `/search?…` endpoint. The migration to Next.js already killed them all (they 404
 * today), but a 404 makes Google re-check the URL for months. Returning **410 Gone** tells
 * Google (and Bing) the URL is permanently removed, so it drops out of the index far faster.
 * This is the technical half of clearing the GSC "Not found (404)" + "Crawled – not indexed"
 * reports; the other half is the GSC Removals tool (temporary hide) + Validate Fix.
 *
 * SAFETY: every pattern below is confirmed-junk and cannot collide with a real route — all real
 * routes are word-slugs (see app/sitemap.ts) and there is no /search, /product, or /shopdetail
 * route. Next.js applies next.config.js `redirects()` BEFORE middleware, so the legacy 1:1 slug
 * redirects (/our-services → /services, etc.) still win and are never reached here. Real static
 * assets (og-image.jpg, logo.webp, sitemap.xml, robots.txt, llms.txt, the IndexNow key) are
 * excluded by the matcher's file-extension negative-lookahead below.
 */

const GONE_PATHS: RegExp[] = [
  /\.shtml$/i, // numeric fake pages: /64427160.shtml
  /^\/\d{5,}\/?$/, // bare long-numeric spam: /428812736
  /^\/shopdetail\//i, // fake marketplace listings: /shopdetail/5425170/
  /^\/product\//i, // fake product pages: /product/edit/ZCFD3488890
  /^\/zh[a-z-]*\//i, // locale-cloaked spam: /zhHant/product/surugaya/…
  /^\/search\/?$/i, // injected search endpoint: /search?category&search_word&restrict[]=…
  /^\/wp-/i, // WordPress internals: /wp-admin, /wp-login, /wp-content, /wp-includes, /wp-json
  /^\/xmlrpc\.php/i,
  /^\/index\.php/i,
  /\/feed\/?$/i, // WP feeds: /feed, /comments/feed
  /^\/(category|tag|author)\//i, // WP taxonomy archives
  /^\/\d{4}(\/\d{1,2})?\/?$/, // WP date archives: /2023, /2023/08
  /^\/gesto_template\//i, // dead theme-demo pages
]

// Spam-only query keys. Kept deliberately narrow so real tracking params (utm_*, gclid,
// fbclid) on real pages are NEVER matched — those keys are absent from this list.
const GONE_QUERY_KEYS: string[] = [
  'campaign_uid',
  'search_word',
  'restrict[',
  'restrict%5b',
  'person_id',
  'replytocom',
  'cd_html',
]

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const q = search.toLowerCase()

  const isGone =
    GONE_PATHS.some((re) => re.test(pathname)) ||
    GONE_QUERY_KEYS.some((k) => q.includes(k))

  if (isGone) {
    return new NextResponse(
      'Gone. This page was permanently removed and is no longer available.',
      {
        status: 410,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          // Belt-and-suspenders: even if a crawler ignores the 410, don't index the body.
          'x-robots-tag': 'noindex',
          'cache-control': 'public, max-age=86400',
        },
      },
    )
  }

  return NextResponse.next()
}

export const config = {
  // Run on page-like requests only. Exclude Next internals, the API, and any request for a
  // real static asset (by extension) so /og-image.jpg, /logo.webp, /sitemap.xml, /robots.txt,
  // /llms.txt and the IndexNow key file are never touched. `.shtml` is intentionally NOT in the
  // excluded-extension list — those are spam pages we must 410.
  matcher: [
    '/((?!_next/|api/|.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|css|js|mjs|txt|xml|json|woff2?|ttf|map)$).*)',
  ],
}
