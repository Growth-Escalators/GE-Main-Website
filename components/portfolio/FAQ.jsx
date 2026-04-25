'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faq';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(prev => prev === id ? null : id);

  return (
    <section id="faq" className={`${styles.section} section-padding`} aria-labelledby="faq-heading">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="faq-heading" className="section-headline">Got questions?</h2>
          <p className="section-subheadline">Everything you need to know about working with us.</p>
        </motion.div>

        <motion.div
          className={`${styles.container} glass`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              className={`${styles.item}${i === faqs.length - 1 ? ' ' + styles.itemLast : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(faq.id)}
                aria-expanded={open === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-btn-${faq.id}`}
              >
                <span>{faq.question}</span>
                <span
                  className={styles.icon}
                  aria-hidden="true"
                  style={{ transform: open === faq.id ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    key="answer"
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className={styles.answer}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}