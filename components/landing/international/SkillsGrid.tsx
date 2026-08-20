'use client'

import { motion } from 'framer-motion'
import ui from './InternationalPhase2.module.css'
import type { SkillsSectionContent } from '@/lib/content/international-landing/types'

export type SkillsGridProps = { content: SkillsSectionContent; id?: string }

export default function SkillsGrid({ content, id = 'skills' }: SkillsGridProps) {
  return (
    <section id={id} aria-label="Skills" className={ui.section} style={{scrollMarginTop:80}}>
      <div className={ui.shell}>
        <div className={ui.sectionHead}><div><p className={ui.eyebrow}>{content.tag}</p><h2>{content.headline}</h2></div>{content.footerNote && <p>{content.footerNote}</p>}</div>
        <div className={ui.cards3}>
          {content.categories.map((category,index) => <motion.article className={ui.tile} key={category.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.5,delay:(index%3)*.05}}><h3>{category.title}</h3><div className={ui.chips}>{category.items.map((item)=><span key={item}>{item}</span>)}</div></motion.article>)}
        </div>
      </div>
    </section>
  )
}
