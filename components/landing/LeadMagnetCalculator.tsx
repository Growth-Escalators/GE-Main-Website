'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LeadMagnetCalculator.module.css'
import { trackLead } from '@/lib/analytics'

/* ── Config shapes ─────────────────────────────────────────────────────────
   A single, config-driven calculator that powers every niche page. Three
   archetypes; each page's content.ts picks one and supplies niche numbers.
   All maths run client-side; the DETAILED breakdown is gated behind a compact
   name/email/phone capture that POSTs to /api/lead (source-tagged), so the
   calculator doubles as the page's primary lead magnet. */

type RangeCfg = { label?: string; min: number; max: number; step: number; default: number }
type NumCfg = { label?: string; min?: number; max?: number; step?: number; default: number }

type CalcBase = {
  tag?: string
  headline?: string
  subhead?: string
  /** Lead `source` label, e.g. "Calculator — Dental Jaipur". */
  source: string
  benchmark?: string
  formHeadline?: string
  formSubhead?: string
}

export type CalculatorConfig =
  | (CalcBase & {
      type: 'local-booking'
      /** Plural noun for the niche customer, e.g. "patients", "diners", "bookings". */
      unitPlural: string
      budget?: Partial<RangeCfg>
      /** Average value of one won customer / booking (₹). */
      value: NumCfg
      /** Cost-per-lead benchmark range (₹) for this niche. */
      cplLow: number
      cplHigh: number
      /** Share of leads that become paying customers (0–1). */
      closeRate: number
    })
  | (CalcBase & {
      type: 'd2c-roas'
      revenueGoal?: Partial<RangeCfg>
      /** Average order value (₹). */
      aov: NumCfg
      targetRoas?: Partial<RangeCfg>
    })
  | (CalcBase & {
      type: 'membership-ltv'
      /** Monthly membership / package fee (₹). */
      fee: NumCfg
      retentionMonths?: Partial<RangeCfg>
      newMembersGoal?: Partial<RangeCfg>
      /** Cost-per-lead benchmark (₹) for the ad-budget estimate. */
      cplBenchmark: number
    })

/* ── Formatting helpers (Indian numbering) ─────────────────────────────────── */
const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')
const inrCompact = (n: number) => {
  if (n >= 1e7) return '₹' + (n / 1e7).toFixed(n % 1e7 === 0 ? 0 : 1) + ' Cr'
  if (n >= 1e5) return '₹' + (n / 1e5).toFixed(n % 1e5 === 0 ? 0 : 1) + ' L'
  return '₹' + Math.round(n).toLocaleString('en-IN')
}
const round = (n: number) => Math.round(n).toLocaleString('en-IN')

const RANGE_DEFAULTS: Record<string, RangeCfg> = {
  budget: { label: 'Your monthly ad budget', min: 10000, max: 500000, step: 5000, default: 50000 },
  revenueGoal: { label: 'Monthly revenue goal', min: 100000, max: 5000000, step: 50000, default: 500000 },
  targetRoas: { label: 'Target ROAS', min: 1, max: 10, step: 0.5, default: 3 },
  retentionMonths: { label: 'Average membership length (months)', min: 1, max: 36, step: 1, default: 8 },
  newMembersGoal: { label: 'New members you want / month', min: 5, max: 500, step: 5, default: 40 },
}
const mergeRange = (key: string, partial?: Partial<RangeCfg>): RangeCfg => ({
  ...RANGE_DEFAULTS[key],
  ...(partial ?? {}),
})

type Result = {
  teaserValue: string
  teaserLabel: string
  breakdown: { label: string; value: string; highlight?: boolean }[]
  /** Human-readable summary folded into the lead message (CRM + auto-responder). */
  summary: string
}

/* ── Pure compute — one branch per archetype ───────────────────────────────── */
function compute(cfg: CalculatorConfig, inputs: Record<string, number>): Result {
  if (cfg.type === 'local-booking') {
    const budget = inputs.budget
    const value = inputs.value
    const avgCpl = (cfg.cplLow + cfg.cplHigh) / 2
    const leads = budget / avgCpl
    const leadsLow = budget / cfg.cplHigh
    const leadsHigh = budget / cfg.cplLow
    const customers = leads * cfg.closeRate
    const revenue = customers * value
    const roi = revenue / budget
    return {
      teaserValue: round(Math.round(leads)),
      teaserLabel: `qualified leads / month at ${inrCompact(budget)} spend`,
      breakdown: [
        { label: 'Leads per month (realistic range)', value: `${round(Math.round(leadsLow))}–${round(Math.round(leadsHigh))}` },
        { label: `New ${cfg.unitPlural} / month`, value: `~${round(Math.round(customers))}`, highlight: true },
        { label: 'Estimated new revenue / month', value: inrCompact(revenue), highlight: true },
        { label: 'Return on ad spend', value: `${roi.toFixed(1)}×` },
      ],
      summary: `Budget ${inr(budget)}/mo · avg value ${inr(value)} · ~${Math.round(leads)} leads → ~${Math.round(customers)} ${cfg.unitPlural}/mo → ${inrCompact(revenue)} revenue (${roi.toFixed(1)}× ROAS).`,
    }
  }
  if (cfg.type === 'd2c-roas') {
    const revenueGoal = inputs.revenueGoal
    const aov = inputs.aov
    const targetRoas = inputs.targetRoas
    const budget = revenueGoal / targetRoas
    const orders = revenueGoal / aov
    const cpa = budget / orders
    return {
      teaserValue: inrCompact(budget),
      teaserLabel: `monthly ad budget to hit ${inrCompact(revenueGoal)}`,
      breakdown: [
        { label: 'Orders needed / month', value: `~${round(Math.round(orders))}`, highlight: true },
        { label: 'Max cost per order (CPA)', value: inr(cpa) },
        { label: 'Target ROAS', value: `${targetRoas}×` },
        { label: 'Monthly ad budget', value: inrCompact(budget), highlight: true },
      ],
      summary: `Revenue goal ${inrCompact(revenueGoal)}/mo · AOV ${inr(aov)} · target ${targetRoas}× ROAS → ${inrCompact(budget)} budget, ~${Math.round(orders)} orders, ${inr(cpa)} CPA.`,
    }
  }
  // membership-ltv
  const fee = inputs.fee
  const months = inputs.retentionMonths
  const goal = inputs.newMembersGoal
  const ltv = fee * months
  const maxCac = ltv / 3
  const mrrAdded = goal * fee
  const budgetToGoal = goal * cfg.cplBenchmark
  return {
    teaserValue: inrCompact(ltv),
    teaserLabel: `lifetime value of one member (${months} mo × ${inr(fee)})`,
    breakdown: [
      { label: 'Max you can spend to win one (CAC)', value: inr(maxCac), highlight: true },
      { label: `New recurring revenue at ${goal} members`, value: `${inrCompact(mrrAdded)}/mo`, highlight: true },
      { label: 'Ad budget to hit that (est.)', value: inrCompact(budgetToGoal) },
      { label: 'Healthy LTV : CAC target', value: '3 : 1' },
    ],
    summary: `Fee ${inr(fee)}/mo · ${months} mo retention → LTV ${inrCompact(ltv)} · max CAC ${inr(maxCac)} · goal ${goal} members = ${inrCompact(mrrAdded)}/mo new recurring.`,
  }
}

/* ── Which range/number fields each archetype exposes ──────────────────────── */
function fieldsFor(cfg: CalculatorConfig): { ranges: [string, RangeCfg][]; nums: [string, NumCfg][] } {
  if (cfg.type === 'local-booking') {
    return {
      ranges: [['budget', mergeRange('budget', cfg.budget)]],
      nums: [['value', { label: 'Average value of one customer (₹)', step: 100, ...cfg.value }]],
    }
  }
  if (cfg.type === 'd2c-roas') {
    return {
      ranges: [
        ['revenueGoal', mergeRange('revenueGoal', cfg.revenueGoal)],
        ['targetRoas', mergeRange('targetRoas', cfg.targetRoas)],
      ],
      nums: [['aov', { label: 'Average order value (₹)', step: 100, ...cfg.aov }]],
    }
  }
  return {
    ranges: [
      ['retentionMonths', mergeRange('retentionMonths', cfg.retentionMonths)],
      ['newMembersGoal', mergeRange('newMembersGoal', cfg.newMembersGoal)],
    ],
    nums: [['fee', { label: 'Monthly membership / package fee (₹)', step: 100, ...cfg.fee }]],
  }
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadMagnetCalculator({ config }: { config: CalculatorConfig }) {
  const { ranges, nums } = useMemo(() => fieldsFor(config), [config])

  const [inputs, setInputs] = useState<Record<string, number>>(() => {
    const seed: Record<string, number> = {}
    ranges.forEach(([k, r]) => { seed[k] = r.default })
    nums.forEach(([k, n]) => { seed[k] = n.default })
    return seed
  })

  const result = useMemo(() => compute(config, inputs), [config, inputs])

  const [revealed, setRevealed] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const set = (key: string, v: number) => setInputs((prev) => ({ ...prev, [key]: v }))

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = {
      source: config.source,
      message: `[${config.type} calculator] ${result.summary}`,
    }
    data.forEach((v, k) => { payload[k] = String(v) })

    const minWait = new Promise((r) => setTimeout(r, 200))
    try {
      const [res] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
        minWait,
      ])
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Server returned ${res.status}`)
      }
      setStatus('success')
      setRevealed(true)
      trackLead('form', { source: config.source, tool: 'calculator' })
    } catch (err) {
      setStatus('error')
      setErrorMsg((err as Error).message || 'Something went wrong')
    }
  }

  const submitting = status === 'submitting'

  return (
    <section className={styles.section} id="calculator" aria-label="Free calculator">
      <div className={styles.aurora} aria-hidden>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>
      <div className={`${styles.inner} container-x`}>
        <div className={styles.header}>
          <span className="section-tag">{config.tag ?? 'FREE TOOL'}</span>
          <h2 className={styles.headline}>{config.headline ?? 'See the numbers before you spend a rupee'}</h2>
          {config.subhead && <p className={styles.subhead}>{config.subhead}</p>}
        </div>

        <div className={`${styles.card} glass`}>
          {/* ── Inputs ── */}
          <div className={styles.inputs}>
            {ranges.map(([key, r]) => (
              <div key={key} className={styles.field}>
                <div className={styles.fieldTop}>
                  <label htmlFor={`calc-${key}`}>{r.label}</label>
                  <span className={styles.fieldValue}>
                    {key === 'targetRoas'
                      ? `${inputs[key]}×`
                      : key === 'retentionMonths'
                        ? `${inputs[key]} mo`
                        : key === 'newMembersGoal'
                          ? round(inputs[key])
                          : inrCompact(inputs[key])}
                  </span>
                </div>
                <input
                  id={`calc-${key}`}
                  className={styles.range}
                  type="range"
                  min={r.min}
                  max={r.max}
                  step={r.step}
                  value={inputs[key]}
                  onChange={(e) => set(key, Number(e.target.value))}
                />
              </div>
            ))}
            {nums.map(([key, n]) => (
              <div key={key} className={styles.field}>
                <div className={styles.fieldTop}>
                  <label htmlFor={`calc-${key}`}>{n.label}</label>
                </div>
                <input
                  id={`calc-${key}`}
                  className={styles.numberInput}
                  type="number"
                  inputMode="numeric"
                  min={n.min ?? 0}
                  step={n.step ?? 100}
                  value={inputs[key]}
                  onChange={(e) => set(key, Number(e.target.value) || 0)}
                />
              </div>
            ))}
          </div>

          {/* ── Result ── */}
          <div className={styles.result}>
            <div className={styles.teaser}>
              <div className={styles.teaserValue}>{result.teaserValue}</div>
              <div className={styles.teaserLabel}>{result.teaserLabel}</div>
            </div>

            {revealed ? (
              <motion.div
                className={styles.breakdown}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ul className={styles.breakdownList}>
                  {result.breakdown.map((b) => (
                    <li key={b.label} className={`${styles.breakdownRow} ${b.highlight ? styles.breakdownHi : ''}`}>
                      <span className={styles.breakdownLabel}>{b.label}</span>
                      <span className={styles.breakdownValue}>{b.value}</span>
                    </li>
                  ))}
                </ul>
                {config.benchmark && <p className={styles.benchmark}>{config.benchmark}</p>}
                <p className={styles.successNote}>
                  ✓ We&rsquo;ve emailed you this breakdown plus a short case study. Want us to build
                  the plan? We reply within 24 hours (weekdays).
                </p>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.formHeadline}>{config.formHeadline ?? 'Unlock your full breakdown'}</p>
                <p className={styles.formSub}>
                  {config.formSubhead ?? 'See the numbers, benchmarks and a real case study — sent straight to your inbox, free.'}
                </p>
                <div className={styles.formRow}>
                  <input name="name" type="text" required autoComplete="name" placeholder="Your name" aria-label="Your name" />
                  <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone" aria-label="Phone" />
                </div>
                <input name="email" type="email" required autoComplete="email" placeholder="Email" aria-label="Email" />
                <button type="submit" className={`btn-primary ${styles.submit}`} disabled={submitting}>
                  {submitting ? 'Crunching…' : 'Show me the full breakdown'}
                </button>
                {status === 'error' && (
                  <p className={styles.error} role="alert">
                    Couldn&rsquo;t submit{errorMsg ? ` (${errorMsg})` : ''}. Please try again or WhatsApp us at +91 77338 88883.
                  </p>
                )}
                <p className={styles.disclaimer}>
                  Estimates only — actuals depend on offer, creative and market. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
