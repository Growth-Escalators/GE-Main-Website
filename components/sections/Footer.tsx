'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

const FOOTER_GROUPS = [
  {
    heading: 'Growth',
    links: [
      { label: 'Performance Marketing', href: '/performance-marketing-agency-jaipur' },
      { label: 'D2C Growth', href: '/d2c' },
      { label: 'Ecommerce Advertising', href: '/ecommerce-advertising-agency' },
      { label: 'Meta Ads for Ecommerce', href: '/meta-ads-agency-for-ecommerce' },
      { label: 'B2B Lead Generation', href: '/b2b-lead-generation-agency' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    heading: 'Technology',
    links: [
      { label: 'Website Development', href: '/website-development-company-jaipur' },
      { label: 'Software Development', href: '/software-development-company-jaipur' },
      { label: 'White-Label Development', href: '/white-label-software-development' },
      { label: 'GrowthBot', href: '/#growthbot' },
      { label: 'Portfolio', href: '/portfolio' },
    ],
  },
  {
    heading: 'Markets',
    links: [
      { label: 'Healthcare', href: '/doctors' },
      { label: 'Real Estate', href: '/real-estate' },
      { label: 'Beauty & Skincare', href: '/d2c/beauty' },
      { label: 'Jewellery', href: '/jewellery-marketing-agency-jaipur' },
      { label: 'Education', href: '/coaching-institute-marketing-agency-jaipur' },
      { label: 'Hospitality', href: '/hotel-resort-marketing-agency-jaipur' },
    ],
  },
  {
    heading: 'Staffing',
    links: [
      { label: 'Staffing Hub', href: '/staffing' },
      { label: 'UK Offshore Tech', href: '/uk-offshore-tech-resources' },
      { label: 'UAE Offshore Tech', href: '/uae-offshore-tech-resources' },
      { label: 'US Fulfilment', href: '/us-tech-staffing-fulfilment' },
      { label: 'Australia Offshore Tech', href: '/australia-offshore-tech-resources' },
    ],
  },
  {
    heading: 'Local Niches',
    links: [
      { label: 'Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur' },
      { label: 'Dental Clinics', href: '/dental-clinic-marketing-agency-jaipur' },
      { label: 'Real Estate Jaipur', href: '/real-estate-marketing-agency-jaipur' },
      { label: 'Salons & Spas', href: '/salon-spa-marketing-agency-jaipur' },
      { label: 'Gyms & Fitness', href: '/gym-fitness-marketing-agency-jaipur' },
      { label: 'Interior Designers', href: '/interior-designer-marketing-agency-jaipur' },
      { label: 'Travel Companies', href: '/travel-agency-marketing-jaipur' },
      { label: 'Car Detailing', href: '/car-detailing-marketing-agency-jaipur' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Insights', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Get Free Audit', href: '/#book' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="ge-footer" aria-label="Growth Escalators footer" data-phase-one="footer">
      <div className="ge-footer-shell">
        <div className="ge-footer-top">
          <div className="ge-footer-brand">
            <Link href="/" className="ge-footer-logo" aria-label="Growth Escalators home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.webp" alt="Growth Escalators" />
            </Link>
            <p className="ge-footer-kicker">Growth × Technology × Talent</p>
            <h2>Growth systems built to compound.</h2>
            <p className="ge-footer-copy">
              Performance marketing, ecommerce, websites, software, AI automation and India-based technology
              staffing — connected around measurable commercial outcomes.
            </p>
            <Link href="/#book" className="ge-footer-cta">Get your free growth audit <span aria-hidden>↗</span></Link>
          </div>

          <div className="ge-footer-links">
            {FOOTER_GROUPS.map((group) => (
              <div className="ge-footer-group" key={group.heading}>
                <p>{group.heading}</p>
                {group.links.map((link) => (
                  <Link href={link.href} key={link.href}>{link.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="ge-footer-contact">
          <div className="ge-footer-trust">
            <span>Meta & Google Ads certified</span>
            <span>10,000+ campaigns</span>
            <span>₹10Cr+ ad spend managed</span>
            <span>Jaipur, India</span>
          </div>
          <div className="ge-footer-contact-links">
            <span><MapPin size={16} /> Sector 26, Pratap Nagar, Jaipur 302033</span>
            <a href="tel:+917733888883" onClick={() => trackLead('call')}><Phone size={16} /> +91-7733888883</a>
            <a href="mailto:jatin@growthescalators.com" onClick={() => trackLead('email')}><Mail size={16} /> jatin@growthescalators.com</a>
          </div>
        </div>

        <div className="ge-footer-bottom">
          <span>© 2026 Growth Escalators. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.ge-footer) { --footer-ink:#f8f8ff; --footer-muted:#b9b5ca; --footer-line:rgba(255,255,255,.14); background:#0d0539; color:var(--footer-ink); overflow:hidden; }
        :global(.ge-footer-shell) { width:min(100%,1440px); margin:0 auto; padding:clamp(78px,8vw,124px) clamp(24px,5vw,76px) 34px; }
        :global(.ge-footer-top) { display:grid; grid-template-columns:.8fr 1.2fr; gap:clamp(60px,8vw,120px); padding-bottom:clamp(58px,6vw,92px); }
        :global(.ge-footer-brand) { max-width:570px; }
        :global(.ge-footer-logo) { display:inline-flex; padding:10px 15px; border-radius:12px; background:#fff; }
        :global(.ge-footer-logo img) { height:38px; width:auto; display:block; }
        :global(.ge-footer-kicker) { margin:34px 0 14px; color:#83f0c2; font-size:11px; font-weight:900; letter-spacing:.17em; text-transform:uppercase; }
        :global(.ge-footer-brand h2) { max-width:540px; margin:0; font-family:'Arial Narrow',var(--font-jakarta),sans-serif; font-size:clamp(54px,5.8vw,84px); line-height:.82; letter-spacing:-.035em; text-transform:uppercase; }
        :global(.ge-footer-copy) { max-width:520px; margin:27px 0 0; font-size:16px; line-height:1.65; color:var(--footer-muted); }
        :global(.ge-footer-cta) { display:inline-flex; align-items:center; gap:9px; min-height:49px; margin-top:30px; padding:0 21px; border:1px solid rgba(131,240,194,.65); border-radius:999px; color:#83f0c2; font-size:11.5px; font-weight:900; letter-spacing:.06em; text-transform:uppercase; transition:background .22s ease,color .22s ease,transform .22s ease; }
        :global(.ge-footer-cta:hover) { background:#83f0c2; color:#0d0539; transform:translateY(-2px); }
        :global(.ge-footer-links) { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:46px 36px; align-content:start; }
        :global(.ge-footer-group p) { margin:0 0 19px; color:#83f0c2; font-size:11px; font-weight:900; letter-spacing:.16em; text-transform:uppercase; }
        :global(.ge-footer-group a) { display:block; width:fit-content; margin:0 0 13px; color:#f1effa; font-size:15px; line-height:1.38; transition:color .2s ease,transform .2s ease; }
        :global(.ge-footer-group a:hover) { color:#83f0c2; transform:translateX(3px); }
        :global(.ge-footer-contact) { display:grid; grid-template-columns:.9fr 1.1fr; gap:38px; padding:32px 0; border-top:1px solid var(--footer-line); border-bottom:1px solid var(--footer-line); }
        :global(.ge-footer-trust) { display:flex; flex-wrap:wrap; gap:12px 24px; align-items:center; }
        :global(.ge-footer-trust span) { font-size:10px; font-weight:900; letter-spacing:.115em; text-transform:uppercase; color:#d0cddd; }
        :global(.ge-footer-trust span::before) { content:'•'; margin-right:8px; color:#83f0c2; }
        :global(.ge-footer-contact-links) { display:flex; flex-wrap:wrap; justify-content:flex-end; gap:13px 22px; color:#d0cddd; font-size:13.5px; line-height:1.45; }
        :global(.ge-footer-contact-links span),:global(.ge-footer-contact-links a) { display:inline-flex; align-items:center; gap:8px; }
        :global(.ge-footer-contact-links a:hover) { color:#83f0c2; }
        :global(.ge-footer-bottom) { display:flex; align-items:center; justify-content:space-between; gap:20px; padding-top:27px; color:#9b96ad; font-size:12px; }
        :global(.ge-footer-bottom div) { display:flex; gap:22px; }
        :global(.ge-footer-bottom a:hover) { color:#fff; }
        @media (max-width:1050px) { :global(.ge-footer-top){grid-template-columns:1fr;gap:58px} :global(.ge-footer-brand){max-width:760px} :global(.ge-footer-links){grid-template-columns:repeat(3,1fr)} :global(.ge-footer-contact){grid-template-columns:1fr} :global(.ge-footer-contact-links){justify-content:flex-start} }
        @media (max-width:700px) { :global(.ge-footer-shell){padding:76px 20px 30px} :global(.ge-footer-links){grid-template-columns:repeat(2,1fr);gap:38px 22px} :global(.ge-footer-brand h2){font-size:56px} :global(.ge-footer-copy){font-size:15px} :global(.ge-footer-group p){font-size:10px} :global(.ge-footer-group a){font-size:14px} :global(.ge-footer-bottom){align-items:flex-start;flex-direction:column;font-size:11.5px} :global(.ge-footer-contact-links){flex-direction:column;align-items:flex-start;font-size:13px} :global(.ge-footer-trust span){font-size:9.5px} }
        @media (prefers-reduced-motion:reduce) { :global(.ge-footer-cta),:global(.ge-footer-group a){transition:none} }
      `}</style>
    </footer>
  )
}
