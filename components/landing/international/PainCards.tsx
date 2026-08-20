'use client'

import { motion } from 'framer-motion'
import ui from './InternationalPhase2.module.css'
import type { PainSectionContent } from '@/lib/content/international-landing/types'

export type PainCardsProps = { content: PainSectionContent; id?: string }

export default function PainCards({ content, id }: PainCardsProps) {
  const { tag, headline, subhead, cards, footerNote } = content
  return (
    <section id={id} aria-label="The problem" className={ui.section}>
      <div className={ui.shell}>
        <div className={ui.sectionHead}>
          <div><p className={ui.eyebrow}>{tag}</p><h2>{headline}</h2></div>
          <p>{subhead}</p>
        </div>
        <div className={ui.cards4}>
          {cards.map((card,index) => <motion.article key={card.title} className={ui.ruleCard} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.5,delay:index*.05}}><span>{String(index+1).padStart(2,'0')}</span><h3>{card.title}</h3><p>{card.body}</p></motion.article>)}
        </div>
        {footerNote && <p style={{maxWidth:760,margin:'30px 0 0',fontSize:13,color:'#626677',lineHeight:1.65}}>{footerNote}</p>}
      </div>
    </section>
  )
}
