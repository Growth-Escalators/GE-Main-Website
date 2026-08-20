'use client'

import { motion } from 'framer-motion'
import { trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import ui from './InternationalPhase2.module.css'
import type { EngagementModelsSectionContent } from '@/lib/content/international-landing/types'

export type EngagementModelsProps = { content: EngagementModelsSectionContent; eventPrefix: string; ctaHref?: string; id?: string }

export default function EngagementModels({ content, eventPrefix, ctaHref = '#lead-form', id = 'engagement-models' }: EngagementModelsProps) {
  return (
    <section id={id} aria-label="Engagement models" className={`${ui.section} ${ui.sectionAlt}`} style={{scrollMarginTop:80}}>
      <div className={ui.shell}>
        <div className={ui.sectionHead}><div><p className={ui.eyebrow}>{content.tag}</p><h2>{content.headline}</h2></div><p>Choose the operating model around the requirement, then keep the same screening discipline underneath it.</p></div>
        <div className={ui.models}>
          {content.models.map((model,index) => <motion.article className={ui.model} key={model.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.5,delay:index*.05}}><h3>{model.title}</h3><p>{model.body}</p><CtaButton href={ctaHref} label={model.ctaLabel || content.ctaLabel} variant="outline" onClick={() => trackLandingEvent(eventPrefix,'primary_cta_click',{location:`engagement_model_${index+1}`})}/></motion.article>)}
        </div>
      </div>
    </section>
  )
}
