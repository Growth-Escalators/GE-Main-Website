'use client'

import { motion } from 'framer-motion'
import ui from './InternationalPhase2.module.css'
import type { ProcessSectionContent } from '@/lib/content/international-landing/types'

export type ProcessProps = { content: ProcessSectionContent; id?: string }

export default function Process({ content, id = 'how-it-works' }: ProcessProps) {
  return (
    <section id={id} aria-label="How it works" className={`${ui.section} ${ui.sectionAlt}`} style={{scrollMarginTop:80}}>
      <div className={ui.shell}>
        <div className={ui.sectionHead}><div><p className={ui.eyebrow}>{content.tag}</p><h2>{content.headline}</h2></div><p>Each stage exists to remove uncertainty before a profile reaches the next decision.</p></div>
        <div className={ui.cards4}>
          {content.steps.map((step,index) => <motion.article key={step.step} className={ui.ruleCard} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.5,delay:index*.05}}><span>{step.step}</span><h3>{step.title}</h3><p>{step.body}</p></motion.article>)}
        </div>
      </div>
    </section>
  )
}
