import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/linkedin-marketing-agency'

export const metadata: Metadata = {
  title: 'LinkedIn Marketing Agency in India',
  description:
    'LinkedIn marketing agency for India — organic authority + LinkedIn Ads + founder ghostwriting. Real result: 0→18 qualified leads/month. Free audit.',
  keywords: [
    'linkedin marketing agency india',
    'linkedin marketing agency',
    'linkedin lead generation agency',
    'linkedin ads agency india',
    'linkedin ghostwriting agency',
    'linkedin personal branding agency',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'LinkedIn Marketing Agency in India — Growth Escalators',
    description:
      'Organic LinkedIn authority, LinkedIn Ads, and founder ghostwriting — run as one system. Book a free LinkedIn audit.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node linked to the global
   #organization graph (app/layout.tsx). Server-rendered so AI crawlers see it
   in raw HTML. No PostalAddress / local NAP — this page targets all of India,
   not a single city (contrast with /real-estate-marketing-agency-jaipur). */
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
      description:
        'LinkedIn marketing for founders and executives — organic authority content, LinkedIn Ads, ghostwriting, and social-selling outreach run as one system.',
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
