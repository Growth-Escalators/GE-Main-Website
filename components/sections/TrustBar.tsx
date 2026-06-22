'use client'

const BRANDS = [
  'Paraiso', 'Elixzor', 'Dr. Dubay', 'SN Herbals',
  'Odra Organics', 'Cklakart', 'Credo World',
]

/* Logo trust bar — continuous marquee of brand wordmarks on warm off-white.
   The track is duplicated and animated translateX(-50%) to give a seamless loop.
   Hover pauses the animation so users can read individual names. */
export default function TrustBar() {
  // Double the array for the marquee seam.
  const track = [...BRANDS, ...BRANDS]

  return (
    <section
      style={{
        borderTop: '1px solid var(--border-hair)',
        borderBottom: '1px solid var(--border-hair)',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-x" style={{ padding: '30px clamp(20px, 4vw, 40px)' }}>
        <div
          className="flex items-center"
          style={{ gap: 'clamp(16px, 3vw, 40px)', flexDirection: 'column' as const }}
        >
          <span
            style={{
              fontSize: 12, fontWeight: 800, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
              textAlign: 'center',
            }}
          >
            Trusted by growing brands
          </span>

          <div className="trust-marquee" style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
            {/* edge fades */}
            <span aria-hidden className="trust-fade-l" />
            <span aria-hidden className="trust-fade-r" />

            <div className="trust-track">
              {track.map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="trust-brand"
                  style={{
                    fontWeight: 800, fontSize: 17, color: '#b9b9cb',
                    letterSpacing: '-0.01em',
                    transition: 'color .25s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-marquee:hover .trust-track { animation-play-state: paused; }
        .trust-track {
          display: inline-flex;
          gap: 56px;
          padding-right: 56px;
          animation: trustScroll 28s linear infinite;
          will-change: transform;
        }
        :global(.trust-brand:hover) { color: var(--text-primary) !important; }
        .trust-fade-l, .trust-fade-r {
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          z-index: 2;
          pointer-events: none;
        }
        .trust-fade-l { left: 0;  background: linear-gradient(90deg,  var(--bg-secondary), transparent); }
        .trust-fade-r { right: 0; background: linear-gradient(270deg, var(--bg-secondary), transparent); }
        @keyframes trustScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-track { animation: none; flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
