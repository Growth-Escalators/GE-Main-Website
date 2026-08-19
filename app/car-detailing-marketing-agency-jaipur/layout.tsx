import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/car-detailing-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Car Detailing Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for car detailing, ceramic coating and car spa studios — local search, paid demand, offer positioning and WhatsApp booking journeys focused on qualified bay bookings.',
  keywords: ['car detailing marketing agency jaipur','car detailing marketing jaipur','auto detailing marketing','ceramic coating marketing jaipur','car spa marketing jaipur','car wash marketing jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Car Detailing Marketing Agency in Jaipur — Growth Escalators', description: 'Local search, paid demand, offer positioning and WhatsApp booking journeys for Jaipur car-detailing and ceramic-coating studios.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Car Detailing Marketing Agency in Jaipur',
  breadcrumbName: 'Car Detailing Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for car detailing, ceramic coating and car spa studios, focused on local demand and qualified booking journeys.',
  serviceType: 'Automotive Service Marketing',
  knowsAbout: ['Car Detailing Marketing', 'Local SEO', 'Performance Marketing', 'Automotive Marketing', 'WhatsApp Booking'],
})

export default function CarDetailingJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
