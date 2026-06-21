'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '10,000+', label: 'Campaigns Run' },
  { value: '187+', label: 'Brands Scaled' },
  { value: '97%', label: 'Client Retention' },
  { value: '4.9★', label: 'Google Rating' },
];

export default function StatsBand() {
  return (
    <section className="bg-white py-[72px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className={[
                'text-center',
                i > 0 ? 'border-l border-[rgba(17,18,26,.08)]' : '',
                // keep mobile simple: only the 2nd column (index 1) keeps a divider
                i > 0 && i !== 1 ? 'max-md:border-l-0' : '',
              ].join(' ')}
            >
              <div className="text-[52px] max-md:text-[38px] font-extrabold text-[#FF6B35] tracking-[-.03em]">
                {stat.value}
              </div>
              <div className="text-[13px] font-bold tracking-[.14em] uppercase text-[#9898b8] mt-2.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
