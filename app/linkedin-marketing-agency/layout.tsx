import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/linkedin-marketing-agency'

export const metadata: Metadata = {
  title: 'LinkedIn Marketing Agency in India',
  description:
    'LinkedIn marketing for founders and B2B teams in India — authority content, founder ghostwriting, LinkedIn Ads and social-selling workflows connected around qualified conversations.',
  keywords: ['linkedin marketing agency india','linkedin marketing agency','linkedin lead generation agency','linkedin ads agency india','linkedin ghostwriting agency','linkedin personal branding agency'],
  alternates: { canonical: PATH },
  openGraph: { title: 'LinkedIn Marketing Agency in India — Growth Escalators', description: 'Authority content, founder ghostwriting, LinkedIn Ads and social-selling workflows connected around qualified B2B conversations.', url: PATH, type: 'website' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'LinkedIn Marketing Agency',
      serviceType: 'LinkedIn Marketing',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description: 'LinkedIn marketing for founders and B2B teams across authority content, LinkedIn Ads, ghostwriting and social-selling workflows.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'LinkedIn Marketing Agency', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function LinkedInMarketingAgencyLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
