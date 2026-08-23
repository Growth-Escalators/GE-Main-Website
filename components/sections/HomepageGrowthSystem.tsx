import Link from 'next/link'
import styles from './HomepageGrowthSystem.module.css'

const D2C_STAGES = [
  {
    number: '01',
    title: 'Acquire',
    copy: 'Acquire the right customers at sustainable economics.',
    metrics: 'CAC · NC-CAC · CTR',
  },
  {
    number: '02',
    title: 'Convert',
    copy: 'Turn more qualified traffic into customers.',
    metrics: 'CVR · PDP CVR · Checkout',
  },
  {
    number: '03',
    title: 'Monetize',
    copy: 'Increase the economic value of every order and customer.',
    metrics: 'AOV · Margin · UPT',
  },
  {
    number: '04',
    title: 'Retain',
    copy: 'Create more repeat revenue from customers already earned.',
    metrics: 'Repeat Rate · LTV',
  },
  {
    number: '05',
    title: 'Scale',
    copy: 'Increase growth without breaking the economics.',
    metrics: 'MER · Profit · Margin',
  },
] as const

const LEAD_STAGES = ['Attract', 'Capture', 'Qualify', 'Convert', 'Grow'] as const

const DMAIC = [
  ['Define', 'Set the commercial objective.'],
  ['Measure', 'Establish the truth in the numbers.'],
  ['Analyze', 'Find the highest-impact constraint.'],
  ['Improve', 'Fix the constraint with the right intervention.'],
  ['Control', 'Keep the gain from slipping backwards.'],
] as const

export default function HomepageGrowthSystem() {
  return (
    <section className={styles.section} aria-labelledby="growth-system-heading">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>How we engineer growth</p>
            <h2 id="growth-system-heading">We don&apos;t start with a channel.<br />We find the constraint.</h2>
          </div>
          <div className={styles.introSide}>
            <p>
              Ads, SEO, CRO, websites, CRM, automation and AI are tools. We use the ones that remove the
              highest-impact revenue constraint — then measure whether the improvement actually lasts.
            </p>
            <Link href="/contact" className={styles.introLink}>Find your biggest growth constraint <span>↗</span></Link>
          </div>
        </div>

        <div className={styles.systemCard}>
          <div className={styles.systemHeader}>
            <div>
              <p>D2C / ECOMMERCE</p>
              <h3>D2C Revenue System</h3>
            </div>
            <span className={styles.systemNote}>Revenue journey, not a service menu.</span>
          </div>

          <div className={styles.stageGrid}>
            {D2C_STAGES.map((stage, index) => (
              <article className={styles.stage} key={stage.title}>
                <div className={styles.stageTop}>
                  <span className={styles.stageNumber}>{stage.number}</span>
                  {index < D2C_STAGES.length - 1 ? <span className={styles.stageArrow} aria-hidden>→</span> : null}
                </div>
                <h4>{stage.title}</h4>
                <p>{stage.copy}</p>
                <small>{stage.metrics}</small>
              </article>
            ))}
          </div>

          <div className={styles.measurementRail}>
            <span className={styles.measurementIcon}>↗</span>
            <div>
              <strong>Measurement &amp; economics run across the entire system.</strong>
              <p>We track the right commercial metrics at every stage — not just clicks, leads or platform ROAS.</p>
            </div>
          </div>
        </div>

        <div className={styles.secondaryGrid}>
          <div className={styles.leadCard}>
            <div className={styles.secondaryHeader}>
              <div>
                <p>LEAD-DRIVEN BUSINESSES</p>
                <h3>Lead-to-Customer System</h3>
              </div>
              <span>We optimise for customers, not lead volume.</span>
            </div>
            <div className={styles.leadJourney}>
              {LEAD_STAGES.map((stage, index) => (
                <div className={styles.leadStage} key={stage}>
                  <span>{stage}</span>
                  {index < LEAD_STAGES.length - 1 ? <i aria-hidden>→</i> : null}
                </div>
              ))}
            </div>
            <p className={styles.leadEconomics}>Cost per enquiry → qualified opportunity → appointment / meeting → customer → revenue</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.methodTitle}>
              <p>THE OPERATING METHOD</p>
              <h3>Six Sigma-inspired. Commercially practical.</h3>
            </div>
            <div className={styles.dmaicGrid}>
              {DMAIC.map(([title, copy], index) => (
                <div className={styles.dmaicItem} key={title}>
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.closingBand}>
          <p>We don&apos;t call growth solved until the improvement can be sustained.</p>
          <Link href="/contact">Get a growth audit <span>↗</span></Link>
        </div>
      </div>
    </section>
  )
}
