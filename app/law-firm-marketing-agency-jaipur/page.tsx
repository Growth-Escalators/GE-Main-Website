import type { Metadata } from 'next'
import IndustryLandingPage from '@/components/landing/IndustryLandingPage'
import { LAW_FIRM_JAIPUR_CONTENT } from '@/lib/restoredLocalSeoContent'

const SITE = 'https://www.growthescalators.com'
const PATH = '/law-firm-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Law Firm Marketing Agency in Jaipur',
  description:
    'Compliance-aware digital growth for Jaipur law firms and professional practices: website UX, SEO, local discovery, thought leadership, LinkedIn and enquiry tracking. Free visibility audit.',
  keywords: [
    'law firm marketing agency jaipur',
    'law firm seo jaipur',
    'legal marketing agency jaipur',
    'law firm website jaipur',
    'professional services marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Law Firm Marketing Agency in Jaipur — Growth Escalators',
    description: 'Credibility-first SEO, website, content and enquiry systems for Jaipur law firms and professional-services practices.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Law Firm Marketing Agency in Jaipur',
      serviceType: 'Professional Services Digital Marketing',
      url: `${SITE}${PATH}`,
      description: 'Compliance-aware website, SEO, local discovery, thought-leadership and enquiry measurement support for Jaipur law firms and professional practices.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Jaipur' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Law Firm Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function LawFirmMarketingJaipurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <IndustryLandingPage content={LAW_FIRM_JAIPUR_CONTENT} />
    </>
  )
}
