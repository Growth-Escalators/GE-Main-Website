import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Marketing for Developers & Builders',
  description:
    'Real estate marketing for developers and builders focused on qualified buyer demand, declared project-fit signals, landing pages, CRM nurture, site visits and booking feedback. Book a free project audit.',
  alternates: { canonical: '/real-estate' },
  openGraph: {
    title: 'Real Estate Marketing — Growth Escalators',
    description: 'Qualified buyer demand, project-fit signals, CRM nurture, site visits and booking feedback for real estate developers and builders.',
    url: '/real-estate',
    type: 'website',
  },
}

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
