'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ServicesRefinement.module.css'

const SERVICES = [
  {
    n:'01', title:'Performance Marketing', href:'/performance-marketing-agency-jaipur',
    copy:'Meta Ads, Google Ads and full-funnel media connected to revenue, qualified demand and measurable acquisition.',
    outcome:'Increase profitable store revenue — not just traffic.', type:'performance',
  },
  {
    n:'02', title:'Funnels & Automation', href:'/contact',
    copy:'Landing journeys, CRM logic, WhatsApp and lifecycle automation designed to reduce leakage between click, lead and sale.',
    outcome:'Turn attention into conversion, repeat purchase and loyalty.', type:'funnels',
  },
  {
    n:'03', title:'Web & Commerce', href:'/website-development-company-jaipur',
    copy:'Conversion-led websites, Shopify experiences and Next.js builds that connect acquisition with a faster, clearer buying journey.',
    outcome:'Build the path from product discovery to checkout around conversion.', type:'commerce',
  },
  {
    n:'04', title:'Creative & Social', href:'/portfolio',
    copy:'Creative systems, campaign concepts, social content and production built around customer insight rather than posting volume.',
    outcome:'Test more useful ideas — offers, proof, product, pain and desire.', type:'creative',
  },
  {
    n:'05', title:'SEO & Organic', href:'/services',
    copy:'Technical SEO, content architecture and search-led authority that help the right pages earn sustained discovery.',
    outcome:'Move commercially useful pages upward while compounding organic demand.', type:'seo',
  },
  {
    n:'06', title:'Software & AI', href:'/software-development-company-jaipur',
    copy:'Software development, AI automation and integrations that remove operational friction and connect growth workflows.',
    outcome:'Build the custom features your growth system actually needs.', type:'software',
  },
  {
    n:'07', title:'Technology Talent', href:'/staffing',
    copy:'India-based and offshore technology staffing support for teams that need screened delivery capacity around specific requirements.',
    outcome:'Move from requirement to relevant screened shortlist with less noise.', type:'talent',
  },
] as const

type ServiceType = typeof SERVICES[number]['type']

function ServiceVisual({ type }: { type: ServiceType }) {
  if(type === 'performance') return <div className={`${styles.visual} ${styles.performanceVisual}`}>
    <div className={styles.visualTop}><span>Commerce growth dashboard</span><b>LIVE SYSTEM</b></div>
    <div className={styles.metricStrip}><div><small>Revenue</small><strong>↗</strong></div><div><small>ROAS</small><strong>↗</strong></div><div><small>Orders</small><strong>↗</strong></div></div>
    <div className={styles.chart}><span className={styles.chartLabel}>Profitable growth</span><svg viewBox="0 0 520 180" role="img" aria-label="Illustrative upward commerce growth trend"><path d="M10 150 C90 143 105 126 160 130 S250 90 300 102 S385 54 510 25" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/><circle cx="510" cy="25" r="10" fill="currentColor"/></svg></div>
    <div className={styles.visualFooter}><span>Creative testing</span><span>Media efficiency</span><span>Conversion</span></div>
  </div>

  if(type === 'funnels') return <div className={`${styles.visual} ${styles.funnelVisual}`}>
    <div className={styles.visualTop}><span>Lifecycle funnel</span><b>AUTOMATED</b></div>
    <div className={styles.flow}>
      {['Traffic','Capture','Nurture','Convert','Loyalty'].map((x,i)=><div className={styles.flowNode} key={x}><span>0{i+1}</span><strong>{x}</strong>{i<4 && <b>→</b>}</div>)}
    </div>
    <div className={styles.flowNotes}><span>Landing page</span><span>WhatsApp / CRM</span><span>Offers</span><span>Repeat purchase</span></div>
  </div>

  if(type === 'commerce') return <div className={`${styles.visual} ${styles.commerceVisual}`}>
    <div className={styles.browser}><div className={styles.browserBar}><i/><i/><i/><span>store.com/product</span></div><div className={styles.browserBody}><div className={styles.productImage}>PRODUCT</div><div className={styles.productCopy}><small>Clear value proposition</small><strong>Product page built around the next action.</strong><span>Add to cart →</span></div></div></div>
    <div className={styles.phone}><div>Mobile first</div><strong>Fast.</strong><strong>Clear.</strong><strong>Buyable.</strong></div>
    <div className={styles.croBadge}>CRO + SHOPIFY + UX</div>
  </div>

  if(type === 'creative') return <div className={`${styles.visual} ${styles.creativeVisual}`}>
    <div className={`${styles.creativeCard} ${styles.c1}`}><small>ANGLE 01</small><strong>PAIN</strong><span>Problem-led static</span></div>
    <div className={`${styles.creativeCard} ${styles.c2}`}><small>ANGLE 02</small><strong>PROOF</strong><span>Outcome-led static</span></div>
    <div className={`${styles.creativeCard} ${styles.c3}`}><small>ANGLE 03</small><strong>OFFER</strong><span>Commercial hook</span></div>
    <div className={`${styles.creativeCard} ${styles.c4}`}><small>ANGLE 04</small><strong>PRODUCT</strong><span>Feature / desire</span></div>
  </div>

  if(type === 'seo') return <div className={`${styles.visual} ${styles.seoVisual}`}>
    <div className={styles.visualTop}><span>Organic visibility</span><b>COMPOUNDING</b></div>
    <div className={styles.rankingRows}><div><span>commercial keyword</span><b>12 → 5 → 2</b></div><div><span>category keyword</span><b>18 → 8 → 4</b></div><div><span>local intent</span><b>9 → 4 → 1</b></div></div>
    <div className={styles.seoChart}><svg viewBox="0 0 520 150" role="img" aria-label="Illustrative upward search ranking trend"><path d="M8 132 L80 124 L145 110 L220 104 L290 72 L355 66 L420 36 L512 19" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Technical SEO → Content → Authority → Rankings</span></div>
  </div>

  if(type === 'software') return <div className={`${styles.visual} ${styles.softwareVisual}`}>
    <div className={styles.visualTop}><span>Custom growth infrastructure</span><b>BUILT FOR YOU</b></div>
    <div className={styles.featureCore}>GROWTH<br/>SYSTEM</div>
    <div className={styles.featureGrid}>{['AI Agent','Custom Dashboard','CRM Sync','APIs','Lead Scoring','Automation'].map(x=><span key={x}>{x}</span>)}</div>
    <div className={styles.softwareFlow}>Intent <b>→</b> Qualify <b>→</b> Automate <b>→</b> Handoff</div>
  </div>

  return <div className={`${styles.visual} ${styles.talentVisual}`}>
    <div className={styles.visualTop}><span>Technology talent delivery</span><b>SCREENED</b></div>
    <div className={styles.talentFlow}>{['Requirement','Scorecard','Screen','Shortlist','Interview'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div>
    <div className={styles.candidateCard}><span>Mandatory skills</span><span>Relevant experience</span><span>Availability</span><span>Communication</span></div>
  </div>
}

export default function ServicesExperience(){
  const [active,setActive]=useState(0)
  return <div className={styles.serviceExperience}>
    {SERVICES.map((service,index)=>{
      const isActive=active===index
      return <article
        key={service.title}
        className={`${styles.serviceItem} ${isActive?styles.active:''}`}
        onMouseEnter={()=>setActive(index)}
        onFocusCapture={()=>setActive(index)}
      >
        <button className={styles.serviceHeader} type="button" aria-expanded={isActive} onClick={()=>setActive(isActive?-1:index)}>
          <span className={styles.serviceIndex}>{service.n}</span>
          <span className={styles.serviceTitle}>{service.title}</span>
          <span className={styles.serviceCopy}>{service.copy}</span>
          <span className={styles.servicePlus}>{isActive?'−':'+'}</span>
        </button>
        <div className={styles.servicePanel} aria-hidden={!isActive}>
          <div className={styles.serviceOutcome}>
            <span>What changes</span>
            <strong>{service.outcome}</strong>
            <Link href={service.href}>Explore this capability ↗</Link>
          </div>
          <ServiceVisual type={service.type}/>
        </div>
      </article>
    })}
  </div>
}
