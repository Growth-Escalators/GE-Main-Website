'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SeoLink = { label: string; href: string; blurb: string }
type SeoCluster = { label: string; headline: string; paths: string[]; links: SeoLink[] }

const CLUSTERS: SeoCluster[] = [
  {
    label: 'D2C & ECOMMERCE',
    headline: 'Explore related ecommerce growth services',
    paths: ['/d2c', '/d2c/fashion', '/d2c/fashion/womens-clothing', '/d2c/fashion/kurti', '/d2c/fashion/meta-ads', '/d2c/beauty', '/ecommerce-advertising-agency', '/meta-ads-agency-for-ecommerce', '/ecommerce-scaling-agency', '/skincare-retention-marketing'],
    links: [
      { label: 'D2C Performance Marketing', href: '/d2c', blurb: 'The full-funnel growth system for ecommerce brands.' },
      { label: "Women's Clothing Performance Marketing", href: '/d2c/fashion/womens-clothing', blurb: 'Acquisition, Shopify CRO, creative and retention for womenswear.' },
      { label: 'Fashion & Apparel D2C', href: '/d2c/fashion', blurb: 'Performance marketing for fashion and apparel brands.' },
      { label: 'Kurti Brand Growth', href: '/d2c/fashion/kurti', blurb: 'Existing ethnic-wear and kurti search-intent page.' },
      { label: 'Meta Ads for Fashion', href: '/d2c/fashion/meta-ads', blurb: 'Paid-social intent within the fashion cluster.' },
      { label: 'Beauty & Skincare D2C', href: '/d2c/beauty', blurb: 'Growth systems for beauty and skincare ecommerce.' },
      { label: 'Shopify Development', href: '/shopify-development-agency', blurb: 'Shopify builds, CRO and technical improvements.' },
      { label: 'Ecommerce Advertising', href: '/ecommerce-advertising-agency', blurb: 'Meta and Google campaigns built around profitable revenue.' },
    ],
  },
  {
    label: 'SEO & LEAD GENERATION',
    headline: 'Connect search visibility to qualified demand',
    paths: ['/seo-lead-generation-agency-jaipur'],
    links: [
      { label: 'SEO & Lead Generation in Jaipur', href: '/seo-lead-generation-agency-jaipur', blurb: 'Technical SEO, local search, content, conversion and lead tracking in one system.' },
      { label: 'Performance Marketing in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Paid search and paid social for measurable acquisition.' },
      { label: 'B2B Lead Generation', href: '/b2b-lead-generation-agency', blurb: 'Pipeline creation for B2B services and consulting businesses.' },
      { label: 'Website Development', href: '/website-development-company-jaipur', blurb: 'Fast, SEO-ready websites and landing pages built to convert.' },
      { label: 'White Label SEO Agency', href: '/white-label-seo-agency', blurb: 'SEO fulfilment for agencies that need delivery capacity.' },
    ],
  },
  {
    label: 'HEALTHCARE GROWTH',
    headline: 'Explore related healthcare growth services',
    paths: ['/doctors', '/doctors-marketing-agency-jaipur', '/ivf-marketing-agency-jaipur', '/orthopedic-marketing-agency-jaipur', '/patient-acquisition-agency', '/personal-branding-for-doctors', '/dental-clinic-marketing-agency-jaipur'],
    links: [
      { label: 'Marketing for Doctors', href: '/doctors', blurb: 'The healthcare growth hub for clinics and doctors.' },
      { label: 'Doctors Marketing in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Local patient discovery and clinic growth in Jaipur.' },
      { label: 'IVF Marketing in Jaipur', href: '/ivf-marketing-agency-jaipur', blurb: 'Search, Maps and consultation acquisition for fertility clinics.' },
      { label: 'Orthopaedic Marketing in Jaipur', href: '/orthopedic-marketing-agency-jaipur', blurb: 'Procedure search, surgeon authority and consultation growth.' },
      { label: 'Patient Acquisition', href: '/patient-acquisition-agency', blurb: 'Build a measurable patient-acquisition system.' },
      { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Turn expertise into trusted, useful authority.' },
      { label: 'Dental Clinic Marketing', href: '/dental-clinic-marketing-agency-jaipur', blurb: 'Local search and patient growth for dental clinics.' },
    ],
  },
  {
    label: 'REAL ESTATE GROWTH',
    headline: 'Connect project demand to qualified site visits',
    paths: ['/real-estate', '/real-estate-marketing-agency-jaipur', '/real-estate/project-launch-marketing'],
    links: [
      { label: 'Real Estate Marketing', href: '/real-estate', blurb: 'The broader developer and property marketing pillar.' },
      { label: 'Real Estate Marketing in Jaipur', href: '/real-estate-marketing-agency-jaipur', blurb: 'Local agency-hire intent for Jaipur builders and developers.' },
      { label: 'Real Estate Project Launch Marketing', href: '/real-estate/project-launch-marketing', blurb: 'Pre-launch demand, paid media, qualification and site-visit measurement.' },
      { label: 'Performance Marketing in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Paid acquisition capability from our Jaipur team.' },
    ],
  },
  {
    label: 'TRAVEL GROWTH',
    headline: 'Generate direct travel enquiries through your own funnel',
    paths: ['/travel-agency-marketing-jaipur', '/travel-marketing-agency'],
    links: [
      { label: 'Travel Marketing Agency in India', href: '/travel-marketing-agency', blurb: 'Meta, Google and direct enquiry acquisition for tour operators and DMCs.' },
      { label: 'Travel Marketing Agency in Jaipur', href: '/travel-agency-marketing-jaipur', blurb: 'Local Jaipur travel-company intent and local-market credibility.' },
      { label: 'Performance Marketing in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Meta and Google acquisition from our Jaipur team.' },
      { label: 'SEO & Lead Generation', href: '/seo-lead-generation-agency-jaipur', blurb: 'Search-led demand and conversion systems.' },
    ],
  },
  {
    label: 'JAIPUR LOCAL GROWTH',
    headline: 'Explore related Jaipur growth services',
    paths: ['/performance-marketing-agency-jaipur', '/jewellery-marketing-agency-jaipur', '/coaching-institute-marketing-agency-jaipur', '/gym-fitness-marketing-agency-jaipur', '/salon-spa-marketing-agency-jaipur', '/hotel-resort-marketing-agency-jaipur', '/interior-designer-marketing-agency-jaipur', '/car-detailing-marketing-agency-jaipur', '/restaurant-marketing-agency-jaipur', '/law-firm-marketing-agency-jaipur', '/wedding-event-marketing-agency-jaipur'],
    links: [
      { label: 'Performance Marketing in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'The local growth hub connecting paid media, search, CRO and creative.' },
      { label: 'SEO & Lead Generation', href: '/seo-lead-generation-agency-jaipur', blurb: 'Organic search, local discovery, landing pages and qualified lead systems.' },
      { label: 'Jewellery Marketing', href: '/jewellery-marketing-agency-jaipur', blurb: 'Showroom and D2C growth for Jaipur jewellery brands.' },
      { label: 'Doctors Marketing', href: '/doctors-marketing-agency-jaipur', blurb: 'Local search and patient acquisition for Jaipur clinics.' },
      { label: 'IVF Marketing', href: '/ivf-marketing-agency-jaipur', blurb: 'Fertility clinic discovery and consultation acquisition.' },
      { label: 'Orthopaedic Marketing', href: '/orthopedic-marketing-agency-jaipur', blurb: 'Speciality search and surgeon authority for orthopaedic practices.' },
      { label: 'Hotel & Resort Marketing', href: '/hotel-resort-marketing-agency-jaipur', blurb: 'Direct bookings and demand generation for hospitality.' },
      { label: 'Restaurant Marketing', href: '/restaurant-marketing-agency-jaipur', blurb: 'Local discovery, bookings and repeat demand for F&B.' },
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
    paths: ['/website-development-company-jaipur', '/software-development-company-jaipur', '/shopify-development-agency'],
    links: [
      { label: 'Website Development', href: '/website-development-company-jaipur', blurb: 'Conversion-focused websites built for measurable growth.' },
      { label: 'Software & App Development', href: '/software-development-company-jaipur', blurb: 'Custom products, apps and internal systems built around business outcomes.' },
      { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'Shopify themes, CRO and integrations for ecommerce brands.' },
      { label: 'White-Label Development', href: '/white-label-software-development', blurb: 'Delivery capacity for agencies that need a dependable technology partner.' },
    ],
  },
  {
    label: 'WHITE-LABEL FOR US AGENCIES',
    headline: 'Expand what your agency can deliver without expanding payroll first',
    paths: ['/white-label-digital-marketing-agency', '/white-label-seo-agency', '/white-label-web-development-agency', '/white-label-software-development', '/white-label-shopify-development-agency', '/white-label-performance-marketing-agency'],
    links: [
      { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The US-agency fulfilment hub across marketing and adjacent delivery.' },
      { label: 'White Label SEO Agency', href: '/white-label-seo-agency', blurb: 'Technical, content, local and AI-search-ready SEO fulfilment.' },
      { label: 'White Label Performance Marketing', href: '/white-label-performance-marketing-agency', blurb: 'Meta and Google fulfilment behind your account team.' },
      { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify themes, CRO and integrations for client accounts.' },
      { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'Websites, landing pages and ongoing development behind your agency.' },
      { label: 'White Label Software Development', href: '/white-label-software-development', blurb: 'SaaS, apps, APIs, integrations and product work under your brand.' },
    ],
  },
  {
    label: 'TECH TALENT',
    headline: 'Explore related offshore staffing services',
    paths: ['/staffing', '/uk-offshore-tech-resources', '/uae-offshore-tech-resources', '/us-tech-staffing-fulfilment', '/australia-offshore-tech-resources'],
    links: [
      { label: 'Hire Tech Talent', href: '/staffing', blurb: 'Screened India-based technology talent for permanent, contract and C2H needs.' },
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

function chooseLinks(cluster: SeoCluster, pathname: string) {
  const pillar = cluster.links[0]
  const siblings = cluster.links.filter((link) => link.href !== pathname && link.href !== pillar.href)
  if (!siblings.length) return pillar.href === pathname ? [] : [pillar]

  const currentIndex = Math.max(0, cluster.paths.indexOf(pathname))
  const start = currentIndex % siblings.length
  const rotated = [...siblings.slice(start), ...siblings.slice(0, start)]

  if (pathname === pillar.href) return rotated.slice(0, 4)
  return [pillar, ...rotated].filter((link) => link.href !== pathname).slice(0, 4)
}

export default function SeoContextLinks() {
  const pathname = usePathname()
  const cluster = getCluster(pathname)
  if (!cluster) return null

  const links = chooseLinks(cluster, pathname)
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
