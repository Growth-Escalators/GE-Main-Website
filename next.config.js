/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // --- Retired subdomain -> canonical www (host-scoped). FIRES ONLY once
      //     dtc.growthescalators.com is added to THIS Vercel project and its DNS
      //     CNAME points here (it currently resolves to ludicrous.cloud). ecom. is
      //     intentionally left alone (kept as a live funnel). consulting. is dead
      //     and not being revived — no rule needed. ---
      { source: '/:path*', has: [{ type: 'host', value: 'dtc.growthescalators.com' }], destination: 'https://www.growthescalators.com/:path*', permanent: true },

      // --- Core clean 1:1 page maps (legacy WordPress slugs) ---
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/our-work', destination: '/work', permanent: true },
      { source: '/terms-conditions', destination: '/terms-and-conditions', permanent: true },
      { source: '/page-blog', destination: '/blog', permanent: true },
      { source: '/page-portfolio', destination: '/portfolio', permanent: true },
      { source: '/best-marketing-agency-for-doctors', destination: '/doctors', permanent: true },
      { source: '/consultation', destination: '/contact', permanent: true },

      // --- Old per-service pages -> consolidated /services ---
      { source: '/service', destination: '/services', permanent: true },
      { source: '/service/branding', destination: '/services', permanent: true },
      { source: '/service/growth-marketing', destination: '/services', permanent: true },
      { source: '/service/performance-marketing', destination: '/services', permanent: true },
      { source: '/service/personal-branding', destination: '/services', permanent: true },
      { source: '/service/public-relations', destination: '/services', permanent: true },
      { source: '/service/social-media', destination: '/services', permanent: true },
      { source: '/service/website-development', destination: '/services', permanent: true },
      { source: '/seo', destination: '/services', permanent: true },
      { source: '/social-media-management', destination: '/services', permanent: true },
      { source: '/content-creation', destination: '/services', permanent: true },
      { source: '/graphic-design-and-video-editing', destination: '/services', permanent: true },
      { source: '/web-development', destination: '/services', permanent: true },
      { source: '/digital-marketing', destination: '/services', permanent: true },
      { source: '/email-automation', destination: '/services', permanent: true },
      { source: '/paid-ad-campaigns-facebookgoogle', destination: '/services', permanent: true },
      { source: '/e-commerce', destination: '/d2c', permanent: true },

      // --- Old portfolio variants -> /portfolio ---
      { source: '/graphics-portfolio', destination: '/portfolio', permanent: true },
      { source: '/graphic-design-portfolio-2', destination: '/portfolio', permanent: true },
      { source: '/video-portfolio', destination: '/portfolio', permanent: true },
      { source: '/portfolio-ecommerce', destination: '/portfolio', permanent: true },

      // --- Impression-earning legacy URLs recovered from GSC 90-day scan (2026-07-12) ---
      { source: '/testimonial-2', destination: '/work', permanent: true },        // 23 imp / pos 4.3
      { source: '/social-media-audit', destination: '/contact', permanent: true }, // 16 imp (old lead-magnet)
      { source: '/seo-auditgegv', destination: '/services', permanent: true },     // 8 imp (demo slug, still ranks)

      // --- Retired /restaurants (was noindexed/de-targeted) -> new BOFU niche page (2026-07-21) ---
      { source: '/restaurants', destination: '/restaurant-marketing-agency-jaipur', permanent: true },

      // --- OPTIONAL / lower confidence (uncomment after review) ---
      // { source: '/home-digital-marketing', destination: '/', permanent: true },
      // { source: '/white-label-entry-offers', destination: '/staffing', permanent: true },
      // { source: '/social-media-audit', destination: '/services', permanent: true },
      // { source: '/digital-marketing-agency-pricing-guide', destination: '/services', permanent: true },
      // { source: '/digital-marketing-agency-pricing-guide-2', destination: '/services', permanent: true },
    ]
  },
}

module.exports = nextConfig
