import Link from 'next/link'
import styles from './D2CRevenueSystem.module.css'

const STAGES = [
  {
    number: '01',
    title: 'Acquire',
    copy: 'Acquire the right customers at economically sustainable costs.',
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
    copy: 'Increase the economic value created by every order and customer.',
    metrics: 'AOV · Margin · UPT',
  },
  {
    number: '04',
    title: 'Retain',
    copy: 'Create more repeat revenue from customers you have already earned.',
    metrics: 'Repeat Rate · LTV',
  },
  {
    number: '05',
    title: 'Scale',
    copy: 'Increase growth without breaking CAC, margin, inventory or profitability.',
    metrics: 'MER · Profit · Margin',
  },
] as const

const DMAIC = [
  ['Define', 'Set the commercial objective.'],
  ['Measure', 'Establish the truth in the numbers.'],
  ['Analyze', 'Find the highest-impact constraint.'],
  ['Improve', 'Apply the right intervention.'],
  ['Control', 'Make sure the gain lasts.'],
] as const

export default function D2CRevenueSystem() {
  return (
    <section className={styles.section} aria-labelledby="d2c-revenue-system-heading">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>Our D2C growth system</p>
            <h2 id="d2c-revenue-system-heading">We don&apos;t start with ads.<br />We find where revenue is leaking.</h2>
          </div>
          <div className={styles.introSide}>
            <p>
              Meta, Google, CRO, Shopify, creative, email and automation are tools. We look across the complete
              D2C revenue journey, identify the constraint with the biggest economic impact, fix it and measure what changed.
            </p>
            <Link href="#lead-form" className={styles.introLink}>Find your biggest growth constraint <span>↗</span></Link>
          </div>
        </div>

        <div className={styles.systemCard}>
          <div className={styles.systemHeader}>
            <div>
              <p>D2C / ECOMMERCE</p>
              <h3>D2C Revenue System</h3>
            </div>
            <span className={styles.systemNote}>One connected revenue journey — not a menu of services.</span>
          </div>

          <div className={styles.stageGrid}>
            {STAGES.map((stage, index) => (
              <article className={styles.stage} key={stage.title}>
                <div className={styles.stageTop}>
                  <span className={styles.stageNumber}>{stage.number}</span>
                  {index < STAGES.length - 1 ? <span className={styles.stageArrow} aria-hidden>→</span> : null}
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
              <strong>Measurement &amp; unit economics run across every stage.</strong>
              <p>We track the commercial truth at each step — CAC, conversion, AOV, margin, retention and profitability — not platform ROAS in isolation.</p>
            </div>
          </div>
        </div>

        <div className={styles.methodCard}>
          <div className={styles.methodTitle}>
            <div>
              <p>THE OPERATING METHOD</p>
              <h3>Built using our Six Sigma-inspired growth methodology.</h3>
            </div>
            <span>DMAIC is how we diagnose and improve the system; it is not another marketing funnel.</span>
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

        <div className={styles.closingBand}>
          <p>We don&apos;t call growth solved until the improvement can be sustained.</p>
          <Link href="#lead-form">Get a D2C growth audit <span>↗</span></Link>
        </div>
      </div>
    </section>
  )
}
