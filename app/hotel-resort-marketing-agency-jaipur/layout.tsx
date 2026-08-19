import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/hotel-resort-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Hotel & Resort Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for hotels, resorts and boutique stays — direct-booking campaigns, local search, social creative and conversion journeys designed to reduce dependence on third-party demand.',
  keywords: ['hotel marketing agency jaipur','resort marketing jaipur','hotel digital marketing jaipur','hospitality marketing agency jaipur','direct booking marketing jaipur','hotel social media marketing jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Hotel & Resort Marketing Agency in Jaipur — Growth Escalators', description: 'Direct-booking campaigns, local search, social creative and conversion journeys for Jaipur hotels and resorts.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Hotel & Resort Marketing Agency in Jaipur',
  breadcrumbName: 'Hotel & Resort Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for hotels, resorts and boutique stays, focused on direct-booking demand, local discovery and conversion journeys.',
  serviceType: 'Hospitality Marketing',
  knowsAbout: ['Hotel Marketing', 'Hospitality Marketing', 'Direct Booking', 'Local SEO', 'Social Media Marketing'],
})

export default function HotelJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
