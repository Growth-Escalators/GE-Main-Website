import type { PipelineStep } from '@/lib/content/international-landing/types'

/**
 * The "Requirement received → … → Client interview" pipeline visual used in
 * the Hero's right-hand card. Lightweight, accessible HTML/CSS (a vertical
 * list with a connecting rule) — no image, no heavy animation, per the
 * project's visual-system brief. Generalized from the UK hero's original
 * inline implementation; every market reuses this with its own step labels.
 */
export type ScreeningPipelineProps = {
  cardTitle: string
  cardBadge: string
  steps: PipelineStep[]
}

export default function ScreeningPipeline({ cardTitle, cardBadge, steps }: ScreeningPipelineProps) {
  return (
    <div
      style={{
        background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 22,
        boxShadow: '0 30px 70px rgba(17,18,26,0.10)', padding: 'clamp(20px, 3vw, 26px)',
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-primary)' }}>{cardTitle}</div>
        <span
          style={{
            fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
            background: 'rgba(17,18,26,0.05)', padding: '4px 10px', borderRadius: 999,
          }}
        >
          {cardBadge}
        </span>
      </div>
      <div className="flex flex-col" style={{ gap: 0 }}>
        {steps.map((s, i) => {
          const Icon = s.icon
          const isLast = i === steps.length - 1
          return (
            <div key={s.label} className="flex items-start" style={{ gap: 14 }}>
              <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                    background: isLast ? 'linear-gradient(135deg, var(--orange), var(--orange-light))' : 'var(--bg-warm)',
                    color: isLast ? '#fff' : 'var(--orange)',
                  }}
                >
                  <Icon size={18} />
                </span>
                {!isLast && <span style={{ width: 2, flex: 1, minHeight: 22, background: 'var(--border-hair-2)', margin: '4px 0' }} aria-hidden />}
              </div>
              <div style={{ paddingBottom: isLast ? 0 : 22, paddingTop: 7 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{s.label}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
