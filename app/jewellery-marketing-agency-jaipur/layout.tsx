import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/jewellery-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Jewellery Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for jewellery brands and showrooms — ecommerce acquisition, creative testing, showroom demand, local search and conversion tracking connected around commercial outcomes.',
  keywords: ['jewellery marketing agency jaipur','jewellery digital marketing jaipur','jewellery brand marketing','jewellery social media agency jaipur','jewellery advertising jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Jewellery Marketing Agency in Jaipur — Growth Escalators', description: 'Ecommerce acquisition, creative testing, showroom demand, local search and conversion tracking for Jaipur jewellery brands.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Jewellery Marketing Agency in Jaipur',
  breadcrumbName: 'Jewellery Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for jewellery brands, showrooms and D2C jewellery labels, focused on ecommerce acquisition, creative, local demand and measurement.',
  serviceType: 'Jewellery Marketing',
  knowsAbout: ['Jewellery Marketing', 'D2C Marketing', 'Performance Marketing', 'Social Media Marketing', 'Local SEO'],
})

export default function JewelleryJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
