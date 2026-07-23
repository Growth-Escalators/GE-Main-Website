/**
 * Single source of truth for Growth Escalators' NAP (Name/Address/Phone) and
 * core entity data. Every schema builder, landing-page assembler, and future
 * location/service page should read from here instead of hardcoding values.
 *
 * Values are copied verbatim from the existing JSON-LD / UI literals in:
 *  - app/layout.tsx                  (Organization schema — name, url, logo, sameAs, telephone)
 *  - app/contact/layout.tsx          (LocalBusiness schema — address, geo, hours)
 *  - components/sections/Footer.tsx  (footer NAP block)
 *  - components/ui/GrowthBot.tsx     (contact_info chat reply + WhatsApp link)
 *
 * If those change, update this file first — everything else should derive
 * from it.
 *
 * NOTE on `logo` vs. `public/logo.webp`: production's Organization JSON-LD
 * `logo` field (app/layout.tsx) currently points at /og-image.jpg — see
 * commit "seo: add missing og-image.jpg (fixes broken OG + schema logo
 * site-wide)". app/contact/layout.tsx's LocalBusiness `image` field still
 * points at the separate /logo.webp asset — a different field on a
 * different schema type. That literal is deliberately left out of this
 * module (and left untouched in app/contact/layout.tsx) rather than forced
 * to match `logo`, so neither page's rendered JSON-LD changes.
 */

export const BUSINESS = {
  name: 'Growth Escalators',
  url: 'https://www.growthescalators.com',
  email: 'Info@growthescalators.com',

  phone: {
    e164: '+917733888883',
    display: '+91 77338 88883',
    tel: 'tel:+917733888883',
    // Exact literal used in the JSON-LD `telephone` fields in app/layout.tsx
    // and app/contact/layout.tsx. Kept as its own hyphenated form (rather
    // than reusing `e164`) so the already-indexed structured data doesn't
    // change shape.
    schema: '+91-77338-88883',
  },

  whatsapp: '917733888883',

  address: {
    street: '264/103-104, Sector 26, Sanganer, Pratap Nagar',
    locality: 'Jaipur',
    region: 'Rajasthan',
    postalCode: '302033',
    country: 'IN',
    // Short display form used in the site footer. Not derivable from
    // `street` by simple truncation (it drops "Sanganer,"), so kept as its
    // own literal rather than computed.
    shortDisplay: 'Sector 26, Pratap Nagar, Jaipur 302033',
  },

  geo: {
    lat: 26.8189,
    lng: 75.795,
  },

  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],

  founder: {
    name: 'Jatin Agrawal',
    role: 'Founder',
    // Matches the JATIN_PERSON_SCHEMA.sameAs already live in app/layout.tsx.
    // Not currently wired up there (that Person entity graph node is left
    // untouched on purpose — see app/layout.tsx comments) but recorded here
    // as the real value for future consumers.
    sameAs: ['https://www.wizmatchenterprises.com/#jatin-agrawal'] as string[],
  },

  // Matches the Organization schema's `sameAs` in app/layout.tsx and the
  // LocalBusiness schema's `sameAs` in app/contact/layout.tsx.
  sameAs: [
    'https://www.facebook.com/growthescalators',
    'https://www.instagram.com/growthescalators',
    'https://www.linkedin.com/company/growth-escalators',
  ],

  // Matches the Organization schema's `logo` in app/layout.tsx — production's
  // real current value (self-hosted /og-image.jpg), not the stale
  // WordPress-hosted placeholder some earlier drafts of this file used.
  logo: 'https://www.growthescalators.com/og-image.jpg',
} as const
