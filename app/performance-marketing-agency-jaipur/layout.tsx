import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/performance-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Jaipur',
  description:
    'Jaipur-based performance marketing agency connecting Meta Ads, Google Ads, creative, funnels, CRO and tracking around profitable acquisition. ₹10Cr+ ad spend managed. Book a free growth audit.',
  keywords: [
    'performance marketing agency in jaipur',
    'performance marketing agency jaipur',
    'best performance marketing agency in jaipur',
    'ppc agency jaipur',
    'meta ads agency jaipur',
    'google ads agency jaipur',
    'digital marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Performance Marketing Agency in Jaipur — Growth Escalators',
    description: 'Meta Ads, Google Ads, creative, funnels, CRO and tracking connected around profitable acquisition. ₹10Cr+ ad spend managed.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Performance Marketing Agency in Jaipur',
  breadcrumbName: 'Performance Marketing Agency in Jaipur',
  description: 'Performance marketing agency in Jaipur connecting Meta Ads, Google Ads, creative, funnels, CRO and measurement around commercial growth.',
  serviceType: 'Performance Marketing',
  knowsAbout: ['Meta Ads', 'Google Ads', 'Performance Marketing', 'Conversion Rate Optimisation', 'Marketing Analytics'],
})

export default function JaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
