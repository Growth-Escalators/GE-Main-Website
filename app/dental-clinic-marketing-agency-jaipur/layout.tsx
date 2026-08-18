import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/dental-clinic-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Dental Clinic Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for dentists and dental clinics — treatment-led Google and Meta campaigns, local search, landing pages and WhatsApp booking journeys focused on qualified patient demand.',
  keywords: ['dental clinic marketing agency jaipur','dentist marketing jaipur','dental marketing agency jaipur','dental practice marketing jaipur','marketing for dentists jaipur','dental clinic advertising jaipur','dental seo jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Dental Clinic Marketing Agency in Jaipur — Growth Escalators', description: 'Treatment-led paid media, local search, landing pages and WhatsApp booking journeys for Jaipur dentists and dental clinics.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Dental Clinic Marketing Agency in Jaipur',
  breadcrumbName: 'Dental Clinic Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for dentists and dental clinics, focused on patient acquisition, local search, treatment landing pages and booking journeys.',
  serviceType: 'Dental Marketing',
  knowsAbout: ['Dental Marketing', 'Healthcare Marketing', 'Local SEO', 'Google Ads', 'Patient Acquisition'],
})

export default function DentalJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
