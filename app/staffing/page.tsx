import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import StaffingHubForm from '@/components/staffing/StaffingHubForm'
import styles from '@/components/staffing/StaffingMarketPage.module.css'

const MODELS = [
  { title: 'India permanent hiring', body: 'For full-time technology and digital roles where you want screened candidates for your internal team.' },
  { title: 'India contract / C2H', body: 'For projects that need flexible capacity, defined duration or a contract-to-hire path.' },
  { title: 'Offshore specialists', body: 'India-based resources working remotely with agreed overlap for UK, UAE, US-partner or Australian delivery requirements.' },
]

const SKILLS = [
  ['Enterprise', ['SAP', 'Salesforce', 'ServiceNow', 'Oracle', 'Dynamics 365']],
  ['Engineering', ['Java', '.NET', 'Python', 'React', 'Node.js', 'Full Stack']],
  ['Cloud & DevOps', ['AWS', 'Azure', 'Kubernetes', 'DevOps', 'SRE', 'Platform']],
  ['Data & AI', ['Data Engineering', 'Data Science', 'GenAI / ML', 'Power BI', 'Databases']],
  ['Quality', ['Automation QA', 'Selenium', 'Tosca', 'API Testing', 'Performance']],
  ['Digital', ['Performance Marketing', 'SEO', 'Design', 'Content', 'Ecommerce']],
] as const

export default function StaffingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>INDIA HIRING × OFFSHORE TECHNOLOGY CAPACITY</span>
                <h1>TECH TALENT.<em>WITHOUT THE HIRING DRAG.</em></h1>
                <p>Growth Escalators supports India-based permanent and contract hiring plus offshore technology requirements fulfilled from India. Share the JD, mandatory skills and delivery context; we turn it into a scorecard before profiles reach you.</p>
                <div className={styles.actions}><a className={styles.primary} href="#lead-form">Share a requirement ↗</a><a className={styles.secondary} href="#screening">See how we screen</a></div>
                <div className={styles.positioning}>For international requirements, our core model is <strong>offshore fulfilment from India</strong>. Local employment, payroll, visa or on-site staffing in another country is only offered where explicitly confirmed.</div>
              </div>
              <aside className={styles.pipeline}>
                <div className={styles.pipelineTop}><span>THE OPERATING MODEL</span><b>JD → SHORTLIST</b></div>
                <h2>A pipeline, not a pile of resumes.</h2>
                <div className={styles.pipelineSteps}>
                  {['Requirement + mandatory skills', 'Scorecard + sourcing plan', 'Technical / communication screening', 'Availability + terms confirmed', 'Relevant shortlist + client interview'].map((item, index) => <div key={item}><b>0{index + 1}</b><strong>{item}</strong><span>{index < 4 ? 'GE process' : 'Client decision'}</span></div>)}
                </div>
              </aside>
            </div>
            <div className={styles.trustRail}>
              <article><strong>48 hours</strong><p>Target turnaround for relevant profiles after mandatory requirements are confirmed.</p></article>
              <article><strong>Scorecard first</strong><p>Mandatory skills, relevant experience and availability are checked before submission.</p></article>
              <article><strong>One owner</strong><p>A dedicated recruitment contact coordinates the requirement and feedback loop.</p></article>
              <article><strong>India based</strong><p>Primary hiring market and the delivery base for our offshore fulfilment model.</p></article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>CHOOSE THE MODEL</span><h2>The hiring model should match the delivery problem.</h2></div><p>Permanent hiring, flexible India contracts and offshore capacity are different buying decisions. We keep them clear instead of forcing every requirement through one generic process.</p></div>
            <div className={styles.models}>{MODELS.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lavender}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>WHAT WE COVER</span><h2>From enterprise platforms to modern product teams.</h2></div><p>If the exact skill is not listed, send the JD. We confirm feasibility before promising delivery.</p></div>
            <div className={styles.skillGrid}>{SKILLS.map(([title, items]) => <article key={title}><h3>{title}</h3><div className={styles.chips}>{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="screening" className={`${styles.section} ${styles.dark}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>SCREENING</span><h2>What has to be true before we submit someone.</h2></div><p>The goal is fewer, more relevant conversations—not maximum CV volume.</p></div>
            <div className={styles.process}>{[
              ['01','Mandatory skills','Convert the JD into a scorecard: non-negotiable technologies, domain requirements and relevant experience.'],
              ['02','Evidence','Check recent projects and responsibilities against the skills the role actually requires.'],
              ['03','Human fit','Communication, availability, notice period and working-hour expectations are confirmed before submission.'],
              ['04','Shortlist','You receive profiles with context and our screening notes so the interview starts further down the funnel.'],
            ].map(([n,t,b]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>OFFSHORE MARKETS</span><h2>One India delivery base. Market-specific expectations.</h2></div><p>Working hours, partner protection, fields and engagement context change by market, so each destination has its own detailed page.</p></div>
            <div className={styles.cards}>
              <article><span className={styles.eyebrow}>UK</span><h3>UK teams</h3><p>India-based offshore specialists with agreed UK working-hour overlap.</p><Link href="/uk-offshore-tech-resources">Explore UK fulfilment ↗</Link></article>
              <article><span className={styles.eyebrow}>UAE</span><h3>UAE teams</h3><p>India-based offshore technology capacity aligned to UAE delivery requirements.</p><Link href="/uae-offshore-tech-resources">Explore UAE fulfilment ↗</Link></article>
              <article><span className={styles.eyebrow}>US</span><h3>US partner fulfilment</h3><p>Offshore fulfilment for US staffing/MSP/consulting partners—not local W-2 payroll or visa staffing.</p><Link href="/us-tech-staffing-fulfilment">Explore US partner fulfilment ↗</Link></article>
              <article><span className={styles.eyebrow}>AUSTRALIA</span><h3>Australian teams</h3><p>India-based resources with role-specific working-hour alignment.</p><Link href="/australia-offshore-tech-resources">Explore Australia fulfilment ↗</Link></article>
            </div>
          </div>
        </section>

        <section id="lead-form" className={`${styles.section} ${styles.cream}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>SHARE THE JD</span><h2>Tell us the role that is slowing delivery down.</h2></div><p>Give us the mandatory skills, engagement model, headcount, budget context and start timeline. We’ll confirm feasibility before sending noise.</p></div>
            <StaffingHubForm />
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
