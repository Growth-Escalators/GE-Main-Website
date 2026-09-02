'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Mail } from 'lucide-react'
import { getLeadAttribution } from '@/lib/leadAttribution'
import { trackLead } from '@/lib/analytics'
import type { GrowthToolDefinition, GrowthToolId } from '@/lib/growthTools'
import styles from './BlogGrowthTool.module.css'

type Priority = 'P1' | 'P2'
type SubmitStatus = 'idle' | 'sending' | 'sent' | 'partial' | 'error'

type ResultPacket = {
  headline: string
  metrics: Array<{ label: string; value: string }>
  recommendations: string[]
  summary: string
  priority: Priority
  monthlyRevenue?: string
}

type ToolProps = {
  tool: GrowthToolDefinition
  postSlug: string
  postTitle: string
}

const INR = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function lakhToRupees(value: number) {
  return Math.max(0, value) * 100_000
}

function money(value: number) {
  if (!Number.isFinite(value)) return '—'
  return INR.format(Math.round(value))
}

function decimal(value: number, digits = 2) {
  return Number.isFinite(value) ? value.toFixed(digits) : '—'
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function Field({
  label,
  suffix,
  value,
  onChange,
  min = 0,
  step = '0.1',
}: {
  label: string
  suffix?: string
  value: number
  onChange: (value: number) => void
  min?: number
  step?: string
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <div className={styles.inputWrap}>
        <input
          type="number"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        {suffix && <em>{suffix}</em>}
      </div>
    </label>
  )
}

function ResultPanel({ result }: { result: ResultPacket }) {
  return (
    <div className={styles.resultPanel} aria-live="polite">
      <span className={styles.resultEyebrow}>Your working result</span>
      <h4>{result.headline}</h4>
      <div className={styles.metricGrid}>
        {result.metrics.map((metric) => (
          <div className={styles.metric} key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
      <div className={styles.recommendations}>
        <span>What I would inspect next</span>
        <ol>
          {result.recommendations.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </div>
    </div>
  )
}

function ProfitCalculator({ onResult }: { onResult: (result: ResultPacket) => void }) {
  const [revenue, setRevenue] = useState(12)
  const [aov, setAov] = useState(1800)
  const [margin, setMargin] = useState(60)
  const [adSpend, setAdSpend] = useState(2.5)
  const [conversionRate, setConversionRate] = useState(1.4)

  function calculate() {
    const revenueRs = lakhToRupees(revenue)
    const spendRs = lakhToRupees(adSpend)
    const marginRate = clamp(margin / 100, 0.01, 0.95)
    const breakEvenRoas = 1 / marginRate
    const allowableCac = aov * marginRate
    const contributionAfterMedia = revenueRs * marginRate - spendRs
    const adSpendShare = revenueRs > 0 ? (spendRs / revenueRs) * 100 : 0
    const cvr = Math.max(conversionRate, 0.1)
    const improvedRevenue = revenueRs * ((cvr + 0.3) / cvr)
    const extraRevenueScenario = improvedRevenue - revenueRs

    const recommendations = [
      adSpendShare > margin ? 'Your media spend is consuming a large share of gross margin. Validate CAC by product and new-vs-returning customer before scaling.' : 'Your media-spend share is not automatically a red flag; next validate contribution margin after shipping, payment fees, returns and discounts.',
      `Treat ${decimal(breakEvenRoas)}× as a simplified gross-margin break-even ROAS, not a scaling target. Your actual floor should include fulfilment, discounts, returns and overhead.`,
      conversionRate < 1.5 ? 'Conversion is the first place I would investigate before materially increasing spend.' : 'Your conversion input is healthy enough to justify looking next at creative efficiency, CAC and repeat purchase behaviour.',
    ]

    onResult({
      headline: 'Your unit economics give us a much better scaling conversation than ROAS alone.',
      metrics: [
        { label: 'Simplified break-even ROAS', value: `${decimal(breakEvenRoas)}×` },
        { label: 'Gross-margin CAC ceiling', value: money(allowableCac) },
        { label: 'Contribution after media', value: money(contributionAfterMedia) },
        { label: '+0.3pp CVR scenario', value: `+${money(extraRevenueScenario)}/mo` },
      ],
      recommendations,
      summary: `Monthly revenue ${money(revenueRs)}; AOV ${money(aov)}; gross margin ${margin}%; ad spend ${money(spendRs)}; conversion rate ${conversionRate}%. Simplified break-even ROAS ${decimal(breakEvenRoas)}x; gross-margin CAC ceiling ${money(allowableCac)}; contribution after media ${money(contributionAfterMedia)}; +0.3 percentage-point conversion scenario ${money(extraRevenueScenario)} additional monthly revenue at the same traffic level.`,
      priority: revenue >= 10 && (adSpend >= 1.5 || revenue >= 25) ? 'P1' : 'P2',
      monthlyRevenue: `₹${revenue}L/month`,
    })
  }

  return (
    <div className={styles.toolForm}>
      <div className={styles.fieldsGrid}>
        <Field label="Monthly revenue" suffix="₹ lakh" value={revenue} onChange={setRevenue} />
        <Field label="Average order value" suffix="₹" value={aov} onChange={setAov} step="50" />
        <Field label="Gross margin" suffix="%" value={margin} onChange={setMargin} step="1" />
        <Field label="Monthly ad spend" suffix="₹ lakh" value={adSpend} onChange={setAdSpend} />
        <Field label="Store conversion rate" suffix="%" value={conversionRate} onChange={setConversionRate} />
      </div>
      <button type="button" className={styles.primaryButton} onClick={calculate}>Calculate my economics <ArrowRight size={16} /></button>
      <p className={styles.disclaimer}>Scenario only. Break-even calculations use the gross margin you enter and do not include returns, shipping, payment fees, discounts, taxes or fixed overhead unless already reflected in that margin.</p>
    </div>
  )
}

function BudgetPlanner({ onResult }: { onResult: (result: ResultPacket) => void }) {
  const [currentRevenue, setCurrentRevenue] = useState(10)
  const [targetRevenue, setTargetRevenue] = useState(15)
  const [aov, setAov] = useState(1800)
  const [margin, setMargin] = useState(60)
  const [roas, setRoas] = useState(2.5)
  const [currentSpend, setCurrentSpend] = useState(2)

  function calculate() {
    const currentRs = lakhToRupees(currentRevenue)
    const targetRs = lakhToRupees(Math.max(targetRevenue, currentRevenue))
    const gap = Math.max(0, targetRs - currentRs)
    const safeRoas = Math.max(roas, 0.5)
    const marginRate = clamp(margin / 100, 0.01, 0.95)
    const requiredAtCurrent = gap / safeRoas
    const efficientCase = gap / (safeRoas * 1.15)
    const softerCase = gap / Math.max(safeRoas * 0.85, 0.5)
    const breakEvenRoas = 1 / marginRate
    const allowableCac = aov * marginRate
    const incrementalCustomers = aov > 0 ? gap / aov : 0

    onResult({
      headline: gap > 0 ? 'This is the media requirement implied by your target — not a promise that the market will absorb it.' : 'Your target is already at or below your current revenue input.',
      metrics: [
        { label: 'Incremental revenue target', value: money(gap) },
        { label: 'Spend at current ROAS', value: money(requiredAtCurrent) },
        { label: 'Scenario range', value: `${money(efficientCase)}–${money(softerCase)}` },
        { label: 'Incremental orders', value: `${Math.ceil(incrementalCustomers).toLocaleString('en-IN')}/mo` },
        { label: 'Simplified break-even ROAS', value: `${decimal(breakEvenRoas)}×` },
        { label: 'Gross-margin CAC ceiling', value: money(allowableCac) },
      ],
      recommendations: [
        roas <= breakEvenRoas * 1.15 ? 'Your current ROAS is close to the simplified margin break-even level. Improve economics before treating more spend as the primary growth lever.' : 'Your current ROAS input leaves some theoretical headroom, but scale should be released in steps rather than all at once.',
        'Allocate a specific testing budget for new creative instead of forcing every rupee into the current winning ads.',
        'Recalculate with contribution margin after shipping, discounts, returns and payment fees before using this as an operating budget.',
      ],
      summary: `Current revenue ${money(currentRs)}; target revenue ${money(targetRs)}; AOV ${money(aov)}; gross margin ${margin}%; current ROAS ${roas}x; current ad spend ${money(lakhToRupees(currentSpend))}. Incremental target ${money(gap)}; incremental spend implied at current ROAS ${money(requiredAtCurrent)}; scenario range ${money(efficientCase)} to ${money(softerCase)}; simplified break-even ROAS ${decimal(breakEvenRoas)}x.`,
      priority: currentRevenue >= 10 && (currentSpend >= 1.5 || targetRevenue >= 20) ? 'P1' : 'P2',
      monthlyRevenue: `₹${currentRevenue}L/month`,
    })
  }

  return (
    <div className={styles.toolForm}>
      <div className={styles.fieldsGrid}>
        <Field label="Current monthly revenue" suffix="₹ lakh" value={currentRevenue} onChange={setCurrentRevenue} />
        <Field label="Target monthly revenue" suffix="₹ lakh" value={targetRevenue} onChange={setTargetRevenue} />
        <Field label="Average order value" suffix="₹" value={aov} onChange={setAov} step="50" />
        <Field label="Gross margin" suffix="%" value={margin} onChange={setMargin} step="1" />
        <Field label="Current blended ROAS" suffix="×" value={roas} onChange={setRoas} />
        <Field label="Current monthly ad spend" suffix="₹ lakh" value={currentSpend} onChange={setCurrentSpend} />
      </div>
      <button type="button" className={styles.primaryButton} onClick={calculate}>Model the target <ArrowRight size={16} /></button>
      <p className={styles.disclaimer}>This models what your target implies if performance stayed within the selected ROAS range. It is not a forecast, guarantee or Growth Escalators service quote.</p>
    </div>
  )
}

const AGENCY_QUESTIONS = [
  'They report contribution/profitability, not only platform ROAS.',
  'They have a documented creative testing process with clear learning loops.',
  'They can explain campaign structure and scaling rules without hiding behind jargon.',
  'They reconcile attribution across platform data, analytics and business outcomes.',
  'They actively identify CRO or landing-page problems that affect paid media.',
  'Reporting tells you what changed, why it changed and what happens next.',
  'They account for repeat purchase / retention when judging acquisition economics.',
  'Commercial terms, ownership and access to ad accounts/data are transparent.',
  'They understand your category economics rather than applying one generic playbook.',
  'They run a disciplined experimentation backlog instead of making random changes.',
]

function AgencyScorecard({ onResult }: { onResult: (result: ResultPacket) => void }) {
  const [scores, setScores] = useState<number[]>(Array(AGENCY_QUESTIONS.length).fill(3))
  const [stage, setStage] = useState('research')

  function calculate() {
    const score = Math.round((scores.reduce((sum, value) => sum + value, 0) / (AGENCY_QUESTIONS.length * 5)) * 100)
    const weakest = scores
      .map((value, index) => ({ value, index }))
      .sort((a, b) => a.value - b.value)
      .slice(0, 3)
      .map(({ index }) => AGENCY_QUESTIONS[index])

    const label = score >= 85 ? 'Strong operating fit' : score >= 70 ? 'Promising, but validate the gaps' : score >= 55 ? 'Material gaps to investigate' : 'High-risk agency fit'

    onResult({
      headline: `${score}/100 — ${label}`,
      metrics: [
        { label: 'Agency score', value: `${score}/100` },
        { label: 'Decision stage', value: stage === 'switching' ? 'Considering a switch' : stage === 'shortlisting' ? 'Shortlisting now' : 'Researching' },
      ],
      recommendations: weakest.map((item) => `Ask for evidence that: ${item.charAt(0).toLowerCase()}${item.slice(1)}`),
      summary: `Agency evaluation score ${score}/100. Decision stage: ${stage}. Weakest checks: ${weakest.join(' | ')}`,
      priority: (stage === 'shortlisting' || stage === 'switching') && score < 80 ? 'P1' : 'P2',
    })
  }

  return (
    <div className={styles.toolForm}>
      <label className={styles.selectField}>
        <span>Where are you right now?</span>
        <select value={stage} onChange={(event) => setStage(event.target.value)}>
          <option value="research">Researching agencies</option>
          <option value="shortlisting">Shortlisting agencies now</option>
          <option value="switching">Considering switching an existing agency</option>
        </select>
      </label>
      <div className={styles.scoreQuestions}>
        {AGENCY_QUESTIONS.map((question, index) => (
          <div className={styles.scoreQuestion} key={question}>
            <span>{question}</span>
            <div className={styles.scoreButtons} role="group" aria-label={question}>
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  type="button"
                  key={value}
                  className={scores[index] === value ? styles.scoreActive : ''}
                  onClick={() => setScores((current) => current.map((item, itemIndex) => itemIndex === index ? value : item))}
                  aria-label={`${value} out of 5`}
                >{value}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="button" className={styles.primaryButton} onClick={calculate}>Calculate the agency score <ArrowRight size={16} /></button>
      <p className={styles.disclaimer}>Use this as a decision framework, not a substitute for reference checks, account access, contract review or commercial due diligence.</p>
    </div>
  )
}

const CRO_QUESTIONS = [
  ['Value proposition', 'A first-time visitor can understand what you sell, who it is for and why it is worth buying within the first screen.'],
  ['Mobile experience', 'Key shopping actions feel fast and clear on a real phone, not just in a desktop preview.'],
  ['Product page', 'PDPs answer sizing/fit, material, benefits, delivery, returns and objections before the shopper has to hunt.'],
  ['Social proof', 'Reviews, customer photos or credible proof appear close to the decision points where doubt happens.'],
  ['Offer clarity', 'Discounts, bundles, shipping thresholds and coupon rules are understandable without mental arithmetic.'],
  ['Collection UX', 'Filters, sorting, merchandising and product cards help shoppers narrow choices quickly.'],
  ['Cart', 'The cart clearly shows totals, delivery expectations and the next action without surprise add-ons.'],
  ['Checkout readiness', 'Payment, address and shipping expectations are consistent with what the storefront promised.'],
  ['Trust', 'Policies, contact details and brand proof make the store feel legitimate and easy to buy from.'],
  ['Measurement', 'GA4/pixels/CAPI and ecommerce events are reliable enough to diagnose funnel movement.'],
  ['Retention', 'Email/SMS/WhatsApp capture and post-purchase flows have a clear customer-value purpose.'],
  ['Experimentation', 'You have a ranked CRO/testing backlog instead of redesigning pages based only on opinions.'],
] as const

function CroScorecard({ onResult }: { onResult: (result: ResultPacket) => void }) {
  const [answers, setAnswers] = useState<number[]>(Array(CRO_QUESTIONS.length).fill(1))
  const [revenueBand, setRevenueBand] = useState('under-10')

  function calculate() {
    const score = Math.round((answers.reduce((sum, value) => sum + value, 0) / (CRO_QUESTIONS.length * 2)) * 100)
    const weak = answers
      .map((value, index) => ({ value, index }))
      .sort((a, b) => a.value - b.value)
      .slice(0, 3)
      .map(({ index }) => CRO_QUESTIONS[index])

    onResult({
      headline: `${score}/100 — ${score >= 80 ? 'strong foundation' : score >= 65 ? 'good base with visible leaks' : score >= 45 ? 'several conversion gaps worth prioritising' : 'the store needs foundational CRO work'}`,
      metrics: [
        { label: 'Shopify CRO score', value: `${score}/100` },
        { label: 'Priority gaps', value: weak.map(([name]) => name).join(', ') },
      ],
      recommendations: weak.map(([name, detail]) => `${name}: validate whether ${detail.charAt(0).toLowerCase()}${detail.slice(1)}`),
      summary: `Shopify CRO score ${score}/100. Revenue band ${revenueBand}. Priority gaps: ${weak.map(([name]) => name).join(', ')}.`,
      priority: (revenueBand === '10-25' || revenueBand === '25-plus') && score < 75 ? 'P1' : 'P2',
      monthlyRevenue: revenueBand === '25-plus' ? '₹25L+/month' : revenueBand === '10-25' ? '₹10L–₹25L/month' : 'Under ₹10L/month',
    })
  }

  return (
    <div className={styles.toolForm}>
      <label className={styles.selectField}>
        <span>Monthly online revenue (used only to prioritise the recommendations)</span>
        <select value={revenueBand} onChange={(event) => setRevenueBand(event.target.value)}>
          <option value="under-10">Under ₹10 lakh</option>
          <option value="10-25">₹10–₹25 lakh</option>
          <option value="25-plus">₹25 lakh+</option>
        </select>
      </label>
      <div className={styles.croQuestions}>
        {CRO_QUESTIONS.map(([name, question], index) => (
          <div className={styles.croQuestion} key={name}>
            <div><strong>{name}</strong><span>{question}</span></div>
            <div className={styles.choiceButtons} role="group" aria-label={name}>
              {[[0, 'No'], [1, 'Partly'], [2, 'Yes']].map(([value, label]) => (
                <button
                  type="button"
                  key={label}
                  className={answers[index] === value ? styles.choiceActive : ''}
                  onClick={() => setAnswers((current) => current.map((item, itemIndex) => itemIndex === index ? Number(value) : item))}
                >{label}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="button" className={styles.primaryButton} onClick={calculate}>Calculate my CRO score <ArrowRight size={16} /></button>
      <p className={styles.disclaimer}>This is a structured self-audit. A full CRO review would also inspect analytics, recordings, device behaviour, merchandising and the actual storefront.</p>
    </div>
  )
}

function ToolBody({ toolId, onResult }: { toolId: GrowthToolId; onResult: (result: ResultPacket) => void }) {
  if (toolId === 'd2c-profit-calculator') return <ProfitCalculator onResult={onResult} />
  if (toolId === 'meta-budget-planner') return <BudgetPlanner onResult={onResult} />
  if (toolId === 'd2c-agency-scorecard') return <AgencyScorecard onResult={onResult} />
  return <CroScorecard onResult={onResult} />
}

export default function BlogGrowthTool({ tool, postSlug, postTitle }: ToolProps) {
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<ResultPacket | null>(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [error, setError] = useState('')

  const resultId = useMemo(() => `${tool.id}-${postSlug}`.replace(/[^a-z0-9-]/gi, '-'), [tool.id, postSlug])

  async function sendResult(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!result || !email) return
    setStatus('sending')
    setError('')

    const attribution = getLeadAttribution()
    const leadPayload = {
      name: 'Growth tool user',
      email,
      source: `Growth Tool: ${tool.shortTitle}`,
      service: tool.service,
      businessVertical: tool.businessVertical,
      formType: `growth-tool:${tool.id}`,
      monthlyRevenue: result.monthlyRevenue ?? '',
      message: [
        `Tool: ${tool.shortTitle}`,
        `Intent cluster: ${tool.intentCluster}`,
        `Lead priority: ${result.priority}`,
        `Article: ${postTitle} (/blog/${postSlug})`,
        '',
        result.summary,
      ].join('\n'),
      ...attribution,
    }

    const emailPayload = {
      email,
      toolId: tool.id,
      toolName: tool.shortTitle,
      postSlug,
      postTitle,
      priority: result.priority,
      headline: result.headline,
      metrics: result.metrics,
      recommendations: result.recommendations,
      summary: result.summary,
    }

    try {
      const [leadResponse, resultResponse] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload),
        }),
        fetch('/api/tool-result', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailPayload),
        }),
      ])

      if (!leadResponse.ok) throw new Error('We could not save your result.')

      trackLead('form', {
        source: 'Growth Tool',
        tool_id: tool.id,
        intent_cluster: tool.intentCluster,
        blog_slug: postSlug,
        lead_priority: result.priority,
      })

      if (resultResponse.ok) {
        setStatus('sent')
      } else {
        setStatus('partial')
      }
    } catch (err) {
      setStatus('error')
      setError((err as Error).message || 'Something went wrong.')
    }
  }

  function handleResult(next: ResultPacket) {
    setResult(next)
    setStatus('idle')
    setTimeout(() => {
      document.getElementById(`${resultId}-result`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  return (
    <section className={styles.wrap} id={resultId}>
      <div className={styles.intro}>
        <div>
          <span className={styles.eyebrow}>{tool.eyebrow}</span>
          <h3>{tool.title}</h3>
          <p>{tool.description}</p>
        </div>
        <button
          type="button"
          className={styles.openButton}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? 'Close tool' : tool.ctaLabel}
          {open ? <ChevronDown size={17} /> : <ArrowRight size={17} />}
        </button>
      </div>

      {open && (
        <div className={styles.workspace}>
          <ToolBody toolId={tool.id} onResult={handleResult} />

          {result && (
            <div id={`${resultId}-result`} className={styles.resultWrap}>
              <ResultPanel result={result} />
              <div className={styles.emailGate}>
                {status === 'sent' ? (
                  <div className={styles.sentState}>
                    <Check size={20} />
                    <div>
                      <strong>Sent.</strong>
                      <span>Your full result is on its way. Reply to the email if you want Jatin to look at the numbers with you.</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <span className={styles.emailEyebrow}><Mail size={15} /> Keep the analysis</span>
                      <strong>Email me this result + the recommended next checks</strong>
                      <p>No newsletter opt-in is bundled into this. This email is the result you requested.</p>
                    </div>
                    <form onSubmit={sendResult} className={styles.emailForm}>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@company.com"
                        aria-label="Email address"
                      />
                      <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : 'Email my result'}
                      </button>
                    </form>
                    {status === 'partial' && <p className={styles.notice}>Your lead was saved, but email delivery could not be confirmed. The full result remains visible above.</p>}
                    {status === 'error' && <p className={styles.error}>{error}</p>}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {!open && (
        <button type="button" className={styles.mobileSticky} onClick={() => { setOpen(true); document.getElementById(resultId)?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>
          {tool.ctaLabel} <ArrowRight size={15} />
        </button>
      )}
    </section>
  )
}
