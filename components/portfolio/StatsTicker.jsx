'use client';
import styles from './StatsTicker.module.css';

const ITEMS = [
  '100+ Campaigns Delivered',
  '₹Crores in Ad Spend Managed',
  '120% Higher ROAS',
  '2.5x Customer Lifetime Value',
  '98% Client Satisfaction',
  '30% More Returns on Same Investment',
  "India's Most Results-Obsessed Agency",
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function StatsTicker() {
  return (
    <section id="stats-bar" className={styles.bar} aria-label="Key statistics">
      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {DOUBLED.map((item, i) => (
            <span key={i} className={styles.itemWrap}>
              <span className={styles.item}>{item}</span>
              {i < DOUBLED.length - 1 && (
                <span className={styles.sep} aria-hidden="true">◆</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}