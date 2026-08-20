'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SeoLink = { label: string; href: string; blurb: string }
type SeoCluster = { label: string; headline: string; paths: string[]; links: SeoLink[] }

const CLUSTERS: SeoCluster[] = [
  {
    label: 'D2C & ECOMMERCE',
    headline: 'Explore related ecommerce growth services',
    paths: ['/d2c', '/d2c/fashion', '/d2c/beauty', '/ecommerce-advertising-agency', '/meta-ads-agency-for-ecommerce', '/ecommerce-scaling-agency', '/skincare-retention-marketing', '/jewellery-marketing-agency-jaipur'],
    links: [
      { label: 'D2C Performance Marketing', href: '/d2c', blurb: 'The full-funnel growth system for ecommerce brands.' },
      { label: 'Ecommerce Advertising', href: '/ecommerce-advertising-agency', blurb: 'Meta and Google campaigns built around profitable revenue.' },
      { label: 'Meta Ads for Ecommerce', href: '/meta-ads-agency-for-ecommerce', blurb: 'Creative testing, account structure and scaling for Meta.' },
      { label: 'Ecommerce Scaling', href: '/ecommerce-scaling-agency', blurb: 'Fix the plateau before pushing more budget into it.' },
      { label: 'Fashion D2C', href: '/d2c/fashion', blurb: 'Performance marketing for fashion and apparel brands.' },
      { label: 'Beauty & Skincare D2C', href: '/d2c/beauty', blurb: 'Growth systems for beauty and skincare ecommerce.' },
    ],
  },
  {
    label: 'HEALTHCARE GROWTH',
    headline: 'Explore related healthcare growth services',
    paths: ['/doctors', '/doctors-marketing-agency-jaipur', '/patient-acquisition-agency', '/personal-branding-for-doctors', '/dental-clinic-marketing-agency-jaipur'],
    links: [
      { label: 'Marketing for Doctors', href: '/doctors', blurb: 'The healthcare growth hub for clinics and doctors.' },
      { label: 'Doctors Marketing in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Local patient discovery and clinic growth in Jaipur.' },
      { label: 'Patient Acquisition', href: '/patient-acquisition-agency', blurb: 'Build a measurable patient-acquisition system.' },
      { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Turn expertise into trusted, useful authority.' },
      { label: 'Dental Clinic Marketing', href: '/dental-clinic-marketing-agency-jaipur', blurb: 'Local search and patient growth for dental clinics.' },
    ],
  },
  {
    label: 'JAIPUR LOCAL GROWTH',
    headline: 'Explore related Jaipur growth services',
    paths: ['/performance-marketing-agency-jaipur', '/real-estate-marketing-agency-jaipur', '/travel-agency-marketing-jaipur', '/coaching-institute-marketing-agency-jaipur', '/gym-fitness-marketing-agency-jaipur', '/salon-spa-marketing-agency-jaipur', '/hotel-resort-marketing-agency-jaipur', '/interior-designer-marketing-agency-jaipur', '/car-detailing-marketing-agency-jaipur', '/restaurant-marketing-agency-jaipur', '/law-firm-marketing-agency-jaipur', '/wedding-event-marketing-agency-jaipur'],
    links: [
      { label: 'Performance Marketing in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'The local growth hub connecting paid media, search, CRO and creative.' },
      { label: 'Restaurant Marketing', href: '/restaurant-marketing-agency-jaipur', blurb: 'Local discovery, bookings and repeat demand for F&B.' },
      { label: 'Hotel & Resort Marketing', href: '/hotel-resort-marketing-agency-jaipur', blurb: 'Direct bookings and demand generation for hospitality.' },
      { label: 'Wedding & Event Marketing', href: '/wedding-event-marketing-agency-jaipur', blurb: 'Lead generation and trust systems for event businesses.' },
      { label: 'Real Estate Marketing', href: '/real-estate-marketing-agency-jaipur', blurb: 'Qualified project enquiries and measurable lead generation.' },
      { label: 'Website Development in Jaipur', href: '/website-development-company-jaipur', blurb: 'Conversion-focused websites supporting local growth campaigns.' },
    ],
  },
  {
    label: 'B2B & SAAS',
    headline: 'Explore related B2B growth services',
    paths: ['/b2b-lead-generation-agency', '/linkedin-marketing-agency', '/saas-marketing-agency'],
    links: [
      { label: 'B2B Lead Generation', href: '/b2b-lead-generation-agency', blurb: 'Build a qualified pipeline instead of chasing lead volume.' },
      { label: 'LinkedIn Marketing', href: '/linkedin-marketing-agency', blurb: 'Authority, outbound and demand creation on LinkedIn.' },
      { label: 'SaaS Marketing', href: '/saas-marketing-agency', blurb: 'Acquisition systems for software and SaaS businesses.' },
    ],
  },
  {
    label: 'WEB & SOFTWARE',
    headline: 'Explore related technology services',
    paths: ['/website-development-company-jaipur', '/software-development-company-jaipur', '/white-label-software-development'],
    links: [
      { label: 'Website Development', href: '/website-development-company-jaipur', blurb: 'Conversion-focused websites built for measurable growth.' },
      { label: 'Software Development', href: '/software-development-company-jaipur', blurb: 'Custom products and internal systems built around business outcomes.' },
      { label: 'White-Label Development', href: '/white-label-software-development', blurb: 'Delivery capacity for agencies that need a dependable technology partner.' },
    ],
  },
  {
    label: 'TECH TALENT',
    headline: 'Explore related offshore staffing services',
    paths: ['/staffing', '/uk-offshore-tech-resources', '/uae-offshore-tech-resources', '/us-tech-staffing-fulfilment', '/australia-offshore-tech-resources'],
    links: [
      { label: 'India Technology Staffing', href: '/staffing', blurb: 'Screened India-based technology talent for permanent, contract and C2H needs.' },
      { label: 'UK Offshore Tech Resources', href: '/uk-offshore-tech-resources', blurb: 'India-based delivery support for UK technology requirements.' },
      { label: 'UAE Offshore Tech Resources', href: '/uae-offshore-tech-resources', blurb: 'Offshore technology talent supporting UAE teams.' },
      { label: 'US Offshore Fulfilment', href: '/us-tech-staffing-fulfilment', blurb: 'India-based fulfilment for suitable US technology requirements.' },
      { label: 'Australia Offshore Tech', href: '/australia-offshore-tech-resources', blurb: 'Offshore India talent supporting Australian technology teams.' },
    ],
  },
]

export const SEO_CONTEXT_PATHS = CLUSTERS.flatMap((cluster) => cluster.paths)

function getCluster(pathname: string) {
  return CLUSTERS.find((cluster) => cluster.paths.includes(pathname))
}

export default function SeoContextLinks() {
  const pathname = usePathname()
  const cluster = getCluster(pathname)
  if (!cluster) return null

  const links = cluster.links.filter((link) => link.href !== pathname).slice(0, 4)
  if (!links.length) return null

  return (
    <section className="seo-context" aria-label="Related services">
      <div className="seo-context__shell">
        <div className="seo-context__heading">
          <span>{cluster.label}</span>
          <h2>{cluster.headline}</h2>
        </div>
        <div className="seo-context__grid">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="seo-context__card">
              <strong>{link.label}</strong>
              <small>{link.blurb}</small>
              <em aria-hidden>↗</em>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        :global(.seo-context) { background:#f7f5ef; border-top:1px solid rgba(23,6,83,.12); color:#170653; }
        :global(.seo-context__shell) { width:min(100%,1440px); margin:0 auto; padding:48px clamp(24px,5vw,76px) 54px; display:grid; grid-template-columns:minmax(240px,.55fr) minmax(0,1.45fr); gap:clamp(34px,5vw,72px); align-items:start; }
        :global(.seo-context__heading span) { display:block; margin-bottom:12px; font-size:10px; font-weight:900; letter-spacing:.16em; text-transform:uppercase; color:#5c24f5; }
        :global(.seo-context__heading h2) { margin:0; max-width:440px; font-size:clamp(30px,3.2vw,48px); line-height:.98; letter-spacing:-.035em; }
        :global(.seo-context__grid) { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
        :global(.seo-context__card) { position:relative; min-height:132px; padding:22px 48px 20px 22px; border:1px solid rgba(23,6,83,.12); border-radius:16px; background:rgba(255,255,255,.58); text-decoration:none; color:inherit; transition:transform .2s ease,border-color .2s ease,background .2s ease; }
        :global(.seo-context__card:hover) { transform:translateY(-2px); border-color:rgba(92,36,245,.38); background:#fff; }
        :global(.seo-context__card strong) { display:block; margin-bottom:8px; font-size:15px; line-height:1.25; }
        :global(.seo-context__card small) { display:block; color:#665f78; font-size:12.5px; line-height:1.5; }
        :global(.seo-context__card em) { position:absolute; right:20px; top:19px; font-style:normal; color:#5c24f5; }
        @media (max-width:900px) { :global(.seo-context__shell){grid-template-columns:1fr} }
        @media (max-width:620px) { :global(.seo-context__shell){padding:38px 20px 42px} :global(.seo-context__grid){grid-template-columns:1fr} :global(.seo-context__card){min-height:auto} }
        @media (prefers-reduced-motion:reduce) { :global(.seo-context__card){transition:none} }
      `}</style>
    </section>
  )
}
