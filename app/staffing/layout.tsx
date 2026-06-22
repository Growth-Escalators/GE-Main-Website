import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Staffing & Recruiting — Tech & Marketing Talent',
  description:
    'AI-matched tech & marketing staffing. Vetted developers, designers, and marketers — full-time or contract, remote-ready. Get a free hiring audit from Growth Escalators.',
  alternates: { canonical: '/staffing' },
  openGraph: {
    title: 'AI Staffing & Recruiting — Growth Escalators',
    description:
      'AI-matched tech & marketing talent. Full-time or contract. Remote-ready. The same people we use for our own clients.',
    url: 'https://www.growthescalators.com/staffing',
  },
}

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
