'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ClientLogos.module.css';

const BRANDS = [
  { name: 'Paraiso Comfortwears', domain: 'instagram.com'           },
  { name: 'Odra Organics',        domain: 'instagram.com'           },
  { name: 'Dr. Dheeraj Dubay',    domain: 'drdubay.in'              },
  { name: 'Elixzor AI',           domain: 'elixzor.com'             },
  { name: 'SN Herbals',           domain: 'snherbals.com'           },
  { name: 'Samkri House',         domain: 'amazon.in'               },
  { name: 'Gentle Panda',         domain: 'amazon.in'               },
  { name: 'Cklakart',             domain: 'cklakart.com'            },
  { name: 'Atatica Studios',      domain: 'ataticastudios.com'      },
  { name: 'Credo World',          domain: 'credoworld.in'           },
  { name: 'Yellow Diaries',       domain: 'yellowdiaries.in'        },
  { name: 'Genosub',              domain: 'genosub.com'             },
  { name: 'ExZept',               domain: 'exzept.com'              },
  { name: 'Fashion Hub',          domain: 'fashionhub.in'           },
  { name: 'Dr. Mukesh',           domain: 'practo.com'              },
  { name: 'Dr. Shubham',          domain: 'practo.com'              },
  { name: 'Criativcity',          domain: 'criativcity.com'         },
  { name: 'Flight Ticket Fare',   domain: 'flightticketfare.com'    },
];

// Three rows with different offsets for variety
const ROW1 = [...BRANDS,              ...BRANDS             ];
const ROW2 = [...BRANDS.slice(5),  ...BRANDS.slice(0, 5), ...BRANDS.slice(5),  ...BRANDS.slice(0, 5) ];
const ROW3 = [...BRANDS.slice(10), ...BRANDS.slice(0,10), ...BRANDS.slice(10), ...BRANDS.slice(0,10) ];

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

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
  const [err, setErr] = useState(false);
  return (
    <span className={styles.pill}>
      {!err && (
        <img
          src={faviconUrl(brand.domain)}
          alt=""
          className={styles.pillLogo}
          loading="lazy"
          aria-hidden="true"
          onError={() => setErr(true)}
        />
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
          From Jaipur startups to national brands — one agency, one goal: your growth.
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