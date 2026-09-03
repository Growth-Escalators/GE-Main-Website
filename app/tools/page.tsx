import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import { GROWTH_TOOL_IDS, GROWTH_TOOLS } from '@/lib/growthTools'
import styles from './tools.module.css'

export const metadata: Metadata = {
  title: 'Free Growth Tools — D2C Calculators & Scorecards',
  description: 'Practical D2C growth calculators and scorecards for unit economics, paid media budgeting, agency evaluation and Shopify conversion improvement.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Free Growth Tools — Growth Escalators',
    description: 'Useful calculators and scorecards built to make better D2C growth decisions.',
    url: '/tools',
    type: 'website',
  },
}

export default function ToolsIndexPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>GE / Growth Tools</p>
                <h1>Useful before<br />you hire us.</h1>
              </div>
              <div className={styles.heroAside}>
                <p>
                  Calculators and decision tools built around the questions founders actually need to answer: can we afford to scale, what should we spend, where is the store leaking, and how do we evaluate an agency properly?
                </p>
                <strong>No public GE service pricing · No forced consultation</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.library}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.eyebrow}>D2C / Ecommerce · V1</p>
                <h2>Start with the decision<br />you need to make.</h2>
              </div>
              <p>
                Use the tool first. You can see the working result before giving us an email. If you choose to keep the analysis, we send exactly what you requested.
              </p>
            </div>

            <div className={styles.grid}>
              {GROWTH_TOOL_IDS.map((id, index) => {
                const tool = GROWTH_TOOLS[id]
                return (
                  <Link key={id} href={`/tools/${id}`} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span>{tool.eyebrow}</span>
                      <strong>{String(index + 1).padStart(2, '0')} / 04</strong>
                    </div>
                    <div>
                      <h3>{tool.shortTitle}</h3>
                      <p>{tool.description}</p>
                    </div>
                    <div className={styles.cardBottom}>
                      <span>{tool.intentCluster.replace(/-/g, ' ')}</span>
                      <span>{tool.ctaLabel} ↗</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
