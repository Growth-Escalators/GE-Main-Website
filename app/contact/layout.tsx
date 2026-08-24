import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Growth Escalators — Free Growth Audit',
  description:
    'Contact Growth Escalators in Jaipur for performance marketing, websites, software, AI automation or technology staffing. Start with a free growth audit.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Growth Escalators — Free Growth Audit',
    description: 'Talk to the Jaipur-based Growth Escalators team about marketing, technology or staffing. Start with a free growth audit.',
    url: '/contact',
    type: 'website',
  },
}

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.growthescalators.com/#localbusiness',
  name: 'Growth Escalators',
  image: 'https://www.growthescalators.com/logo.webp',
  url: 'https://www.growthescalators.com',
  email: 'jatin@growthescalators.com',
  telephone: '+91-7733888883',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No: 607-608, 6th Floor, Class of Pearl, Income Tax Colony, Durgapura',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302018',
    addressCountry: 'IN',
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
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
    {children}
  </>
}
