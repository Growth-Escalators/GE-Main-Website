import ui from './InternationalPhase2.module.css'
import type { PipelineStep } from '@/lib/content/international-landing/types'

export type ScreeningPipelineProps = {
  cardTitle: string
  cardBadge: string
  steps: PipelineStep[]
}

export default function ScreeningPipeline({ cardTitle, cardBadge, steps }: ScreeningPipelineProps) {
  return (
    <div className={ui.pipeline}>
      <div className={ui.pipelineHead}><strong>{cardTitle}</strong><span>{cardBadge}</span></div>
      <div className={ui.pipelineSteps}>
        {steps.map((step, index) => (
          <div className={ui.pipelineStep} key={step.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step.label}</strong>
            <p>{index === steps.length - 1 ? 'Ready for the next client decision.' : 'Validated before the next gate.'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
