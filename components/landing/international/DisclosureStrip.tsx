import { Linkedin } from 'lucide-react'
import type { DisclosureStripContent } from '@/lib/content/international-landing/types'

/**
 * Thin offer-specific disclosure strip that sits above the universal,
 * sitewide `<Footer />` (components/sections/Footer.tsx — reused as-is, not
 * rebuilt, since it already works identically inside or outside this page
 * family and already carries the verified address/phone/email/legal links).
 */
export type DisclosureStripProps = {
  content: DisclosureStripContent
}

export default function DisclosureStrip({ content }: DisclosureStripProps) {
  return (
    <div style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark-mute)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-x flex flex-col sm:flex-row items-start sm:items-center justify-between" style={{ padding: '18px clamp(20px,4vw,40px)', gap: 12, fontSize: 12.5, lineHeight: 1.6 }}>
        <p style={{ margin: 0, maxWidth: 680 }}>{content.text}</p>
        {content.linkedinUrl && (
          <a
            href={content.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-shrink-0"
            style={{ gap: 7, color: 'var(--text-on-dark-mute)' }}
          >
            <Linkedin size={15} />
            Growth Escalators on LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
