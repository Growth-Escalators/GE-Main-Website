import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire the Best Tech Talent',
  description:
    'Hire pre-screened technology talent through Growth Escalators. India-based developers, cloud, data, QA, enterprise software and niche tech specialists for permanent, contract and C2H requirements.',
  keywords: [
    'hire tech talent India',
    'technology staffing company India',
    'IT staffing agency India',
    'hire developers India',
    'contract tech talent India',
    'pre-screened technology talent',
  ],
  alternates: { canonical: '/staffing' },
  openGraph: {
    title: 'Hire the Best Tech Talent — Growth Escalators',
    description:
      'Pre-screened India-based technology talent for permanent, contract and C2H requirements.',
    url: 'https://www.growthescalators.com/staffing',
  },
}

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
