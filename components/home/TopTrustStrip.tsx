'use client';

import { motion } from 'framer-motion';

export default function TopTrustStrip() {
  return (
    <section className="bg-[#11121a] text-white text-[12.5px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5"
      >
        {/* Desktop */}
        <div className="flex items-center justify-between py-2 max-md:hidden">
          <div className="flex items-center gap-2">
            <span className="text-[#FFC83D]">★★★★★</span>
            <span className="font-semibold text-[#cfcfe0]">
              4.9 / 5 across 187+ Google reviews
            </span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-[#9c9cb5]">
            <span>Meta &amp; Google Ads Certified</span>
            <span className="opacity-40">·</span>
            <span>10,000+ campaigns run</span>
            <span className="opacity-40">·</span>
            <span>Jaipur, India</span>
          </div>
        </div>

        {/* Mobile */}
        <div className="hidden items-center justify-center gap-2 py-2 text-center max-md:flex">
          <span className="text-[#FFC83D]">★★★★★</span>
          <span className="font-semibold text-[#cfcfe0]">
            4.9/5 · 187+ Google reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
}
