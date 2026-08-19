import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/doctors-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Marketing Agency for Doctors in Jaipur',
  description:
    'Jaipur marketing agency for doctors and clinics — local search, patient-acquisition campaigns, treatment landing pages and WhatsApp booking journeys. Dr. Dheeraj Dubay: 35,000+ leads generated.',
  keywords: ['marketing agency for doctors in jaipur','healthcare marketing agency jaipur','clinic marketing jaipur','doctor marketing agency jaipur','hospital marketing agency jaipur','medical marketing agency jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Marketing Agency for Doctors in Jaipur — Growth Escalators', description: 'Local search, patient-acquisition campaigns, treatment landing pages and WhatsApp booking journeys for Jaipur doctors and clinics. Dr. Dheeraj Dubay: 35,000+ leads.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Marketing Agency for Doctors in Jaipur',
  breadcrumbName: 'Marketing Agency for Doctors in Jaipur',
  description: 'Marketing agency for doctors and clinics in Jaipur, focused on patient acquisition, local search, treatment landing pages and booking journeys.',
  serviceType: 'Healthcare Marketing',
  priceRange: '₹₹₹',
  area: 'rajasthan',
  knowsAbout: ['Healthcare Marketing', 'Patient Acquisition', 'Local SEO', 'Google Ads', 'Clinic Marketing'],
})

export default function DoctorsJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
