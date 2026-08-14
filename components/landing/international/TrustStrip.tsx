import { Check } from 'lucide-react'
import type { TrustStripContent } from '@/lib/content/international-landing/types'

/** Full-width dark trust-signal strip directly under the hero. */
export type TrustStripProps = {
  content: TrustStripContent
}

export default function TrustStrip({ content }: TrustStripProps) {
  return (
    <section aria-label="Trust signals" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ padding: 'clamp(22px, 4vw, 30px) clamp(20px, 4vw, 40px)', gap: 18 }}>
        {content.points.map((t) => (
          <div key={t.title} className="flex items-start" style={{ gap: 10 }}>
            <span
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,53,0.18)', color: 'var(--orange-mid)', marginTop: 1 }}
            >
              <Check size={13} strokeWidth={3} />
            </span>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: '#fff', lineHeight: 1.35 }}>{t.title}</div>
              <div style={{ fontSize: 12, color: 'var(--text-on-dark-mute)', marginTop: 2 }}>{t.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
