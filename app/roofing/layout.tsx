import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Marketing for US Roofing Contractors — Growth Escalators',
  description:
    'More booked replacement jobs, lower cost per lead, and crews booked weeks out. AI-first performance marketing built for US roofing contractors — Google, Meta, LSA, and storm-restoration funnels.',
  openGraph: {
    title: 'AI-Powered Marketing for US Roofing Contractors — Growth Escalators',
    description:
      'AI-first performance marketing built for US roofing contractors. More booked replacements, lower cost per lead.',
    type: 'website',
  },
}

export default function RoofingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
