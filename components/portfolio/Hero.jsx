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

/* ── Trusted brands with Google favicon + name ── */
const BRANDS = [
  { name: 'Growth Escalators',    domain: 'growthescalators.com'      },
  { name: 'Dr. Dheeraj Dubay',   domain: 'drdubay.in'                },
  { name: 'Elixzor AI',          domain: 'elixzor.com'               },
  { name: 'SN Herbals',          domain: 'snherbals.com'             },
  { name: 'Cklakart',            domain: 'cklakart.com'              },
  { name: 'Atatica Studios',     domain: 'ataticastudios.com'        },
  { name: 'Paraiso Comfort',     domain: 'paraisocomfortwears.com'   },
  { name: 'Credo World',         domain: 'credoworld.in'             },
  { name: 'Yellow Diaries',      domain: 'yellowdiaries.in'          },
  { name: 'Genosub',             domain: 'genosub.com'               },
  { name: 'ExZept',              domain: 'exzept.com'                },
  { name: 'Fashion Hub',         domain: 'fashionhub.in'             },
];

const ROW1 = [...BRANDS, ...BRANDS];
const ROW2 = [...BRANDS.slice(6), ...BRANDS.slice(0,6), ...BRANDS.slice(6), ...BRANDS.slice(0,6)];

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

/* ── Typewriter hook ── */
function useTypewriter(words) {
  const [display, setDisplay]   = useState(words[0]);
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing]   = useState(true); // start with full word shown

  useEffect(() => {
    const TYPING_SPEED  = 80;
    const DELETE_SPEED  = 50;
    const PAUSE_AFTER   = 1800;
    const PAUSE_BEFORE  = 300;

    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setDeleting(true);
      }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (deleting) {
      if (charIdx === 0) {
        setDeleting(false);
        const next = (wordIdx + 1) % words.length;
        setWordIdx(next);
        setPausing(false);
        return;
      }
      const t = setTimeout(() => {
        const w = words[wordIdx];
        setCharIdx(c => c - 1);
        setDisplay(w.slice(0, charIdx - 1));
      }, DELETE_SPEED);
      return () => clearTimeout(t);
    }

    // typing
    const w = words[wordIdx];
    if (charIdx < w.length) {
      const t = setTimeout(() => {
        setCharIdx(c => c + 1);
        setDisplay(w.slice(0, charIdx + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    }
    // done typing → pause
    setPausing(true);
  }, [pausing, deleting, charIdx, wordIdx, words]);

  return display;
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
  const word        = useTypewriter(WORDS);

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

        {/* H1 with typewriter */}
        <motion.h1 className={styles.h1} {...fadeUp(0.1)}>
          We Don't Just Market.<br />
          We{' '}
          <span className={`gradient-text ${styles.typeWord}`}>
            {word}
            <span className={styles.cursor} aria-hidden="true">|</span>
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
                <img
                  src={faviconUrl(b.domain)}
                  alt=""
                  className={styles.brandLogo}
                  loading="lazy"
                  aria-hidden="true"
                />
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
                <img
                  src={faviconUrl(b.domain)}
                  alt=""
                  className={styles.brandLogo}
                  loading="lazy"
                  aria-hidden="true"
                />
                <span className={styles.brandName}>{b.name}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}