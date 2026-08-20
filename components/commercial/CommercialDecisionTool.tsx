'use client'

import { useMemo, useState } from 'react'
import styles from './CommercialDecisionTool.module.css'

type NumberFieldProps = {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  step?: number
  suffix?: string
}

function NumberField({ label, value, onChange, min = 0, step = 1, suffix }: NumberFieldProps) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <div>
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(event) => onChange(Number(event.target.value) || 0)}
        />
        {suffix && <b>{suffix}</b>}
      </div>
    </label>
  )
}

function Result({ value, label, emphasis = false }: { value: string; label: string; emphasis?: boolean }) {
  return <div className={`${styles.result} ${emphasis ? styles.resultEmphasis : ''}`}><strong>{value}</strong><span>{label}</span></div>
}

function currency(value: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, value))
}

function compact(value: number) {
  return new Intl.NumberFormat('en-IN', { notation: 'compact', maximumFractionDigits: 1 }).format(Math.max(0, value))
}

function EcommerceTool() {
  const [revenue, setRevenue] = useState(1500000)
  const [grossMargin, setGrossMargin] = useState(62)
  const [variableCost, setVariableCost] = useState(14)
  const [adSpend, setAdSpend] = useState(400000)
  const metrics = useMemo(() => {
    const contributionRate = Math.max(0.01, (grossMargin - variableCost) / 100)
    const preMedia = revenue * contributionRate
    const afterMedia = preMedia - adSpend
    const mer = adSpend > 0 ? revenue / adSpend : 0
    const breakEvenMer = 1 / contributionRate
    return { contributionRate, afterMedia, mer, breakEvenMer }
  }, [revenue, grossMargin, variableCost, adSpend])

  return (
    <ToolShell eyebrow="D2C ECONOMICS" title="ROAS is only half the story." copy="Use your own numbers to see what survives after product economics and media spend. This is the number we want scaling decisions to protect.">
      <div className={styles.fields}>
        <NumberField label="Monthly revenue" value={revenue} onChange={setRevenue} step={50000} />
        <NumberField label="Gross margin" value={grossMargin} onChange={setGrossMargin} suffix="%" />
        <NumberField label="Shipping, returns & discounts" value={variableCost} onChange={setVariableCost} suffix="%" />
        <NumberField label="Monthly ad spend" value={adSpend} onChange={setAdSpend} step={25000} />
      </div>
      <div className={styles.results}>
        <Result value={`${metrics.mer.toFixed(2)}×`} label="MER / blended revenue-to-spend" />
        <Result value={`${metrics.breakEvenMer.toFixed(2)}×`} label="Approx. break-even MER" />
        <Result value={`${Math.round(metrics.contributionRate * 100)}%`} label="Contribution before media" />
        <Result value={currency(metrics.afterMedia)} label="Contribution after media" emphasis />
      </div>
    </ToolShell>
  )
}

function PerformanceTool() {
  const [spend, setSpend] = useState(100000)
  const [leads, setLeads] = useState(220)
  const [closeRate, setCloseRate] = useState(18)
  const [customerValue, setCustomerValue] = useState(12000)
  const customers = leads * closeRate / 100
  const revenue = customers * customerValue
  const cac = customers > 0 ? spend / customers : 0
  const roas = spend > 0 ? revenue / spend : 0

  return (
    <ToolShell eyebrow="ACQUISITION ECONOMICS" title="Make the funnel answer to revenue." copy="Put in your current numbers. If the economics do not work here, increasing media spend will only make the leak larger.">
      <div className={styles.fields}>
        <NumberField label="Monthly ad spend" value={spend} onChange={setSpend} step={10000} />
        <NumberField label="Qualified leads" value={leads} onChange={setLeads} step={10} />
        <NumberField label="Lead-to-customer close rate" value={closeRate} onChange={setCloseRate} suffix="%" />
        <NumberField label="Average customer value" value={customerValue} onChange={setCustomerValue} step={1000} />
      </div>
      <div className={styles.results}>
        <Result value={compact(customers)} label="Customers generated" />
        <Result value={currency(cac)} label="Customer acquisition cost" />
        <Result value={currency(revenue)} label="Revenue generated" />
        <Result value={`${roas.toFixed(2)}×`} label="Revenue-to-ad-spend" emphasis />
      </div>
    </ToolShell>
  )
}

function HealthcareTool() {
  const [spend, setSpend] = useState(60000)
  const [enquiries, setEnquiries] = useState(180)
  const [bookingRate, setBookingRate] = useState(42)
  const [showRate, setShowRate] = useState(78)
  const [patientValue, setPatientValue] = useState(6000)
  const bookings = enquiries * bookingRate / 100
  const showed = bookings * showRate / 100
  const revenue = showed * patientValue
  const costPerShow = showed > 0 ? spend / showed : 0

  return (
    <ToolShell eyebrow="PATIENT FUNNEL" title="Leads do not fill calendars. Showed-up patients do." copy="This exposes the front-desk and no-show leaks that can make good campaigns look bad. We want the whole patient journey measured.">
      <div className={styles.fields}>
        <NumberField label="Monthly marketing spend" value={spend} onChange={setSpend} step={5000} />
        <NumberField label="Monthly enquiries" value={enquiries} onChange={setEnquiries} step={10} />
        <NumberField label="Enquiry-to-booking rate" value={bookingRate} onChange={setBookingRate} suffix="%" />
        <NumberField label="Appointment show rate" value={showRate} onChange={setShowRate} suffix="%" />
        <NumberField label="Average patient value" value={patientValue} onChange={setPatientValue} step={500} />
      </div>
      <div className={styles.results}>
        <Result value={compact(bookings)} label="Appointments booked" />
        <Result value={compact(showed)} label="Patients who show up" emphasis />
        <Result value={currency(costPerShow)} label="Cost per showed-up patient" />
        <Result value={currency(revenue)} label="Revenue represented by show-ups" />
      </div>
    </ToolShell>
  )
}

function RealEstateTool() {
  const [bookingTarget, setBookingTarget] = useState(8)
  const [visitToBooking, setVisitToBooking] = useState(12)
  const [leadToVisit, setLeadToVisit] = useState(18)
  const siteVisits = bookingTarget / Math.max(0.01, visitToBooking / 100)
  const leads = siteVisits / Math.max(0.01, leadToVisit / 100)

  return (
    <ToolShell eyebrow="PROJECT DEMAND MATH" title="Start from bookings. Work backwards to demand." copy="For a developer, raw lead volume is not the target. This shows the site-visit and lead volume your sales target actually requires.">
      <div className={styles.fields}>
        <NumberField label="Monthly booking target" value={bookingTarget} onChange={setBookingTarget} />
        <NumberField label="Site-visit to booking rate" value={visitToBooking} onChange={setVisitToBooking} suffix="%" />
        <NumberField label="Lead to site-visit rate" value={leadToVisit} onChange={setLeadToVisit} suffix="%" />
      </div>
      <div className={styles.results}>
        <Result value={compact(bookingTarget)} label="Bookings required" />
        <Result value={compact(Math.ceil(siteVisits))} label="Site visits required" emphasis />
        <Result value={compact(Math.ceil(leads))} label="Qualified leads required" />
        <Result value={`${visitToBooking}%`} label="Sales-gallery conversion assumption" />
      </div>
    </ToolShell>
  )
}

function B2BTool() {
  const [revenueTarget, setRevenueTarget] = useState(2000000)
  const [dealValue, setDealValue] = useState(250000)
  const [closeRate, setCloseRate] = useState(25)
  const [sqlToOpportunity, setSqlToOpportunity] = useState(40)
  const deals = revenueTarget / Math.max(1, dealValue)
  const opportunities = deals / Math.max(0.01, closeRate / 100)
  const sqls = opportunities / Math.max(0.01, sqlToOpportunity / 100)

  return (
    <ToolShell eyebrow="PIPELINE MATH" title="Start with revenue. Calculate the pipeline required." copy="This is how we keep B2B marketing aligned with sales: the target is qualified pipeline, not a spreadsheet full of form fills.">
      <div className={styles.fields}>
        <NumberField label="Monthly revenue target" value={revenueTarget} onChange={setRevenueTarget} step={100000} />
        <NumberField label="Average deal value" value={dealValue} onChange={setDealValue} step={25000} />
        <NumberField label="Opportunity close rate" value={closeRate} onChange={setCloseRate} suffix="%" />
        <NumberField label="SQL-to-opportunity rate" value={sqlToOpportunity} onChange={setSqlToOpportunity} suffix="%" />
      </div>
      <div className={styles.results}>
        <Result value={compact(Math.ceil(deals))} label="Deals required" />
        <Result value={compact(Math.ceil(opportunities))} label="Opportunities required" />
        <Result value={compact(Math.ceil(sqls))} label="Sales-qualified leads required" emphasis />
        <Result value={currency(revenueTarget)} label="Target pipeline outcome" />
      </div>
    </ToolShell>
  )
}

function WebsiteTool() {
  const [pages, setPages] = useState(8)
  const [integrations, setIntegrations] = useState(2)
  const [ecommerce, setEcommerce] = useState(false)
  const [custom, setCustom] = useState(false)
  const score = pages / 5 + integrations * 1.5 + (ecommerce ? 4 : 0) + (custom ? 4 : 0)
  const tier = score < 5 ? 'Focused business site' : score < 10 ? 'Growth website' : 'Custom web build'
  const path = score < 5 ? 'Lean UX + conversion build' : score < 10 ? 'Full design system + integrations' : 'Architecture + custom development'

  return (
    <ToolShell eyebrow="WEBSITE SCOPE" title="Know what kind of build you actually need." copy="A five-page business site and a commerce platform should not be scoped the same way. Use this to make the first conversation more concrete.">
      <div className={styles.fields}>
        <NumberField label="Approx. number of pages" value={pages} onChange={setPages} />
        <NumberField label="External integrations" value={integrations} onChange={setIntegrations} />
        <Toggle label="Ecommerce / payments required" value={ecommerce} onChange={setEcommerce} />
        <Toggle label="Custom portal / logged-in functionality" value={custom} onChange={setCustom} />
      </div>
      <div className={styles.scopeResult}><span>Recommended build type</span><strong>{tier}</strong><p>{path}. We would confirm sitemap, migration risk, integrations and conversion goals before giving you a fixed scope.</p></div>
    </ToolShell>
  )
}

function SoftwareTool() {
  const [integrations, setIntegrations] = useState(3)
  const [auth, setAuth] = useState(true)
  const [payments, setPayments] = useState(false)
  const [ai, setAi] = useState(false)
  const [admin, setAdmin] = useState(true)
  const [mobile, setMobile] = useState(false)
  const score = integrations * 1.5 + [auth, payments, ai, admin, mobile].filter(Boolean).length * 2
  const tier = score < 7 ? 'Lean MVP' : score < 12 ? 'Production product' : 'Complex platform'

  return (
    <ToolShell eyebrow="PRODUCT SCOPE" title="Turn the idea into an engineering conversation." copy="Select the systems your product needs. The goal is not an instant quote—it is to expose the architecture and delivery complexity before anyone promises a deadline.">
      <div className={styles.fields}>
        <NumberField label="External integrations" value={integrations} onChange={setIntegrations} />
        <Toggle label="Authentication / user roles" value={auth} onChange={setAuth} />
        <Toggle label="Payments / subscriptions" value={payments} onChange={setPayments} />
        <Toggle label="AI features or automation" value={ai} onChange={setAi} />
        <Toggle label="Admin dashboard" value={admin} onChange={setAdmin} />
        <Toggle label="Mobile / PWA requirement" value={mobile} onChange={setMobile} />
      </div>
      <div className={styles.scopeResult}><span>Likely delivery profile</span><strong>{tier}</strong><p>On the scoping call we turn this into users, data model, integrations, milestones, QA requirements and a realistic engagement model.</p></div>
    </ToolShell>
  )
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (value: boolean) => void }) {
  return <button type="button" className={`${styles.toggle} ${value ? styles.toggleOn : ''}`} onClick={() => onChange(!value)} aria-pressed={value}><span>{label}</span><b>{value ? 'YES' : 'NO'}</b></button>
}

function ToolShell({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children: React.ReactNode }) {
  return (
    <section className={styles.tool} aria-label={title}>
      <div className={styles.intro}><span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p></div>
      <div className={styles.panel}>{children}<a className={styles.cta} href="#lead-form">Audit these numbers with us ↗</a><small>Illustrative model based only on the numbers you enter. It is not a performance guarantee.</small></div>
    </section>
  )
}

export default function CommercialDecisionTool({ industryLabel }: { industryLabel?: string }) {
  const label = industryLabel ?? ''
  if (label === 'Website Development') return <WebsiteTool />
  if (label === 'Software Development') return <SoftwareTool />
  if (label === 'B2B Lead Generation') return <B2BTool />
  if (label.includes('Real Estate')) return <RealEstateTool />
  if (label === 'Doctor' || label.includes('Healthcare')) return <HealthcareTool />
  if (label.includes('Ecommerce') || label === 'D2C Brand') return <EcommerceTool />
  return <PerformanceTool />
}
