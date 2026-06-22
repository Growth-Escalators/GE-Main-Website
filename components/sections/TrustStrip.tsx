'use client'

import { Star } from 'lucide-react'

/* Top dark strip — first thing every visitor sees.
   Desktop: stars + reviews on left, certifications on right.
   Mobile: centered, just stars + reviews. */
export default function TrustStrip() {
  return (
    <div style={{ background: 'var(--bg-dark)', color: '#fff' }} aria-label="Trust signals">
      {/* Desktop strip */}
      <div
        className="hidden md:flex container-x items-center justify-between"
        style={{ padding: '9px clamp(20px, 4vw, 40px)', fontSize: 12.5 }}
      >
        <div className="flex items-center gap-2" style={{ color: '#cfcfe0' }}>
          <span className="flex" aria-label="4.9 out of 5 stars" style={{ color: 'var(--gold)' }}>
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={13} fill="currentColor" stroke="none" />
            ))}
          </span>
          <span style={{ fontWeight: 600 }}>4.9 / 5 across 187+ Google reviews</span>
        </div>
        <div className="flex items-center" style={{ gap: 22, color: 'var(--text-on-dark-mute)', fontWeight: 600 }}>
          <span>Meta &amp; Google Ads Certified</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>10,000+ campaigns run</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Jaipur, India</span>
        </div>
      </div>

      {/* Mobile strip */}
      <div
        className="md:hidden flex items-center justify-center gap-2"
        style={{ padding: '8px 16px', fontSize: 11.5, color: '#cfcfe0' }}
      >
        <span className="flex" style={{ color: 'var(--gold)' }}>
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} size={11} fill="currentColor" stroke="none" />
          ))}
        </span>
        <span style={{ fontWeight: 600 }}>4.9/5 · 187+ Google reviews</span>
      </div>
    </div>
  )
}
