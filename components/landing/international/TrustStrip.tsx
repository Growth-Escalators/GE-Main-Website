import ui from './InternationalPhase2.module.css'
import type { TrustStripContent } from '@/lib/content/international-landing/types'

export type TrustStripProps = { content: TrustStripContent }

export default function TrustStrip({ content }: TrustStripProps) {
  return (
    <section aria-label="Trust signals" className={ui.section} style={{paddingTop:0,paddingBottom:0}}>
      <div className={`${ui.shell} ${ui.trust}`}>
        {content.points.map((point,index)=><div className={ui.trustItem} key={point.title}><strong>{String(index+1).padStart(2,'0')}</strong><span>{point.title} · {point.body}</span></div>)}
      </div>
    </section>
  )
}
