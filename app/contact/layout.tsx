import type { Metadata } from 'next'

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
  '@id': 'https://www.growthescalators.com/#localbusiness',
  name: 'Growth Escalators',
  image: 'https://growthescalators.com/wp-content/uploads/2023/10/growth-escalator-logo.png',
  url: 'https://www.growthescalators.com',
  email: 'Info@growthescalators.com',
  telephone: '+91-77338-88883',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '264/103-104, Sector 26, Sanganer, Pratap Nagar',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302033',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.8189,
    longitude: 75.7950,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/growthescalators',
    'https://www.instagram.com/growthescalators',
    'https://www.linkedin.com/company/growth-escalators',
  ],
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
