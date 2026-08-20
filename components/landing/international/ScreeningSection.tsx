'use client'

import { motion } from 'framer-motion'
import ui from './InternationalPhase2.module.css'
import type { ScreeningSectionContent } from '@/lib/content/international-landing/types'

export type ScreeningSummaryProps = { rows: { label: string; value: string }[]; label?: string; disclaimer?: string }

export function ScreeningSummary({ rows, label = 'Sample screening summary', disclaimer = 'Illustrative format only — not a real candidate.' }: ScreeningSummaryProps) {
  return (
    <div className={ui.summaryCard}>
      <span>{label}</span><p>{disclaimer}</p>
      {rows.map((row) => <div className={ui.summaryRow} key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}
    </div>
  )
}

export type ScreeningSectionProps = { content: ScreeningSectionContent; id?: string }

export default function ScreeningSection({ content, id = 'screening' }: ScreeningSectionProps) {
  return (
    <section id={id} aria-label="Screening methodology" className={ui.section} style={{scrollMarginTop:80}}>
      <div className={`${ui.shell} ${ui.summaryGrid}`}>
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.55}}>
          <p className={ui.eyebrow}>{content.tag}</p>
          <div className={ui.sectionHead} style={{display:'block',marginBottom:0}}><div><h2>{content.headline}</h2></div></div>
          <p style={{maxWidth:650,margin:'24px 0 0',color:'#626677',fontSize:14,lineHeight:1.65}}>{content.subhead}</p>
          <ol className={ui.gateList}>{content.gates.map((gate,index)=><li key={gate}><b>{String(index+1).padStart(2,'0')}</b><span>{gate}</span></li>)}</ol>
        </motion.div>
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.55,delay:.08}}>
          <ScreeningSummary rows={content.summary} label={content.summaryLabel} disclaimer={content.summaryDisclaimer}/>
        </motion.div>
      </div>
    </section>
  )
}
