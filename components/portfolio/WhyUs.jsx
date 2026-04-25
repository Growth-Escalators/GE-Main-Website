'use client';
import { motion } from 'framer-motion';
import styles from './WhyUs.module.css';

const CARDS = [
  {
    icon: '🎯',
    title: 'Customised Solutions',
    desc: 'No template strategies. Every plan is built around your brand, audience, and goals — from scratch, every time.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Strategy',
    desc: "Every decision backed by real analytics. We don't guess — we measure, test, and iterate until the numbers move.",
  },
  {
    icon: '🤝',
    title: 'Reliable Support',
    desc: 'Responsive team, clear communication, and a genuine partnership mindset. We treat your brand like our own.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className={`${styles.section} section-padding`} aria-labelledby="whyus-heading">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-tag">Why Us</div>
          <h2 id="whyus-heading" className="section-headline">The difference is in the details.</h2>
        </motion.div>

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className={`${styles.card} glass`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.iconPill} aria-hidden="true">{card.icon}</div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}