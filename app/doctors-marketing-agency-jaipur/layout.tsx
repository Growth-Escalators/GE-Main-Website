import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/doctors-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency for Doctors in Jaipur',
  description:
    'Digital marketing agency for doctors in Jaipur — Google Maps SEO, healthcare-compliant Google & Meta ads, WhatsApp appointment follow-up, and clinic growth focused on booked patients.',
  keywords: [
    'digital marketing agency for doctors in jaipur',
    'marketing agency for doctors in jaipur',
    'healthcare marketing agency jaipur',
    'clinic marketing jaipur',
    'doctor marketing agency jaipur',
    'hospital marketing agency jaipur',
    'medical marketing agency jaipur',
    'doctor digital marketing jaipur',
    'patient acquisition for doctors jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Digital Marketing Agency for Doctors in Jaipur — Growth Escalators',
    description:
      'Jaipur-focused digital marketing for doctors & clinics: Google Maps SEO, compliant ads, WhatsApp appointment follow-up, and booked-patient growth.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Digital Marketing Agency for Doctors in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Digital marketing agency for doctors, clinics, and hospitals in Jaipur — Google Business Profile & local SEO, healthcare-compliant Google and Meta ads, WhatsApp appointment automation, and patient acquisition.',
      telephone: '+91-7733888883',
      email: 'Info@growthescalators.com',
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
      serviceType: [
        'Healthcare Marketing',
        'Digital Marketing for Doctors',
        'Local SEO for Clinics',
        'Patient Acquisition for Doctors',
      ],
      openingHours: 'Mo-Sa 10:00-19:00',
      parentOrganization: { '@id': `${SITE}/#organization` },
      sameAs: [
        'https://www.facebook.com/growthescalators',
        'https://www.instagram.com/growthescalators',
        'https://www.linkedin.com/company/growth-escalators',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '187',
        bestRating: '5',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Digital Marketing Agency for Doctors in Jaipur', item: `${SITE}${PATH}` },
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
