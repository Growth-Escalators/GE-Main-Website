'use client';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import styles from './ServicesGrid.module.css';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.12 },
  transition:  { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function ServicesGrid() {
  return (
    <section id="services" className={`${styles.section} section-padding`} aria-labelledby="services-heading">
      <div className="container">

        <motion.div className="section-header" {...fadeUp(0)}>
          <div className="section-tag">What We Do</div>
          <h2 id="services-heading" className="section-headline">Every service tuned for growth.</h2>
          <p className="section-subheadline">
            From paid ads to full brand systems — we build what your brand needs to scale.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <motion.article
              key={svc.id}
              className={`${styles.card} glass`}
              aria-label={`${svc.title} service`}
              {...fadeUp(0.05 * (i % 3))}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.iconPill} aria-hidden="true">{svc.icon}</div>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.description}</p>
              <div className={styles.result}>
                <span className={styles.resultDot} aria-hidden="true" />
                {svc.keyStat}
              </div>
              <a href="#contact" className={styles.learnMore} aria-label={`Learn more about ${svc.title}`}>
                Learn more →
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}