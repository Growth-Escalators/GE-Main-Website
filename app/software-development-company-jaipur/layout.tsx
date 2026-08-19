import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/software-development-company-jaipur'

export const metadata: Metadata = {
  title: 'Software Development Company in Jaipur',
  description:
    'Jaipur software development company building custom SaaS, web and mobile products, integrations and AI automation with clear scope, QA and code ownership. Book a free product scoping call.',
  keywords: [
    'software development company in jaipur',
    'software development company jaipur',
    'custom software development jaipur',
    'app development company jaipur',
    'saas development company jaipur',
    'software company in jaipur',
    'mobile app development jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Software Development Company in Jaipur — Growth Escalators',
    description: 'Custom SaaS, web and mobile products, integrations and AI automation from a Jaipur-based product engineering team.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Software Development Company in Jaipur',
  breadcrumbName: 'Software Development Company in Jaipur',
  description: 'Software development company in Jaipur building custom SaaS, web and mobile applications, integrations and AI automation.',
  serviceType: 'Software Development',
  knowsAbout: ['Custom Software Development', 'SaaS Development', 'Web Applications', 'Mobile Applications', 'AI Automation', 'API Integrations'],
})

export default function SoftwareJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
