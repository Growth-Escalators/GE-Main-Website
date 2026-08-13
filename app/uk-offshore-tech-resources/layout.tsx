import type { Metadata } from 'next'

export const metadata: Metadata = {
  // `title.absolute` bypasses the root layout's `%s — Growth Escalators` template —
  // without it the brand name gets appended twice, since this title already ends
  // with "| Growth Escalators" per the exact copy this page was briefed to use.
  title: { absolute: 'Offshore Tech Specialists for UK Teams | Growth Escalators' },
  description:
    'Receive screened India-based SAP, Salesforce, ServiceNow, DevOps, cloud, data and software engineering profiles within 48 hours.',
  alternates: { canonical: '/uk-offshore-tech-resources' },
  openGraph: {
    title: 'Offshore Tech Specialists for UK Teams | Growth Escalators',
    description:
      'Receive screened India-based SAP, Salesforce, ServiceNow, DevOps, cloud, data and software engineering profiles within 48 hours.',
    url: 'https://www.growthescalators.com/uk-offshore-tech-resources',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offshore Tech Specialists for UK Teams | Growth Escalators',
    description:
      'Receive screened India-based SAP, Salesforce, ServiceNow, DevOps, cloud, data and software engineering profiles within 48 hours.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function UKOffshoreTechResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
