import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/website-development-company-jaipur'

export const metadata: Metadata = {
  title: 'Website Development Company in Jaipur',
  description:
    'Jaipur website development company building fast, SEO-ready, conversion-focused websites and ecommerce experiences with analytics, migration planning and clear ownership. Get a free website audit.',
  keywords: [
    'website development company in jaipur',
    'website development company jaipur',
    'web development company jaipur',
    'website design company in jaipur',
    'website designing company in jaipur',
    'best website development company in jaipur',
    'ecommerce website development jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Website Development Company in Jaipur — Growth Escalators',
    description: 'Fast, SEO-ready, conversion-focused websites and ecommerce experiences for Jaipur businesses with clear ownership and migration planning.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Website Development Company in Jaipur',
  breadcrumbName: 'Website Development Company in Jaipur',
  description: 'Website development company in Jaipur building conversion-focused websites, ecommerce experiences, landing pages and technical SEO foundations.',
  serviceType: 'Website Development',
  knowsAbout: ['Website Development', 'Web Design', 'Ecommerce Development', 'Landing Pages', 'Technical SEO', 'Conversion Rate Optimisation'],
})

export default function WebsiteJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
