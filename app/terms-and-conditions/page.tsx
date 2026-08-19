import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions governing use of growthescalators.com and Growth Escalators services.',
  alternates: { canonical: '/terms-and-conditions' },
  robots: { index: true, follow: false },
}

const sections = [
  {
    title: 'Acknowledgment',
    body: (
      <p>
        These Terms govern your use of the Service and the agreement between You and Growth Escalators. By accessing
        or using the Service, You agree to be bound by these Terms. You must be at least 18 years of age to use this
        Service.
      </p>
    ),
  },
  {
    title: 'Links to Other Websites',
    body: (
      <p>
        Our Service may contain links to third-party websites not owned or controlled by Growth Escalators. We assume
        no responsibility for the content, privacy policies, or practices of any third-party websites.
      </p>
    ),
  },
  {
    title: 'Termination',
    body: (
      <p>
        We may terminate or suspend your access to the Service immediately, without prior notice, for any reason,
        including if you breach these Terms.
      </p>
    ),
  },
  {
    title: 'Limitation of Liability',
    body: (
      <p>
        To the maximum extent permitted by law, Growth Escalators shall not be liable for any indirect, incidental, or
        consequential damages resulting from your use or inability to use the Service.
      </p>
    ),
  },
  {
    title: 'Governing Law',
    body: (
      <p>
        These Terms are governed by the laws of Rajasthan, India, without regard to conflict of law principles.
      </p>
    ),
  },
  {
    title: 'Changes to These Terms',
    body: (
      <p>
        Growth Escalators reserves the right to update or modify these Terms at any time. Your continued use of the
        Service after any changes constitutes acceptance of the new Terms.
      </p>
    ),
  },
  {
    title: 'Contact Us',
    body: (
      <p>
        If you have questions about these terms, contact us at{' '}
        <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.
      </p>
    ),
  },
]

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions — Growth Escalators',
    url: 'https://www.growthescalators.com/terms-and-conditions',
    isPartOf: { '@type': 'WebSite', name: 'Growth Escalators', url: 'https://www.growthescalators.com' },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <JsonLd />
      <LegalDocument
        eyebrow="Legal / Terms"
        title="Terms & Conditions"
        intro="The conditions that govern use of the Growth Escalators website and Service, presented in the same clear editorial system as the rest of the site."
        lastUpdated="28 May 2026"
        sections={sections}
      />
      <Footer />
    </>
  )
}
