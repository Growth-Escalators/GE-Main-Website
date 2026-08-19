import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'

export const metadata: Metadata = {
  title: 'White-Label Software & App Development for Agencies',
  description:
    'White-label software and app development for agencies and product teams. India-based delivery for SaaS, web and mobile applications, ecommerce, internal tools, integrations and AI-enabled workflows under your brand.',
  alternates: { canonical: '/white-label-software-development' },
  openGraph: {
    title: 'White-Label Software & App Development for Agencies — Growth Escalators',
    description:
      'A silent engineering partner for SaaS, web and mobile applications, ecommerce, internal tools, integrations and AI-enabled workflows. Your client relationship stays yours.',
    url: '/white-label-software-development',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'White-Label Software & App Development for Agencies — Growth Escalators',
    description: 'White-label software and app delivery under your brand, with clear scope, ownership and handover.',
  },
}

export default function WhiteLabelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
