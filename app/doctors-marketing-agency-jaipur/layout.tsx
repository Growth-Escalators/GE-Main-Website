import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/doctors-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Marketing Agency for Doctors in Jaipur',
  description:
    'Jaipur marketing agency for doctors & clinics — Google Maps SEO, compliant ads, WhatsApp no-show fixes. Real clinic: +220% bookings in 4 months.',
  keywords: [
    'marketing agency for doctors in jaipur',
    'healthcare marketing agency jaipur',
    'clinic marketing jaipur',
    'doctor marketing agency jaipur',
    'hospital marketing agency jaipur',
    'medical marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Marketing Agency for Doctors in Jaipur — Growth Escalators',
    description:
      'Jaipur marketing agency for doctors & clinics. Google Maps SEO, healthcare-compliant ads, WhatsApp no-show fixes. Real clinic: +220% bookings in 4 months.',
    url: PATH,
    type: 'website',
  },
}

/* Jaipur healthcare ProfessionalService linked to the global organization.
   Keep NAP identical to app/layout.tsx + the visible footer. Add geo only
   after the current Google Business Profile pin is verified. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Marketing Agency for Doctors in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency for doctors, clinics, and hospitals in Jaipur — Google Business Profile and local SEO, healthcare-conscious Google and Meta ads, landing pages and appointment follow-up.',
      telephone: '+91-7733888883',
      email: 'jatin@growthescalators.com',
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office No: 607-608, 6th Floor, Class of Pearl, Income Tax Colony, Durgapura',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302018',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'State', name: 'Rajasthan' },
      ],
      serviceType: 'Healthcare Marketing',
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
        { '@type': 'ListItem', position: 2, name: 'Marketing Agency for Doctors in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function DoctorsJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
