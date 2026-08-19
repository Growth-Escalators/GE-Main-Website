import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import LegalDocument from '@/components/legal/LegalDocument'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Growth Escalators collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

const sections = [
  {
    title: 'Information Collected',
    body: (
      <p>
        We may collect information you provide, including your name, address, telephone number, and email address, as
        well as data about your use of this website. Additional information may be collected if required to process
        your request, as indicated on the website.
      </p>
    ),
  },
  {
    title: 'Information Use',
    body: (
      <p>
        We use the information collected primarily to process the purpose for which you visited the website and to
        enhance your experience. All reasonable precautions are taken to prevent unauthorised access to this
        information.
      </p>
    ),
  },
  {
    title: 'Cookies',
    body: (
      <p>
        Our website uses cookies to enhance your browsing experience by storing small amounts of information on your
        device. You can disable cookies in your browser settings; however, this may affect some functionalities of the
        website.
      </p>
    ),
  },
  {
    title: 'Disclosing Information',
    body: (
      <p>
        We do not share your personal information with third parties unless you give us permission. We may use your
        information to contact you and share updates related to Growth Escalators. You can opt out of our
        communications at any time.
      </p>
    ),
  },
  {
    title: 'Changes to this Policy',
    body: (
      <p>
        We may update this Privacy Policy periodically, and all changes will be posted on this page. We encourage you
        to review this page regularly.
      </p>
    ),
  },
  {
    title: 'Contact Us',
    body: (
      <p>
        If you have questions about this policy or how information is handled, contact us at{' '}
        <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.
      </p>
    ),
  },
]

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy — Growth Escalators',
    url: 'https://www.growthescalators.com/privacy-policy',
    isPartOf: { '@type': 'WebSite', name: 'Growth Escalators', url: 'https://www.growthescalators.com' },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <JsonLd />
      <LegalDocument
        eyebrow="Legal / Privacy"
        title="Privacy Policy"
        intro="A plain-language record of how information submitted through Growth Escalators' website may be collected, used and protected."
        lastUpdated="28 May 2026"
        sections={sections}
      />
      <Footer />
    </>
  )
}
