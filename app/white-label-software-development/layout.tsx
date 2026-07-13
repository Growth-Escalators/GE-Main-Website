import type { Metadata } from 'next'
import './white-label.css'

export const metadata: Metadata = {
  title: 'White-Label Software & App Development',
  description:
    'Your silent engineering partner. We build production-grade multi-tenant SaaS, web & mobile apps, and AI automation under your brand — with live payments, deep integrations, and India-market compliance already shipped.',
  alternates: { canonical: '/white-label-software-development' },
  openGraph: {
    title: 'White-Label Software & App Development — Growth Escalators',
    description:
      'Production-grade SaaS, web & mobile apps, and AI automation, built under your brand. You keep the client; we write the code.',
    url: '/white-label-software-development',
    type: 'website',
  },
}

export default function WhiteLabelLayout({ children }: { children: React.ReactNode }) {
  return <div className="wl-root">{children}</div>
}
