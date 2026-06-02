import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Staffing — Hire Pre-Vetted Developers, Designers & AI/DevOps Engineers',
  description:
    'Staffing on your terms. Pre-vetted developers, designers, QA, and AI/DevOps engineers — remote-first, contract or permanent. Share your requirement and get a curated shortlist within days.',
  alternates: { canonical: '/staffing' },
  openGraph: {
    title: 'Tech Staffing — Growth Escalators',
    description:
      'Pre-vetted developers, designers, QA, and AI/DevOps engineers. Remote-first. Contract or permanent.',
    url: 'https://www.growthescalators.com/staffing',
  },
}

export default function StaffingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
