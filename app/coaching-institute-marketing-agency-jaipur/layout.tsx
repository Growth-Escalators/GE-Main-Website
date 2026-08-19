import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/coaching-institute-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Coaching Institute Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for coaching institutes, test-prep centres and EdTech — course-level paid media, demo funnels, follow-up systems and admission-focused measurement.',
  keywords: ['coaching institute marketing agency jaipur','coaching classes marketing jaipur','education marketing agency jaipur','coaching marketing jaipur','edtech marketing agency jaipur','admissions marketing jaipur','digital marketing for coaching institutes'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Coaching Institute Marketing Agency in Jaipur — Growth Escalators', description: 'Course-level paid media, demo funnels, follow-up systems and admission-focused measurement for Jaipur coaching institutes and EdTech teams.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Coaching Institute Marketing Agency in Jaipur',
  breadcrumbName: 'Coaching Institute Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for coaching institutes, test-prep centres and EdTech teams, focused on qualified admission demand and conversion journeys.',
  serviceType: 'Education Marketing',
  knowsAbout: ['Education Marketing', 'Coaching Institute Marketing', 'EdTech Marketing', 'Lead Generation', 'Performance Marketing'],
})

export default function CoachingJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
