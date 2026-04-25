'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OurProcess.module.css';

const STEPS = [
  {
    num: '01', title: 'Discovery', short: 'We audit your brand, market, and competitors.',
    details: [
      'Deep-dive brand and competitor audit',
      'Audience research and customer persona mapping',
      'Identifying growth gaps and quick-win opportunities',
    ],
  },
  {
    num: '02', title: 'Strategy', short: 'We build a custom data-backed growth roadmap.',
    details: [
      'Custom performance marketing roadmap',
      'Channel selection, budget allocation, and KPI setting',
      'Creative brief and funnel architecture design',
    ],
  },
  {
    num: '03', title: 'Execute', short: 'Campaigns, content, funnels, and websites go live.',
    details: [
      'Ads, landing pages, and funnels go live',
      'Creative assets produced and deployed across channels',
      'Tracking, pixels, and analytics fully configured',
    ],
  },
  {
    num: '04', title: 'Optimise', short: 'Weekly reviews. A/B testing. We squeeze every rupee.',
    details: [
      'Weekly performance reviews with data-driven adjustments',
      'A/B testing on creatives, copy, and landing pages',
      'Cost-per-acquisition reduction through continuous iteration',
    ],
  },
  {
    num: '05', title: 'Scale', short: 'Double down on what works. Repeat. Grow.',
    details: [
      'Double down on winning campaigns and channels',
      'Expand to new audiences and geographies',
      'Build compounding growth systems that work 24/7',
    ],
  },
];

const ICONS = ['🔍', '📐', '🚀', '⚙️', '📈'];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(null);

  const toggle = (num) => setActiveStep(prev => prev === num ? null : num);

  return (
    <section id="process" className={`${styles.section} section-padding`} aria-labelledby="process-heading">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-tag">How We Work</div>
          <h2 id="process-heading" className="section-headline">From zero to scaled in 5 steps.</h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className={styles.timeline}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.line} aria-hidden="true" />

          {STEPS.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <button
                className={`${styles.numPill}${activeStep === step.num ? ' ' + styles.numPillActive : ''}`}
                onClick={() => toggle(step.num)}
                aria-expanded={activeStep === step.num}
                aria-label={`Step ${step.num}: ${step.title}`}
              >
                {step.num}
              </button>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepShort}>{step.short}</p>
            </div>
          ))}
        </motion.div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          {activeStep && (() => {
            const step = STEPS.find(s => s.num === activeStep);
            const idx  = STEPS.findIndex(s => s.num === activeStep);
            return (
              <motion.div
                key={activeStep}
                className={`${styles.detailCard} glass`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h4 className={styles.detailTitle}>{ICONS[idx]} {step.title}</h4>
                <ul className={styles.detailList}>
                  {step.details.map(d => (
                    <li key={d} className={styles.detailItem}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}