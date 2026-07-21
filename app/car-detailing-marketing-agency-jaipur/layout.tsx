import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/car-detailing-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Car Detailing Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for car detailing, ceramic coating & car spa studios. We fill weekday bays and sell more high-ticket coating jobs via Google Maps, local ads, and WhatsApp follow-up. ₹10Cr+ ad spend managed across 187+ brands. Free bay audit.',
  keywords: [
    'car detailing marketing agency jaipur',
    'car detailing marketing jaipur',
    'auto detailing marketing',
    'ceramic coating marketing jaipur',
    'car spa marketing jaipur',
    'car wash marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Car Detailing Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Weekday bay fills and higher-ticket ceramic coating jobs for Jaipur detailing studios — Google Maps, local ads, and WhatsApp follow-up. ₹10Cr+ ad spend managed across 187+ brands.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (car detailing
   marketing) node linked back to the global #organization graph. Server-
   rendered so AI crawlers (which don't run JS) see it in raw HTML. NAP is the
   real registered office; geo lat/long is approximate — confirm against the
   verified Google Business Profile and update if it differs. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Car Detailing Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for car detailing, ceramic coating and car spa studios — Google Maps local SEO, weekday-fill ad campaigns, high-ticket package marketing, and WhatsApp booking funnels.',
      telephone: '+91-77338-88883',
      email: 'Info@growthescalators.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '264/103-104, Sector 26, Sanganer, Pratap Nagar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302033',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 26.81, longitude: 75.83 },
      areaServed: [
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'Country', name: 'India' },
      ],
      knowsAbout: ['Car Detailing Marketing', 'Local SEO', 'Performance Marketing', 'Automotive Marketing', 'Social Media Marketing'],
      openingHours: 'Mo-Sa 10:00-19:00',
      parentOrganization: { '@id': `${SITE}/#organization` },
      sameAs: [
        'https://www.facebook.com/growthescalators',
        'https://www.instagram.com/growthescalators',
        'https://www.linkedin.com/company/growth-escalators',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Car Detailing Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function CarDetailingJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      {children}
    </>
  )
}
