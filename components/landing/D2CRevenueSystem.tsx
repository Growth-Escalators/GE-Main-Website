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

const OPERATING_METHOD = [
  {
    title: 'Define',
    copy: 'Set the revenue or profit objective.',
    meta: 'DMAIC core',
  },
  {
    title: 'Measure',
    copy: 'Baseline CAC, CVR, AOV, margin and retention.',
    meta: 'DMAIC core',
  },
  {
    title: 'Analyze',
    copy: 'Find the constraint with the highest commercial impact.',
    meta: 'DMAIC core',
  },
  {
    title: 'Improve',
    copy: 'Apply only the levers that address that constraint.',
    meta: 'DMAIC core',
  },
  {
    title: 'Control',
    copy: 'Protect the gain as traffic, spend and volume increase.',
    meta: 'DMAIC core',
  },
  {
    title: 'Scale',
    copy: 'Expand the proven improvement without breaking the economics.',
    meta: 'GE extension',
  },
] as const

const COMMERCIAL_DECISIONS = [
  {
    signal: 'Traffic is qualified',
    issue: 'Conversion is weak',
    action: 'Fix PDP, offer and checkout friction before buying more traffic.',
  },
  {
    signal: 'CAC is healthy',
    issue: 'Repeat purchase is weak',
    action: 'Fix retention, lifecycle and the post-purchase journey before scaling harder.',
  },
  {
    signal: 'ROAS looks good',
    issue: 'Contribution margin is weak',
    action: 'Fix unit economics before allowing platform ROAS to justify more spend.',
  },
] as const

export default function D2CRevenueSystem() {
  return (
    <section className={styles.section} aria-labelledby="d2c-revenue-system-heading">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>Our D2C revenue system</p>
            <h2 id="d2c-revenue-system-heading">We don&apos;t start with ads.<br />We find the constraint limiting revenue.</h2>
          </div>
          <div className={styles.introSide}>
            <p>
              Meta, Google, CRO, Shopify, creative, email and automation are tools — not the strategy. We diagnose the complete
              revenue journey, quantify the biggest commercial leak, fix that constraint first and measure whether the economics improved.
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
              <p>We track CAC, conversion, AOV, contribution margin, repeat purchase and profitability — rather than letting platform ROAS become the only definition of success.</p>
            </div>
          </div>
        </div>

        <div className={styles.decisionSection}>
          <div className={styles.decisionHeading}>
            <p>WHAT THIS CHANGES COMMERCIALLY</p>
            <h3>More spend is not always the answer.</h3>
            <span>We choose the intervention from the economics, not from the service we want to sell.</span>
          </div>
          <div className={styles.decisionGrid}>
            {COMMERCIAL_DECISIONS.map((decision) => (
              <article key={decision.issue} className={styles.decisionCard}>
                <small>{decision.signal}</small>
                <strong>{decision.issue}</strong>
                <p>{decision.action}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.methodCard}>
          <div className={styles.methodTitle}>
            <div>
              <p>THE SIX-PART OPERATING METHOD</p>
              <h3>Six Sigma core. One commercial extension for scale.</h3>
            </div>
            <span>
              Standard DMAIC has five phases: Define, Measure, Analyze, Improve and Control. Growth Escalators adds a sixth commercial phase — Scale — so a proven gain is expanded only after the economics are under control.
            </span>
          </div>
          <div className={styles.dmaicGrid}>
            {OPERATING_METHOD.map((step, index) => (
              <div className={`${styles.dmaicItem} ${step.meta === 'GE extension' ? styles.extensionItem : ''}`} key={step.title}>
                <span>0{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.copy}</p>
                <small>{step.meta}</small>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.closingBand}>
          <p>Diagnose. Improve. Control. Then scale what has actually been proven.</p>
          <Link href="#lead-form">Get a D2C growth audit <span>↗</span></Link>
        </div>
      </div>

      <div className={styles.mobileSticky} aria-label="D2C growth actions">
        <Link href="#lead-form" className={styles.mobileAudit}>Get Free Audit</Link>
        <a
          href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20a%20D2C%20growth%20audit."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileWhatsapp}
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
