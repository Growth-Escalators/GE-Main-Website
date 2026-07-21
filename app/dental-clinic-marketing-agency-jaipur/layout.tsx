import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/dental-clinic-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Dental Clinic Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for dentists & dental clinics. Treatment-level Google/Meta ads, Google Maps local SEO, and WhatsApp booking systems that fill your chair with high-value cases. One Jaipur clinic: +220% bookings in 4 months. Free clinic audit.',
  keywords: [
    'dental clinic marketing agency jaipur',
    'dentist marketing jaipur',
    'dental marketing agency jaipur',
    'dental practice marketing jaipur',
    'marketing for dentists jaipur',
    'dental clinic advertising jaipur',
    'dental seo jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Dental Clinic Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Treatment-level ads, Google Maps local SEO, and WhatsApp booking systems that fill Jaipur dental clinics with high-value cases. Real result: +220% bookings in 4 months.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (dental marketing)
   node linked back to the global #organization graph. Server-rendered so AI
   crawlers see it in raw HTML. NAP is the real registered office; geo is
   approximate — confirm against the verified Google Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Dental Clinic Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for dentists and dental clinics — treatment-level Google and Meta ads, Google Maps local SEO, WhatsApp booking automation, and before/after case marketing.',
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
      knowsAbout: ['Dental Marketing', 'Healthcare Marketing', 'Local SEO', 'Google Ads', 'Patient Acquisition'],
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
        { '@type': 'ListItem', position: 2, name: 'Dental Clinic Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function DentalJaipurLayout({ children }: { children: React.ReactNode }) {
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
