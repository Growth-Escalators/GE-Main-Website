import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/business'

export const metadata: Metadata = {
  title: 'Contact Us — Free 30-Min Marketing Strategy Call',
  description:
    "Book a free 30-minute strategy call. We'll audit your marketing, find the biggest leaks, and hand you the 3 fixes we'd make first — Jaipur-based team.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Growth Escalators — Free Strategy Call',
    description: "Free 30-minute strategy call. We'll audit your marketing and hand you the 3 highest-ROI fixes first. Jaipur-based team.",
    url: '/contact',
    type: 'website',
  },
}

/* JSON-LD LocalBusiness — emitted on /contact since it's the page that
   surfaces the office address, phone, and hours. Earns eligibility for
   the Knowledge Panel and Maps results when search intent is local. */
const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BUSINESS.url}/#localbusiness`,
  name: BUSINESS.name,
  // Kept as its own literal — this is a different asset from the
  // Organization schema's `logo` in app/layout.tsx (see lib/business.ts
  // comments). Not centralized so this page's rendered JSON-LD doesn't change.
  image: 'https://www.growthescalators.com/logo.webp',
  url: BUSINESS.url,
  email: BUSINESS.email,
  telephone: BUSINESS.phone.schema,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHoursSpecification: BUSINESS.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: BUSINESS.sameAs,
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      {children}
    </>
  )
}
