import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/salon-spa-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Salon & Spa Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for salons, spas and beauty studios — appointment demand, local search, social creative, WhatsApp follow-up and retention journeys built around bookings and repeat visits.',
  keywords: ['salon marketing agency jaipur','spa marketing agency jaipur','salon social media marketing jaipur','beauty salon marketing jaipur','salon advertising jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Salon & Spa Marketing Agency in Jaipur — Growth Escalators', description: 'Appointment demand, local search, social creative, WhatsApp follow-up and retention journeys for Jaipur salons and spas.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Salon & Spa Marketing Agency in Jaipur',
  breadcrumbName: 'Salon & Spa Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for salons, spas and beauty studios, focused on appointment demand, local discovery and customer retention.',
  serviceType: 'Salon and Spa Marketing',
  knowsAbout: ['Salon Marketing', 'Spa Marketing', 'Local SEO', 'Social Media Marketing', 'Appointment Marketing'],
})

export default function SalonSpaJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
