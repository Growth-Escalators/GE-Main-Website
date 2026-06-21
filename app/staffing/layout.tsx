import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Staffing & Recruiting — AI-Matched Tech & Marketing Talent',
  description:
    'Hire vetted tech & marketing talent, matched by AI. Growth Escalators sources and screens developers, designers and marketers from a deep talent pool — full-time or contract, remote-ready. We use the same calibre of people we build and grow our own clients with.',
  keywords: [
    'tech recruitment agency',
    'marketing staffing',
    'AI recruiting',
    'hire developers',
    'hire performance marketers',
    'contract tech talent',
    'remote hiring',
    'MarTech staffing',
  ],
  alternates: { canonical: '/staffing' },
  openGraph: {
    type: 'website',
    siteName: 'Growth Escalators',
    title: 'Staffing & Recruiting — AI-Matched Tech & Marketing Talent',
    description:
      'Vetted tech & marketing talent, matched by AI. Full-time or contract, remote-ready — sourced and screened by a team that does the work itself.',
    url: 'https://www.growthescalators.com/staffing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staffing & Recruiting — AI-Matched Tech & Marketing Talent',
    description:
      'Vetted tech & marketing talent, matched by AI. Full-time or contract, remote-ready.',
  },
}

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return children
}
