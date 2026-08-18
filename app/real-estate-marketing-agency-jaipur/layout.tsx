import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/real-estate-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Agency in Jaipur',
  description:
    'Jaipur real estate marketing for builders and developers — qualified buyer demand, landing pages, CRM nurture, site-visit journeys and RERA-aware campaign execution. Book a free project demand audit.',
  keywords: [
    'real estate marketing agency in jaipur',
    'real estate marketing agency jaipur',
    'builder marketing agency jaipur',
    'real estate lead generation jaipur',
    'property marketing agency jaipur',
    'real estate digital marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Real Estate Marketing Agency in Jaipur — Growth Escalators',
    description: 'Qualified buyer demand, site-visit journeys, CRM nurture and RERA-aware campaign execution for Jaipur builders and developers.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Real Estate Marketing Agency in Jaipur',
  breadcrumbName: 'Real Estate Marketing Agency in Jaipur',
  description: 'Real estate marketing agency in Jaipur for builders and developers, focused on qualified buyer demand, site visits, CRM nurture and booking journeys.',
  serviceType: 'Real Estate Marketing',
  priceRange: '₹₹₹',
  area: 'rajasthan',
  knowsAbout: ['Real Estate Marketing', 'Lead Qualification', 'CRM Nurture', 'Performance Marketing', 'Landing Pages'],
})

export default function JaipurRealEstateLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
