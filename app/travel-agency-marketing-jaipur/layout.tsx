import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/travel-agency-marketing-jaipur'

export const metadata: Metadata = {
  title: 'Travel Agency Marketing in Jaipur',
  description:
    'Jaipur marketing agency for travel companies, tour operators and DMCs — intent-led paid media, enquiry funnels, WhatsApp follow-up and conversion tracking built around qualified booking demand.',
  keywords: ['travel agency marketing jaipur','travel company marketing jaipur','tour operator marketing jaipur','travel lead generation jaipur','digital marketing for travel agency','travel agency advertising jaipur','tourism marketing agency jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Travel Agency Marketing in Jaipur — Growth Escalators', description: 'Intent-led paid media, enquiry funnels, WhatsApp follow-up and conversion tracking for Jaipur travel companies and tour operators.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Travel Agency Marketing in Jaipur',
  breadcrumbName: 'Travel Agency Marketing in Jaipur',
  description: 'Marketing agency in Jaipur for travel companies, tour operators and DMCs, focused on qualified booking enquiries, funnels, follow-up and measurement.',
  serviceType: 'Travel Marketing',
  knowsAbout: ['Travel Marketing', 'Tour Operator Marketing', 'Lead Generation', 'Performance Marketing', 'WhatsApp Automation'],
})

export default function TravelJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
