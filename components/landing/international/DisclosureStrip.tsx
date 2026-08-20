import ui from './InternationalPhase2.module.css'
import type { DisclosureStripContent } from '@/lib/content/international-landing/types'

export type DisclosureStripProps = { content: DisclosureStripContent }

export default function DisclosureStrip({ content }: DisclosureStripProps) {
  return (
    <div className={ui.disclosure}>
      <div className={ui.disclosureInner}>
        <p style={{margin:0,maxWidth:920}}>{content.text}</p>
        {content.linkedinUrl && <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{display:'inline-block',marginTop:8,color:'#170653',fontWeight:800}}>Growth Escalators on LinkedIn ↗</a>}
      </div>
    </div>
  )
}
