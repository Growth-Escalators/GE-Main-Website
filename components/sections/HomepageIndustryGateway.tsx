import Link from 'next/link'
import styles from './HomepageIndustryGateway.module.css'

const INDUSTRIES = [
  { label: 'D2C & Ecommerce', href: '/d2c', note: 'Acquisition, CRO, retention and creative systems.' },
  { label: 'Healthcare', href: '/doctors', note: 'Patient acquisition, reputation and local discovery.' },
  { label: 'Real Estate', href: '/real-estate', note: 'Qualified demand, site visits and lead scoring.' },
  { label: 'B2B & SaaS', href: '/b2b-lead-generation-agency', note: 'Pipeline creation, authority and long-cycle nurture.' },
  { label: 'Beauty & Skincare', href: '/d2c/beauty', note: 'Paid growth, lifecycle marketing and repeat purchase.' },
  { label: 'Jewellery', href: '/jewellery-marketing-agency-jaipur', note: 'Luxury positioning, ecommerce and high-intent demand.' },
  { label: 'Education', href: '/coaching-institute-marketing-agency-jaipur', note: 'Student acquisition and measurable enrolment demand.' },
  { label: 'Hospitality', href: '/hotel-resort-marketing-agency-jaipur', note: 'Direct demand, local discovery and profitable bookings.' },
] as const

export default function HomepageIndustryGateway() {
  return (
    <section id="industries" className={styles.gateway} aria-labelledby="industry-gateway-heading" data-motion-section="industries">
      <div className={styles.shell}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow} data-reveal>Industries & growth pathways</p>
            <h2 id="industry-gateway-heading" data-reveal="headline">Different markets.<br />Different growth physics.</h2>
          </div>
          <div className={styles.headerCopy} data-reveal>
            <p>
              The channel may be the same. The buyer journey is not. Explore the dedicated growth systems
              we build around your category, customer and commercial model.
            </p>
            <Link href="/services">See all capabilities <span aria-hidden>↗</span></Link>
          </div>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES.map((industry, index) => (
            <Link href={industry.href} className={styles.item} key={industry.label} data-card-reveal>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <span>
                <strong>{industry.label}</strong>
                <small>{industry.note}</small>
              </span>
              <span className={styles.arrow} aria-hidden>↗</span>
            </Link>
          ))}
        </div>

        <div className={styles.trustLine} data-reveal>
          <span>Meta & Google Ads certified</span>
          <span>10,000+ campaigns run</span>
          <span>Jaipur, India</span>
          <span>Serving brands globally</span>
        </div>
      </div>
    </section>
  )
}
