import Link from 'next/link'
import styles from './BrandServicePriority.module.css'

const CORE_SERVICES = [
  {
    index: '01',
    title: 'Performance Marketing Agency for D2C Brands',
    short: 'D2C Performance Marketing',
    href: '/d2c',
    copy: 'Meta Ads, Google Ads, creative testing, CRO and full-funnel growth built around profitable ecommerce scaling.',
  },
  {
    index: '02',
    title: 'Website Development Agency in Jaipur',
    short: 'Website Development',
    href: '/website-development-company-jaipur',
    copy: 'Fast, SEO-ready websites, ecommerce experiences and landing pages engineered to convert more of the traffic you already earn.',
  },
  {
    index: '03',
    title: 'Software & App Development Agency in Jaipur',
    short: 'Software & App Development',
    href: '/software-development-company-jaipur',
    copy: 'Production SaaS, web apps, mobile apps, integrations and AI-enabled workflows built around real operating requirements.',
  },
  {
    index: '04',
    title: 'Hire the Best Tech Talent',
    short: 'Technology Talent',
    href: '/staffing',
    copy: 'Pre-screened India-based technology specialists for permanent, contract and C2H hiring across modern and enterprise technology stacks.',
  },
  {
    index: '05',
    title: 'SEO & Lead Generation Agency in Jaipur',
    short: 'SEO & Lead Generation',
    href: '/seo-lead-generation-agency-jaipur',
    copy: 'Technical SEO, local search, buyer-intent content, landing pages and attribution connected to qualified enquiries and pipeline.',
  },
] as const

export default function BrandServicePriority() {
  return (
    <section className={styles.section} aria-labelledby="growth-escalators-core-services">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <p className={styles.kicker}>What Growth Escalators does</p>
          <h2 id="growth-escalators-core-services">Five core growth capabilities. One accountable team.</h2>
          <p>
            Growth Escalators connects marketing, development and technology talent around measurable business outcomes.
            These are the primary service pillars we build the rest of our industry expertise around.
          </p>
          <Link href="/services" className={styles.overview}>Explore all capabilities ↗</Link>
        </div>

        <div className={styles.grid}>
          {CORE_SERVICES.map((service) => (
            <Link href={service.href} className={styles.card} key={service.href}>
              <span className={styles.index}>{service.index}</span>
              <span className={styles.short}>{service.short}</span>
              <strong>{service.title}</strong>
              <p>{service.copy}</p>
              <span className={styles.arrow} aria-hidden>↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
