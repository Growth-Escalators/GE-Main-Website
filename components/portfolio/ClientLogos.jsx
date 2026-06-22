'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ClientLogos.module.css';

/* Client brand list — self-hosted, no external favicon API.
   Add `logo: '/brands/<file>.svg'` to any entry once a real logo file
   lands in /public/brands/, otherwise the initial-circle renders. */
const BRANDS = [
  { name: 'Paraiso Comfortwears', initials: 'PA', gradient: 'linear-gradient(135deg, #a855f7, #6d28d9)' },
  { name: 'Odra Organics',        initials: 'OO', gradient: 'linear-gradient(135deg, #00D4AA, #00b894)' },
  { name: 'Dr. Dheeraj Dubay',    initials: 'DD', gradient: 'linear-gradient(135deg, #2563eb, #1a4bb5)' },
  { name: 'Elixzor AI',           initials: 'EX', gradient: 'linear-gradient(135deg, #6d28d9, #3b0f72)' },
  { name: 'SN Herbals',           initials: 'SN', gradient: 'linear-gradient(135deg, #00b894, #1f9d50)' },
  { name: 'Samkri House',         initials: 'SH', gradient: 'linear-gradient(135deg, #FF9A5A, #FF6B35)' },
  { name: 'Gentle Panda',         initials: 'GP', gradient: 'linear-gradient(135deg, #1a1a2e, #6C63FF)' },
  { name: 'Cklakart',             initials: 'CK', gradient: 'linear-gradient(135deg, #FF6B35, #ff8c5a)' },
  { name: 'Atatica Studios',      initials: 'AT', gradient: 'linear-gradient(135deg, #1a1a2e, #6d28d9)' },
  { name: 'Credo World',          initials: 'CW', gradient: 'linear-gradient(135deg, #2d1500, #ff9554)' },
  { name: 'Yellow Diaries',       initials: 'YD', gradient: 'linear-gradient(135deg, #f7e35b, #0b0a08)' },
  { name: 'Genosub',              initials: 'GS', gradient: 'linear-gradient(135deg, #00D4AA, #6C63FF)' },
  { name: 'ExZept',               initials: 'EZ', gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)' },
  { name: 'Fashion Hub',          initials: 'FH', gradient: 'linear-gradient(135deg, #FF6B35, #6C63FF)' },
  { name: 'Dr. Mukesh',           initials: 'DM', gradient: 'linear-gradient(135deg, #3a0f1a, #ff8aa6)' },
  { name: 'Dr. Shubham',          initials: 'DS', gradient: 'linear-gradient(135deg, #0a2a6e, #2563eb)' },
  { name: 'Criativcity',          initials: 'CR', gradient: 'linear-gradient(135deg, #6C63FF, #FF6B35)' },
  { name: 'Flight Ticket Fare',   initials: 'FT', gradient: 'linear-gradient(135deg, #0d1330, #7ad7ff)' },
];

// Three rows with different offsets for variety
const ROW1 = [...BRANDS,              ...BRANDS             ];
const ROW2 = [...BRANDS.slice(5),  ...BRANDS.slice(0, 5), ...BRANDS.slice(5),  ...BRANDS.slice(0, 5) ];
const ROW3 = [...BRANDS.slice(10), ...BRANDS.slice(0,10), ...BRANDS.slice(10), ...BRANDS.slice(0,10) ];

const STATS = [
  { end: 187, suffix: '+', label: 'Brands Scaled'     },
  { end: 8.9, suffix: 'Cr+', label: 'Ad Spend Managed', decimal: 1, prefix: '₹' },
  { end: 98,  suffix: '%', label: 'Satisfaction Rate'  },
  { end: 4.9, suffix: '★', label: 'Avg Google Rating', decimal: 1 },
];

function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

function useCounter(end, decimal, trigger) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!trigger) return;
    const dur = 1800;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const v = end * easeOutQuart(p);
      setVal(decimal ? parseFloat(v.toFixed(decimal)) : Math.floor(v));
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setVal(end);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [trigger, end, decimal]);
  return val;
}

function StatItem({ end, suffix, label, decimal, prefix, trigger, delay }) {
  const val = useCounter(end, decimal, trigger);
  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className={styles.statNum} aria-live="polite">
        {prefix || ''}{decimal ? val.toFixed(decimal) : val}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}

function BrandPill({ brand }) {
  return (
    <span className={styles.pill}>
      {brand.logo ? (
        <img
          src={brand.logo}
          alt=""
          className={styles.pillLogo}
          loading="lazy"
          aria-hidden="true"
        />
      ) : (
        <span
          className={styles.pillLogo}
          aria-hidden="true"
          style={{
            background: brand.gradient,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: 10,
            letterSpacing: '0.02em',
            borderRadius: '50%',
          }}
        >
          {brand.initials}
        </span>
      )}
      <span className={styles.pillName}>{brand.name}</span>
    </span>
  );
}

export default function ClientLogos() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="clients" className={styles.section} ref={ref} aria-labelledby="clients-heading">
      {/* Background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />

      <div className={`${styles.top} container`}>
        {/* Section tag */}
        <motion.div
          className="section-tag"
          style={{ justifyContent: 'center', margin: '0 auto 20px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Trusted By
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="clients-heading"
          className={styles.headline}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
        >
          Join <span className="gradient-text">100+ brands</span><br />growing with us.
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          From Indian startups to national brands — one agency, one goal: your growth.
        </motion.p>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} trigger={triggered} delay={0.1 + i * 0.08} />
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className={styles.divider} aria-hidden="true" />

      {/* Marquee rows */}
      <div className={styles.marqueeSection} aria-label="Client brand logos">
        {/* Row 1 — left */}
        <div className={styles.rowWrap}>
          <div className={`${styles.row} ${styles.rowLeft}`}>
            {ROW1.map((b, i) => <BrandPill key={i} brand={b} />)}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className={styles.rowWrap}>
          <div className={`${styles.row} ${styles.rowRight}`}>
            {ROW2.map((b, i) => <BrandPill key={i} brand={b} />)}
          </div>
        </div>

        {/* Row 3 — left, slower */}
        <div className={styles.rowWrap}>
          <div className={`${styles.row} ${styles.rowLeft3}`}>
            {ROW3.map((b, i) => <BrandPill key={i} brand={b} />)}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className={`${styles.bottomCta} container`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="#contact" className="btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
          Become Our Next Success Story →
        </a>
      </motion.div>
    </section>
  );
}