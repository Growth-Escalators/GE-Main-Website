'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ResultsProof.module.css';

const RESULTS = [
  {
    value: 120, suffix: '%', decimal: 0,
    title: 'Higher ROAS',
    desc: 'Average across our e-commerce performance marketing clients',
    barFill: 82,
  },
  {
    value: 2.5, suffix: 'x', decimal: 1,
    title: 'Customer Lifetime Value',
    desc: 'Achieved through funnel automation and retention strategy',
    barFill: 68,
  },
  {
    value: 30, suffix: '%', decimal: 0,
    title: 'More Returns',
    desc: 'On the same ad spend investment through CRO and targeting',
    barFill: 55,
  },
];

const TICKER_ITEMS = [
  '₹8.9Cr+ Ad Spend Managed',
  '187+ Brands Scaled',
  '98% Client Satisfaction',
  '4.9★ Average Rating',
  '3+ Years of Proven Results',
  '120% Avg ROAS Improvement',
  '2.5x Customer Lifetime Value',
  'India\'s #1 Performance Agency',
];

function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

function useCounter(target, suffix, decimal, trigger) {
  const [display, setDisplay] = useState('0' + suffix);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now) => {
      const progress  = Math.min((now - start) / duration, 1);
      const val       = target * easeOutQuart(progress);
      const formatted = decimal > 0 ? val.toFixed(decimal) : Math.floor(val);
      setDisplay(formatted + suffix);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else setDisplay((decimal > 0 ? target.toFixed(decimal) : target) + suffix);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger, target, suffix, decimal]);

  return display;
}

function ResultCard({ value, suffix, decimal, title, desc, barFill, trigger, delay }) {
  const display = useCounter(value, suffix, decimal, trigger);
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      whileHover={{ y: -6 }}
    >
      <span className={styles.number} aria-live="polite">{display}</span>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>

      {/* Animated progress bar */}
      <div className={styles.barTrack} aria-hidden="true">
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={trigger ? { width: barFill + '%' } : { width: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function ResultsProof() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      id="results"
      className={styles.section}
      ref={sectionRef}
      aria-labelledby="results-heading"
    >
      {/* Background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={`section-tag ${styles.tag}`}>Proven Results</div>
          <h2 id="results-heading" className={styles.headline}>Numbers that don't lie.</h2>
          <p className={styles.subhead}>Real clients. Real campaigns. Real returns.</p>
        </motion.div>

        <div className={styles.grid}>
          {RESULTS.map((r, i) => (
            <ResultCard key={r.title} {...r} trigger={triggered} delay={i * 0.12} />
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className={styles.ctaLabel}>Want results like these?</p>
          <a href="#contact" className={`btn-primary ${styles.ctaBtn}`} aria-label="Book free strategy call">
            Book Free Strategy Call
          </a>
        </motion.div>
      </div>

      {/* Bottom ticker strip */}
      <div className={styles.tickerStrip} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {doubled.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDot}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}