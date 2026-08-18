'use client'

import { useState } from 'react'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import { trackLead } from '@/lib/analytics'
import styles from '@/components/phase2/Phase2Core.module.css'

type Status='idle'|'submitting'|'success'|'error'
const SERVICES=['Performance Ads','Funnels & Automation','Web & Software','Social Media Marketing','Branding & Identity','SEO & AI Growth','Staffing & Recruiting']
const BUDGETS=['Under ₹50K / $1k','₹50K–2L / $1k–$5k','₹2L–10L / $5k–$15k','₹10L+ / $15k+']

export default function ContactPage(){
  const [status,setStatus]=useState<Status>('idle')
  const [error,setError]=useState('')

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus('submitting'); setError('')
    const form=e.currentTarget; const fd=new FormData(form); const fields:Record<string,string>={source:'Contact Page'}
    fd.forEach((v,k)=>fields[k]=String(v))
    try{
      const res=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(fields)})
      if(!res.ok){const body=await res.json().catch(()=>({}));throw new Error(body.error||`Server returned ${res.status}`)}
      trackLead('form',{source:'Contact Page'}); form.reset(); setStatus('success')
    }catch(err){setError((err as Error).message||'Something went wrong');setStatus('error')}
  }

  return <>
    <Navbar />
    <main className={styles.page}>
      <Phase2Motion />
      <section className={`${styles.section} ${styles.cream}`}>
        <div className={`${styles.shell} ${styles.contactGrid}`}>
          <div className={styles.contactCopy}>
            <p className={styles.eyebrow} data-p2-hero>Get in touch · Jaipur, India</p>
            <h1 data-p2-hero>Architect your<br/>next growth move.</h1>
            <p data-p2-hero>Tell us what you are trying to grow, what is getting in the way, and where you need help. A real strategist reviews the brief and gets back to you.</p>
            <div className={styles.channels} data-p2-reveal>
              <a className={styles.channel} href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" onClick={()=>trackLead('whatsapp')}><div>WhatsApp<small>Fastest route for a quick conversation</small></div><span>↗</span></a>
              <a className={styles.channel} href="tel:+917733888883" onClick={()=>trackLead('call')}><div>+91-7733888883<small>Mon–Sat · Jaipur, India</small></div><span>↗</span></a>
              <a className={styles.channel} href="mailto:jatin@growthescalators.com" onClick={()=>trackLead('email')}><div>jatin@growthescalators.com<small>Project briefs, partnerships and enquiries</small></div><span>↗</span></a>
              <a className={styles.channel} href="https://cal.com/growth-escalators/discovery-call" target="_blank" rel="noopener noreferrer" onClick={()=>trackLead('booking')}><div>Book a discovery call<small>Choose a time that works for you</small></div><span>↗</span></a>
            </div>
            <div className={styles.office} data-p2-reveal><h3>Growth Escalators · Jaipur</h3><p>264/103-104, Sector 26, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033, India</p><div className={styles.map}><iframe title="Growth Escalators office map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d75.83!3d26.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR3Jvd3RoIEVzY2FsYXRvcnM!5e0!3m2!1sen!2sin" /></div></div>
          </div>

          <div className={styles.formCard} id="book" data-p2-card>
            <p className={styles.eyebrow}>Start with the constraint</p><h2>Tell us where growth is stuck.</h2>
            {status==='success'?<div><h2>We&apos;re on it.</h2><p>Thanks — we&apos;ll review the details and reply within one business day.</p></div>:
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.fieldGrid}><Field name="name" label="Full name" required/><Field name="phone" label="WhatsApp / Phone" required type="tel"/></div>
              <div className={styles.fieldGrid}><Field name="email" label="Work email" required type="email"/><Field name="company" label="Business / website"/></div>
              <div className={styles.fieldGrid}><Select name="service" label="I need help with" options={SERVICES}/><Select name="budget" label="Monthly budget" options={BUDGETS}/></div>
              <label className={styles.field}><span>What are you trying to solve?</span><textarea className={`${styles.control} ${styles.textarea}`} name="message" placeholder="A little context helps us make the first reply useful." /></label>
              <button className={styles.submit} disabled={status==='submitting'}>{status==='submitting'?'Sending…':'Send my brief →'}</button>
              {status==='error'&&<p role="alert">Couldn&apos;t send{error?` (${error})`:''}. Email us at <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.</p>}
            </form>}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.white}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow} data-p2-reveal>What happens next</p><h2 data-p2-reveal>No pressure.<br/>Clear next step.</h2></div><p data-p2-reveal>The first conversation is for fit and clarity. We review the brief, identify the likely constraint, and decide whether a deeper audit or specialist conversation is useful.</p></div>
          <div className={styles.process}>{[['01','You send the brief','Form, WhatsApp, email or call — use whichever is easiest.'],['02','A strategist reviews it','Your context is read by a real person before the response.'],['03','We map the next move','If there is a fit, we identify the most useful next step and the right owner.'],['04','You decide','No forced package. You choose whether to continue.']].map(([n,t,d])=><div className={styles.processStep} key={n} data-p2-card><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}</div>
        </div>
      </section>
    </main>
    <Footer /><BackToTop />
  </>
}

function Field({name,label,type='text',required}:{name:string;label:string;type?:string;required?:boolean}){return <label className={styles.field}><span>{label}{required?' *':''}</span><input className={styles.control} name={name} type={type} required={required} /></label>}
function Select({name,label,options}:{name:string;label:string;options:string[]}){return <label className={styles.field}><span>{label}</span><select className={styles.control} name={name} defaultValue=""><option value="" disabled>Select…</option>{options.map(o=><option key={o} value={o}>{o}</option>)}</select></label>}
