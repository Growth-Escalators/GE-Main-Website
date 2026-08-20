'use client'

import { useId, useState } from 'react'
import ui from './InternationalPhase2.module.css'
import type { FaqSectionContent } from '@/lib/content/international-landing/types'

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open,setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <div className={`${ui.faqItem} ${open ? ui.faqOpen : ''}`}>
      <button type="button" className={ui.faqButton} aria-expanded={open} aria-controls={panelId} onClick={()=>setOpen((value)=>!value)}><span>{q}</span><span className={ui.faqIcon} aria-hidden>+</span></button>
      <div id={panelId} className={ui.faqAnswer} hidden={!open}>{a}</div>
    </div>
  )
}

export function FaqPageJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null
  const schema = {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map((faq)=>({'@type':'Question',name:faq.q,acceptedAnswer:{'@type':'Answer',text:faq.a}}))}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
}

export type FaqAccordionProps = { content: FaqSectionContent; id?: string; defaultOpenIndex?: number }

export default function FaqAccordion({ content, id = 'faqs', defaultOpenIndex = 0 }: FaqAccordionProps) {
  return (
    <section id={id} aria-label="FAQ" className={`${ui.section} ${ui.sectionAlt}`} style={{scrollMarginTop:80}}>
      <div className={ui.shell}>
        <div className={ui.sectionHead}><div><p className={ui.eyebrow}>{content.tag}</p><h2>{content.headline}</h2></div><p>Clear answers on delivery, screening, engagement and how the offshore model works in practice.</p></div>
        <div className={ui.faq}>{content.faqs.map((faq,index)=><FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={index===defaultOpenIndex}/>)}</div>
      </div>
    </section>
  )
}
