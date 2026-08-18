import type { Metadata } from 'next'
import { jaipurServiceSchema } from '@/lib/seo/jaipurServiceSchema'

const PATH = '/interior-designer-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Interior Designer Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for interior designers, architects and design studios — portfolio-led content, local search, paid acquisition and lead nurture focused on qualified project enquiries.',
  keywords: ['interior designer marketing agency jaipur','interior design marketing jaipur','marketing for interior designers','architect marketing jaipur','interior design lead generation jaipur'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Interior Designer Marketing Agency in Jaipur — Growth Escalators', description: 'Portfolio-led content, local search, paid acquisition and lead nurture for qualified interior-design and architecture enquiries in Jaipur.', url: PATH, type: 'website' },
}

const SCHEMA = jaipurServiceSchema({
  path: PATH,
  name: 'Growth Escalators — Interior Designer Marketing Agency in Jaipur',
  breadcrumbName: 'Interior Designer Marketing Agency in Jaipur',
  description: 'Marketing agency in Jaipur for interior designers, architects and design studios, focused on portfolio-led demand and qualified project enquiries.',
  serviceType: 'Interior Design Marketing',
  knowsAbout: ['Interior Design Marketing', 'Lead Generation', 'Local SEO', 'Performance Marketing', 'Web Development'],
})

export default function InteriorJaipurLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
