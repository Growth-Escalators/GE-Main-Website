import type { MetadataRoute } from 'next'

const SITE = 'https://www.growthescalators.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // No disallow rules currently — every public route should be indexable.
        // If you ever add /api/* server actions or draft routes, disallow them here.
      },
      // Explicit AI-retrieval crawler allowances (GE SEO Standard v1). The `*` rule
      // above already permits these, but listing them out is what the standard
      // requires and makes the intent unambiguous if a disallow is ever added above.
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    // No `host` directive — it's a dead Yandex-only convention; Google ignores it
    // and the standard says not to emit it (GE SEO Standard v1, Layer 1).
  }
}
