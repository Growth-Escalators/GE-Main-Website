'use client'

import { useState } from 'react'
import styles from './CommercialLandingPage.module.css'

type Service = { title: string; body: string }

const SIGNALS = ['Demand', 'Conversion', 'Efficiency', 'Retention']
const VALUES = [
  [68, 54, 48, 42],
  [58, 76, 62, 50],
  [52, 82, 71, 56],
  [76, 64, 58, 70],
  [61, 72, 84, 68],
  [73, 78, 81, 76],
  [65, 69, 74, 82],
]

export default function CommercialCapabilities({ services, industryLabel }: { services: Service[]; industryLabel?: string }) {
  const [active, setActive] = useState(0)
  const current = services[active] ?? services[0]
  const values = VALUES[active % VALUES.length]

  return (
    <div className={styles.capabilityLayout}>
      <div className={styles.capabilityList}>
        {services.map((service, index) => (
          <button
            key={service.title}
            type="button"
            className={`${styles.capabilityRow} ${active === index ? styles.capabilityActive : ''}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            data-cm-card
          >
            <span className={styles.capabilityIndex}>0{index + 1}</span>
            <span className={styles.capabilityText}>
              <strong>{service.title}</strong>
              <small>{service.body}</small>
            </span>
            <span className={styles.capabilityArrow}>↗</span>
          </button>
        ))}
      </div>

      <div className={styles.capabilityVisual} data-cm-reveal>
        <div className={styles.capVisualTop}>
          <span>{industryLabel ?? 'Growth system'} / live model</span>
          <b>Outcome view</b>
        </div>
        <div className={styles.capVisualTitle}>
          <small>Active lever</small>
          <strong>{current?.title}</strong>
        </div>
        <div className={styles.signalBars}>
          {SIGNALS.map((signal, index) => (
            <div className={styles.signal} key={signal}>
              <div><span>{signal}</span><b>{values[index]}%</b></div>
              <i><em style={{ width: `${values[index]}%` }} /></i>
            </div>
          ))}
        </div>
        <div className={styles.systemPath}>
          {['Insight', 'Build', 'Test', 'Measure', 'Scale'].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <b>→</b>}</div>
          ))}
        </div>
        <p>{current?.body}</p>
      </div>
    </div>
  )
}
