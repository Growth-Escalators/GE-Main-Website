'use client'

import ui from './InternationalPhase2.module.css'
import type { WorkingHoursSectionContent } from '@/lib/content/international-landing/types'

export type WorkingHoursAlignmentProps = { content: WorkingHoursSectionContent; id?: string }

export default function WorkingHoursAlignment({ content, id = 'working-hours' }: WorkingHoursAlignmentProps) {
  const { tag, headline, subhead, visualVariant, overlapBar, zones, zoneCaveat, cautionNote, bullets } = content
  return (
    <section id={id} aria-label="Working-hour alignment" className={`${ui.section} ${ui.sectionAlt}`} style={{scrollMarginTop:80}}>
      <div className={`${ui.shell} ${ui.hours}`}>
        <div>
          <p className={ui.eyebrow}>{tag}</p>
          <div className={ui.sectionHead} style={{display:'block',marginBottom:0}}><div><h2>{headline}</h2></div></div>
          {subhead && <p style={{maxWidth:620,margin:'24px 0 0',color:'#626677',fontSize:14,lineHeight:1.65}}>{subhead}</p>}
        </div>
        <div className={ui.hoursVisual}>
          <h3>{visualVariant === 'multi-zone-note' ? 'Timezone alignment' : 'Working-hours fit'}</h3>
          {visualVariant === 'overlap-bar' && overlapBar && <><div className={ui.hoursRow}><span>{overlapBar.marketLabel}</span><strong>{overlapBar.overlapHoursLabel}</strong></div>{overlapBar.note && <div className={ui.hoursRow}><span>Note</span><strong>{overlapBar.note}</strong></div>}</>}
          {visualVariant === 'multi-zone-note' && zones && <>{zones.map((zone)=><div className={ui.hoursRow} key={zone.zone}><span>{zone.zone}</span><strong>{zone.note}</strong></div>)}{zoneCaveat && <div className={ui.hoursRow}><span>Caveat</span><strong>{zoneCaveat}</strong></div>}</>}
          {visualVariant === 'flexible-note' && <>{cautionNote && <div className={ui.hoursRow}><span>Alignment</span><strong>{cautionNote}</strong></div>}{bullets?.map((bullet,index)=><div className={ui.hoursRow} key={bullet}><span>{String(index+1).padStart(2,'0')}</span><strong>{bullet}</strong></div>)}</>}
        </div>
      </div>
    </section>
  )
}
