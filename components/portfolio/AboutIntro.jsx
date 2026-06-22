'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutIntro.module.css';

/* ── Updated stats ── */
const STATS = [
  { value: 187, suffix: '+', decimal: 0, label: 'Happy Brands'     },
  { value: 120, suffix: '%', decimal: 0, label: 'Higher ROAS'      },
  { value: 2.5, suffix: 'x', decimal: 1, label: 'Lifetime Value'   },
  { value: 98,  suffix: '%', decimal: 0, label: 'Satisfaction Rate' },
];

/* ── Headline split into words for stagger ── */
const HEADLINE = "India's most results-obsessed performance marketing agency.";
const WORDS    = HEADLINE.split(' ');

/* ── Counter hook ── */
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

function useCounter(target, suffix, decimal, trigger) {
  const [display, setDisplay] = useState('0' + suffix);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const duration = 2000;
    const start    = performance.now();
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

/* ── Stat card with flip-in animation ── */
function StatCard({ value, suffix, decimal, label, trigger, index }) {
  const display = useCounter(value, suffix, decimal, trigger);
  return (
    <motion.div
      className={`${styles.statCard} glass`}
      initial={{ opacity: 0, rotateX: 90 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1 + index * 0.15,
      }}
      style={{ transformPerspective: 800 }}
      whileHover={{ y: -6 }}
    >
      <span className={styles.statNumber} aria-live="polite">{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}

export default function AboutIntro() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`${styles.about} section-padding`}
      aria-labelledby="about-heading"
      ref={sectionRef}
    >
      <div className="container">
        <div className={styles.grid}>

          {/* ── Left column ── */}
          <div className={styles.left}>
            {/* Section tag */}
            <motion.div
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.div>

            {/* Headline — word-by-word stagger */}
            <h2 id="about-heading" className={`${styles.headline} section-headline`}>
              {WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  className={styles.word}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.05 + i * 0.06,
                  }}
                >
                  {word}{i < WORDS.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </h2>

            {/* Body — fades in after headline */}
            <motion.p
              className={styles.body}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.05 + WORDS.length * 0.06 + 0.4,
              }}
            >
              We don't do vanity metrics. We build revenue systems. From high-converting paid ad
              campaigns to full-funnel automation and conversion-optimized websites — every rupee
              we manage is tracked, tested, and squeezed for maximum return. 187+ brands trust
              us. The results speak louder than any pitch deck.
            </motion.p>
          </div>

          {/* ── Right column — stat counters with flip-in ── */}
          <div className={styles.right}>
            <div className={styles.statsGrid}>
              {STATS.map((s, i) => (
                <StatCard key={s.label} {...s} trigger={triggered} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}