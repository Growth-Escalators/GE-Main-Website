import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/patient-acquisition-agency'

export const metadata: Metadata = {
  title: 'Patient Acquisition Agency for Doctors & Clinics',
  description:
    'Patient acquisition agency for clinics & doctors across India — booking funnels, treatment-level ads, no-show fixes. Real clinic: fully booked 3 weeks out.',
  keywords: [
    'patient acquisition agency',
    'how to get more patients',
    'medical appointment marketing',
    'patient acquisition marketing agency',
    'get more patients for my clinic',
    'doctor appointment marketing agency',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Patient Acquisition Agency for Doctors & Clinics — Growth Escalators',
    description:
      'Booking funnels, treatment-level ads, no-show reduction, and patient reactivation for clinics across India. Real clinic: fully booked 3 weeks out.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node (no address / no fake city;
   this page targets clinics anywhere in India), linked to the global
   #organization graph (app/layout.tsx). Server-rendered so AI crawlers see
   it in raw HTML. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Patient Acquisition Agency — Growth Escalators',
      serviceType: 'Patient Acquisition',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Patient acquisition for clinics and doctors across India — treatment-level Google and Meta ads, appointment-booking funnels, no-show reduction, and patient reactivation campaigns.',
      url: `${SITE}${PATH}`,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Patient Acquisition Agency', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function PatientAcquisitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
