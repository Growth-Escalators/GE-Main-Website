'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

/* ── Typewriter words ── */
const WORDS = ['Escalate','Dominate','Disrupt','Accelerate','Transform','Outperform','Scale','Reinvent','Outgrow','Elevate'];

const STAT_PILLS = [
  { emoji: '🚀', value: '187+',  label: 'Brands'    },
  { emoji: '📈', value: '120%',  label: 'Avg ROAS'  },
  { emoji: '💰', value: '2.5x',  label: 'CLTV'      },
];

/* ── Trusted brands — self-hosted.
   `logo` is optional: drop a grayscale SVG/PNG into /public/brands/ and
   reference it here (e.g. logo: '/brands/paraiso.svg'). Until then we
   render a styled initial chip in the brand's gradient — no external
   dependency on Google's favicon API. */
const BRANDS = [
  { name: 'Growth Escalators',  initials: 'GE', gradient: 'linear-gradient(135deg, #FF6B35, #FF9A5A)' },
  { name: 'Dr. Dheeraj Dubay',  initials: 'DD', gradient: 'linear-gradient(135deg, #2563eb, #1a4bb5)' },
  { name: 'Elixzor AI',         initials: 'EX', gradient: 'linear-gradient(135deg, #6d28d9, #3b0f72)' },
  { name: 'SN Herbals',         initials: 'SN', gradient: 'linear-gradient(135deg, #00D4AA, #00b894)' },
  { name: 'Cklakart',           initials: 'CK', gradient: 'linear-gradient(135deg, #FF6B35, #ff8c5a)' },
  { name: 'Atatica Studios',    initials: 'AT', gradient: 'linear-gradient(135deg, #1a1a2e, #6d28d9)' },
  { name: 'Paraiso Comfort',    initials: 'PA', gradient: 'linear-gradient(135deg, #a855f7, #6d28d9)' },
  { name: 'Credo World',        initials: 'CW', gradient: 'linear-gradient(135deg, #2d1500, #ff9554)' },
  { name: 'Yellow Diaries',     initials: 'YD', gradient: 'linear-gradient(135deg, #f7e35b, #0b0a08)' },
  { name: 'Genosub',            initials: 'GS', gradient: 'linear-gradient(135deg, #00D4AA, #6C63FF)' },
  { name: 'ExZept',             initials: 'EZ', gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)' },
  { name: 'Fashion Hub',        initials: 'FH', gradient: 'linear-gradient(135deg, #FF6B35, #6C63FF)' },
];

const ROW1 = [...BRANDS, ...BRANDS];
const ROW2 = [...BRANDS.slice(6), ...BRANDS.slice(0,6), ...BRANDS.slice(6), ...BRANDS.slice(0,6)];

/* ── Word cycler ──
 * Cycles an index through the words array on a fixed interval.
 * Pauses when the tab is hidden so we don't churn renders in the background.
 */
function useCyclingWord(words, intervalMs = 2400) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    let id;
    const start = () => {
      id = window.setInterval(
        () => setIdx((i) => (i + 1) % words.length),
        intervalMs,
      );
    };
    const stop = () => { if (id) { clearInterval(id); id = null; } };
    const onVis = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [words, intervalMs]);
  return idx;
}

/* ── Smooth scroll helper ── */
function smoothScrollTo(href) {
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function Hero() {
  const heroBtnRef  = useRef(null);
  const auditBtnRef = useRef(null);
  const activeIdx   = useCyclingWord(WORDS);

  const makeMagnetic = (ref) => ({
    onMouseMove: (e) => {
      const el = ref.current; if (!el) return;
      const r  = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.35}px,${(e.clientY-r.top-r.height/2)*0.35}px) scale(1.04)`;
    },
    onMouseLeave: () => {
      const el = ref.current; if (!el) return;
      el.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)';
      el.style.transform  = '';
      setTimeout(() => { if (el) el.style.transition = ''; }, 400);
    },
  });

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb4}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb5}`} aria-hidden="true" />
      <div className={`${styles.aurora} aurora-bg`}   aria-hidden="true" />

      <div className={`${styles.content} container`}>
        {/* Badge */}
        <motion.div className={`${styles.badge} glass-pill`} {...fadeUp(0)}>
          <span>🏆</span> India's #1 Performance Marketing Agency
        </motion.div>

        {/* H1 with cycling verb — only the active word lives in the DOM so
            the slot sizes naturally to whichever word is showing (no big gap
            for short words like "Scale"). The CSS animation re-fires every
            time React remounts the span via the changing `key`. */}
        <motion.h1 className={styles.h1} {...fadeUp(0.1)}>
          We Don't Just Market.<br />
          We{' '}
          <span className={styles.wordSlot} aria-live="polite" aria-atomic="true">
            <span
              key={WORDS[activeIdx]}
              className={`gradient-text ${styles.cycleWord}`}
            >
              {WORDS[activeIdx]}
            </span>
          </span>{' '}
          Brands.
        </motion.h1>

        {/* Subheadline */}
        <motion.p className={styles.sub} {...fadeUp(0.2)}>
          187+ brands scaled. ₹8.9 Crores in ad spend managed.<br className={styles.hideMobile} />
          Results that actually move the needle.
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctas} {...fadeUp(0.3)}>
          <a href="#work" ref={heroBtnRef}
            className={`btn-primary ${styles.ctaMain}`}
            onClick={e => { e.preventDefault(); smoothScrollTo('#work'); }}
            aria-label="View our work"
            {...makeMagnetic(heroBtnRef)}>
            View Our Work
          </a>
          <a href="#contact" ref={auditBtnRef}
            className={`btn-outline ${styles.ctaOutline}`}
            onClick={e => { e.preventDefault(); smoothScrollTo('#contact'); }}
            aria-label="Get free audit"
            {...makeMagnetic(auditBtnRef)}>
            Get Free Audit →
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div className={styles.statPills} {...fadeUp(0.4)}>
          {STAT_PILLS.map(({ emoji, value, label }) => (
            <div key={label} className={`${styles.statPill} glass-pill`}>
              <span className={styles.statEmoji}>{emoji}</span>
              <strong>{value}</strong>&nbsp;{label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Trusted by — dual row marquee with logos ── */}
      <motion.div className={styles.trustedWrap} {...fadeUp(0.5)}>
        <p className={styles.trustedLabel}>Trusted by growing brands →</p>

        {/* Row 1 — left */}
        <div className={styles.marqueeOuter} aria-label="Client logos row 1">
          <div className={`${styles.marqueeInner} ${styles.rowLeft}`}>
            {ROW1.map((b, i) => (
              <span key={i} className={`${styles.brandPill} glass-pill`}>
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt=""
                    className={styles.brandLogo}
                    loading="lazy"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className={styles.brandLogo}
                    aria-hidden="true"
                    style={{
                      background: b.gradient,
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
                    {b.initials}
                  </span>
                )}
                <span className={styles.brandName}>{b.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className={`${styles.marqueeOuter} ${styles.marqueeRow2}`} aria-label="Client logos row 2">
          <div className={`${styles.marqueeInner} ${styles.rowRight}`}>
            {ROW2.map((b, i) => (
              <span key={i} className={`${styles.brandPill} glass-pill`}>
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt=""
                    className={styles.brandLogo}
                    loading="lazy"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className={styles.brandLogo}
                    aria-hidden="true"
                    style={{
                      background: b.gradient,
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
                    {b.initials}
                  </span>
                )}
                <span className={styles.brandName}>{b.name}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}