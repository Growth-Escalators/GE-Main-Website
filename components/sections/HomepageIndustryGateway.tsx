import Link from 'next/link'
import styles from './HomepageIndustryGateway.module.css'

const INDUSTRIES = [
  { label: 'D2C & Ecommerce', href: '/d2c', note: 'Acquisition, creative, CRO & retention' },
  { label: 'Healthcare', href: '/doctors', note: 'Patient acquisition, trust & local discovery' },
  { label: 'Real Estate', href: '/real-estate', note: 'Qualified demand, site visits & lead scoring' },
  { label: 'B2B & SaaS', href: '/b2b-lead-generation-agency', note: 'Pipeline, authority & long-cycle nurture' },
  { label: 'Beauty & Wellness', href: '/d2c/beauty', note: 'Creative velocity, offers & repeat purchase' },
  { label: 'Jewellery', href: '/jewellery-marketing-agency-jaipur', note: 'D2C sales, showroom demand & social proof' },
  { label: 'Education', href: '/coaching-institute-marketing-agency-jaipur', note: 'Admissions, demo funnels & lead follow-up' },
  { label: 'Hospitality', href: '/hotel-resort-marketing-agency-jaipur', note: 'Direct bookings, occupancy & local search' },
]

export default function HomepageIndustryGateway() {
  return (
    <section id="industries" className={styles.gateway} aria-labelledby="industries-heading">
      <div className={styles.shell}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow} data-reveal>Built around how your market grows</p>
            <h2 id="industries-heading" data-reveal="headline">Different markets.<br />Different growth physics.</h2>
          </div>
          <div className={styles.headerCopy} data-reveal>
            <p>
              We keep the operating system connected, but the acquisition model, proof, funnel and creative
              change by category. Explore the growth pages built around each buyer journey.
            </p>
            <Link href="/services">See the full capability system <span aria-hidden>↗</span></Link>
          </div>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES.map((industry, index) => (
            <Link href={industry.href} className={styles.item} key={industry.href} data-card-reveal>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{industry.label}</strong>
                <small>{industry.note}</small>
              </div>
              <span className={styles.arrow} aria-hidden>↗</span>
            </Link>
          ))}
        </div>

        <div className={styles.trustLine} data-reveal>
          <span>Jaipur, India</span>
          <span>Meta & Google Ads certified</span>
          <span>10,000+ campaigns</span>
          <span>India + global growth programs</span>
        </div>
      </div>
    </section>
  )
}
