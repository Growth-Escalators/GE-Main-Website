'use client';

import { motion } from 'framer-motion';

const WORDMARKS = [
  'Paraiso',
  'Elixzor',
  'Dr. Dubay',
  'SN Herbals',
  'Odra Organics',
  'Cklakart',
  'Credo World',
];

export default function LogoTrustBar() {
  return (
    <section
      className="bg-[#fbfaf8] border-y border-[rgba(17,18,26,.07)] py-[30px]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center flex-wrap gap-10"
        >
          <span className="text-[12px] font-extrabold tracking-[.18em] uppercase text-[#9898b8]">
            Trusted by growing brands
          </span>
          <div className="flex items-center flex-wrap gap-[38px] max-md:gap-5">
            {WORDMARKS.map((name) => (
              <span
                key={name}
                className="font-extrabold text-[17px] max-md:text-[14px] text-[#b9b9cb]"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
