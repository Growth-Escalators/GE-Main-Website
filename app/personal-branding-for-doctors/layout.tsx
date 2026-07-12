import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/personal-branding-for-doctors'

export const metadata: Metadata = {
  title: 'Personal Branding for Doctors — LinkedIn & Media',
  description:
    'Personal branding for doctors — LinkedIn ghostwriting & thought leadership. Real doctor: 0 to 8,200 LinkedIn followers, 12 consults/month.',
  keywords: [
    'personal branding for doctors',
    'linkedin for doctors',
    'how to become a kol doctor',
    'doctor personal brand agency',
    'linkedin ghostwriting for doctors',
    'physician personal branding',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Personal Branding for Doctors — Growth Escalators',
    description:
      'LinkedIn ghostwriting, thought leadership, and media positioning for physicians. Real doctor: 0 to 8,200 LinkedIn followers, 12 inbound consults/month.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node (no address / no fake city;
   this targets individual physicians anywhere in India, not a clinic in a
   specific city), linked to the global #organization graph
   (app/layout.tsx). Server-rendered so AI crawlers see it in raw HTML. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Personal Branding for Doctors — Growth Escalators',
      serviceType: 'Personal Branding for Doctors',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Personal branding for individual physicians and surgeons across India — LinkedIn positioning, ghostwritten thought-leadership content, media and speaking pipeline, inbound consult funnels.',
      url: `${SITE}${PATH}`,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Personal Branding for Doctors', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function PersonalBrandingDoctorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
