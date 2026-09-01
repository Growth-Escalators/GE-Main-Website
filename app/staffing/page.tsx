'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import { trackLead } from '@/lib/analytics'
import styles from '@/components/phase2/Phase2Core.module.css'
import staffing from '@/components/phase2/StaffingPhase2.module.css'
import { WhatsAppConsentField } from '@/components/landing/WhatsAppConsent'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const PROBLEMS = [
  ['01', 'Slow hiring', 'Weeks disappear while important delivery work waits for the right person to join.'],
  ['02', 'Resume overload', 'A high-volume inbox transfers screening work back to your own team instead of reducing it.'],
  ['03', 'Weak role fit', 'Keyword matches can look convincing on paper while missing the actual tools, context and ownership the role needs.'],
  ['04', 'Candidate drop-off', 'Interest, notice period, location and interview readiness need active validation throughout the process.'],
] as const

const STEPS = [
  ['01', 'Map the requirement', 'We clarify must-have skills, relevant experience, work mode, location, budget, notice period and interview process.'],
  ['02', 'Source selectively', 'We search our India-based talent network and relevant channels instead of flooding the requirement with generic profiles.'],
  ['03', 'Screen the fit', 'AI helps with speed; human review checks technical relevance, availability, interest and practical alignment.'],
  ['04', 'Deliver + coordinate', 'You receive a focused shortlist with context. We coordinate interviews, follow-ups, feedback and joining status.'],
] as const

const ROLES = [
  { tag: 'Engineering', title: 'Cloud, DevOps & Software', body: 'Developers, architects, DevOps, platform, cloud, data and integration specialists.', skills: ['Java / .NET', 'Azure / AWS', 'Kubernetes', 'Data Engineering'] },
  { tag: 'Enterprise tech', title: 'Salesforce, SAP & ServiceNow', body: 'Specialist resources for enterprise platforms, architecture, implementation, QA and support.', skills: ['Salesforce', 'SAP', 'ServiceNow', 'Oracle'] },
  { tag: 'Digital', title: 'Product, QA & Marketing', body: 'Design, product, QA automation, performance marketing and growth operations talent.', skills: ['UI / UX', 'Automation QA', 'Performance', 'Marketing Ops'] },
] as const

const MODELS = [
  {
    tag: 'Permanent hiring', title: 'Build the long-term team.', body: 'For full-time roles where you want a screened candidate to join your organisation directly.', bullets: ['Focused shortlist instead of bulk profiles', 'Candidate interest and notice period validated', 'Interview coordination and follow-up', 'Commercials agreed before execution'],
  },
  {
    tag: 'Contract / C2H', title: 'Add capacity without waiting.', body: 'For project, short-notice and conversion-to-hire needs where speed and deployment readiness matter.', bullets: ['India-based and offshore delivery', 'Monthly commercial model', 'Short-notice resource focus', 'Ongoing availability and status tracking'],
  },
] as const

const PROOF = [
  ['India + offshore', 'Delivery model', 'Built around India-market hiring and offshore requirements rather than pretending one model fits every geography.'],
  ['Tech + digital', 'Specialisation', 'Engineering, enterprise platforms, data, QA, product and marketing roles can be screened within one operating workflow.'],
  ['Human reviewed', 'Quality control', 'Automation accelerates research and matching, but a person still owns relevance, availability and candidate readiness.'],
] as const

export default function StaffingPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: 'Staffing Hiring Audit' }
    data.forEach((value, key) => { fields[key] = String(value) })
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) })
      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.error || `Server returned ${response.status}`)
      }
      trackLead('form', { source: 'Staffing Hiring Audit' })
      form.reset()
      setStatus('success')
    } catch (err) {
      setError((err as Error).message || 'Something went wrong')
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Phase2Motion />

        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow} data-p2-hero>Technology staffing · India + offshore</p>
                <h1 data-p2-hero>Better fit.<br />Less noise.</h1>
              </div>
              <div className={styles.heroAside} data-p2-hero>
                <p>Share the requirement. Growth Escalators turns it into a focused sourcing and screening workflow across technology and digital roles — with candidate fit, availability and interview readiness checked before the profile reaches you.</p>
                <div className={styles.heroActions}>
                  <Link href="#book" className={styles.pill}>Start a hiring audit ↗</Link>
                  <Link href="#process" className={styles.pillLine}>See the process</Link>
                </div>
                <div className={staffing.pipeline}>
                  <div className={staffing.pipelineCard}><span>01 / Requirement</span><strong>Role mapped</strong></div>
                  <div className={staffing.pipelineCard}><span>02 / Screening</span><strong>Fit checked</strong></div>
                  <div className={staffing.pipelineCard}><span>03 / Delivery</span><strong>Shortlist ready</strong></div>
                </div>
              </div>
            </div>
            <div className={styles.heroRule}>
              {[['India','Primary talent market'],['Offshore','Delivery supported'],['Permanent','Hiring model'],['Contract / C2H','Flexible capacity']].map(([value,label]) => <div className={styles.heroStat} key={label} data-p2-hero><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.white}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><p className={styles.eyebrow} data-p2-reveal>The hiring problem</p><h2 data-p2-reveal>Volume is not<br />the same as fit.</h2></div>
              <p data-p2-reveal>The operating goal is simple: reduce the number of irrelevant conversations between an open requirement and an interview-ready candidate.</p>
            </div>
            <div className={staffing.problemGrid}>
              {PROBLEMS.map(([number,title,body]) => <article className={staffing.problem} key={number} data-p2-card><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="process" className={`${styles.section} ${styles.lavender}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><p className={styles.eyebrow} data-p2-reveal>How it works</p><h2 data-p2-reveal>A pipeline,<br />not a pile.</h2></div>
              <p data-p2-reveal>Every profile should arrive with enough context to make the next decision easier — not create another screening queue for your team.</p>
            </div>
            <div className={styles.process}>
              {STEPS.map(([number,title,body]) => <article className={styles.processStep} key={number} data-p2-card><span>{number}</span><strong>{title}</strong><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.white}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><p className={styles.eyebrow} data-p2-reveal>Roles we support</p><h2 data-p2-reveal>Specialist roles.<br />One workflow.</h2></div>
              <p data-p2-reveal>Requirements change quickly. The screening standard should not: relevant hands-on experience, practical fit, availability and a clear next step.</p>
            </div>
            <div className={staffing.roleGrid}>
              {ROLES.map((role) => <article className={staffing.role} key={role.title} data-p2-card><span>{role.tag}</span><h3>{role.title}</h3><p>{role.body}</p><ul>{role.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.dark}`}>
          <div className={styles.shell}>
            <div className={staffing.darkGrid}>
              <div className={staffing.darkCopy} data-p2-reveal>
                <p className={styles.eyebrow}>Technology helps. Judgement decides.</p>
                <h2>AI for speed.<br />Humans for fit.</h2>
                <p>Matching tools can surface candidates faster. They cannot replace checking whether somebody has done the relevant work, is actually interested, can join in the required window and is aligned to the location or work mode.</p>
              </div>
              <div className={staffing.darkList}>
                {[['01','Requirement-to-scorecard mapping'],['02','AI-assisted sourcing and ranking'],['03','Human technical relevance review'],['04','Interest, availability and interview validation']].map(([number,label]) => <div className={staffing.darkItem} key={number} data-p2-card><span>{number}</span><strong>{label}</strong></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.cream}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><p className={styles.eyebrow} data-p2-reveal>Engagement models</p><h2 data-p2-reveal>Hire for the<br />way you work.</h2></div>
              <p data-p2-reveal>Permanent, contract and C2H requirements have different economics and timelines. The sourcing workflow stays focused; the commercial structure changes with the engagement.</p>
            </div>
            <div className={staffing.models}>
              {MODELS.map((model,index) => <article className={`${staffing.model} ${index === 1 ? staffing.modelFeatured : ''}`} key={model.title} data-p2-card><span>{model.tag}</span><h3>{model.title}</h3><p>{model.body}</p><ul>{model.bullets.map((bullet) => <li key={bullet}>↳ {bullet}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.white}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><p className={styles.eyebrow} data-p2-reveal>Operating model</p><h2 data-p2-reveal>Built around<br />delivery reality.</h2></div>
              <div data-p2-reveal>
                <p>For international buyers, the dedicated market pages explain the offshore fulfilment model, screening process and engagement context in more detail.</p>
                <div className={staffing.international}>
                  <Link href="/uk-offshore-tech-resources">UK offshore ↗</Link>
                  <Link href="/uae-offshore-tech-resources">UAE offshore ↗</Link>
                  <Link href="/us-tech-staffing-fulfilment">US fulfilment ↗</Link>
                  <Link href="/australia-offshore-tech-resources">Australia offshore ↗</Link>
                </div>
              </div>
            </div>
            <div className={staffing.proofGrid}>
              {PROOF.map(([value,label,body]) => <article className={staffing.proof} key={label} data-p2-card><span>{label}</span><h3>{value}</h3><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="book" className={`${styles.section} ${styles.lavender}`}>
          <div className={`${styles.shell} ${staffing.formWrap}`}>
            <div className={staffing.formCopy} data-p2-reveal>
              <p className={styles.eyebrow}>Start with one requirement</p>
              <h2>Send the role.<br />We map the search.</h2>
              <p>Share the role, required skills, location or work mode, budget and expected joining timeline. We will use that context to decide whether the requirement fits our delivery model.</p>
            </div>
            <div className={staffing.formCard} data-p2-card>
              {status === 'success' ? <div><h2>Requirement received.</h2><p className={staffing.status}>We’ll review the brief and come back with the most useful next step.</p></div> :
              <form className={staffing.form} onSubmit={submit}>
                <div className={staffing.fieldGrid}><Field name="name" label="Your name" required /><Field name="company" label="Company" required /></div>
                <div className={staffing.fieldGrid}><Field name="email" label="Work email" type="email" required /><Field name="phone" label="Phone / WhatsApp" type="tel" /></div>
                <div className={staffing.fieldGrid}><Field name="role" label="Role / requirement" required /><Field name="location" label="Location / work mode" /></div>
                <label className={staffing.field}><span>Requirement details</span><textarea className={`${staffing.control} ${staffing.textarea}`} name="message" placeholder="Skills, experience, budget, notice period, interview process…" /></label>
                <WhatsAppConsentField />

                <button className={staffing.submit} disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send requirement →'}</button>
                {status === 'error' && <p className={staffing.status} role="alert">Couldn’t send{error ? ` (${error})` : ''}. Please use the contact page or email jatin@growthescalators.com.</p>}
              </form>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

function Field({ name, label, type = 'text', required }: { name: string; label: string; type?: string; required?: boolean }) {
  return <label className={staffing.field}><span>{label}{required ? ' *' : ''}</span><input className={staffing.control} name={name} type={type} required={required} /></label>
}
