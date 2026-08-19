import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/gym-fitness-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Gym & Fitness Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for gyms, fitness studios and yoga centres — local trial campaigns, trial-to-member funnels, retention journeys and performance measurement built around membership growth.',
  keywords: ['gym marketing agency jaipur','fitness marketing agency jaipur','gym marketing jaipur','yoga studio marketing jaipur','fitness studio marketing jaipur','gym advertising jaipur','gym social media marketing jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Gym & Fitness Marketing Agency in Jaipur — Growth Escalators', description: 'Local trial campaigns, trial-to-member funnels, retention journeys and membership-growth measurement for Jaipur gyms and studios.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Gym & Fitness Marketing Agency in Jaipur',
  breadcrumbName: 'Gym & Fitness Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for gyms, fitness studios and yoga centres, focused on trial demand, membership conversion and retention.',
  serviceType: 'Fitness Marketing',
  knowsAbout: ['Gym Marketing', 'Fitness Marketing', 'Local SEO', 'Membership Growth', 'Performance Marketing'],
})

export default function GymJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
