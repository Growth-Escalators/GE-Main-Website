'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/components/data/testimonials';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="bg-white py-[92px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-[48px] text-center"
        >
          <p className="text-[12px] font-extrabold uppercase tracking-[.22em] text-[#FF6B35]">
            In their words
          </p>
          <h2 className="mt-3 text-[42px] font-extrabold text-[#11121a] max-md:text-[26px]">
            Loved by 187+ growing brands
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="grid grid-cols-3 gap-5 max-md:grid-cols-1"
        >
          {items.map((t) => (
            <div
              key={t.id}
              className="rounded-[18px] border border-[rgba(17,18,26,0.07)] bg-[#fbfaf8] p-7"
            >
              <p className="text-[15px] text-[#FFC83D]" aria-label={`${t.rating} out of 5 stars`}>
                {'★'.repeat(t.rating)}
              </p>
              <p className="mt-4 text-[15px] text-[#2a2a3a]">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full font-bold text-white"
                  style={{ background: t.avatarGradient }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#11121a]">{t.name}</p>
                  <p className="text-[12px] text-[#9898b8]">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
