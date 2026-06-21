'use client';

import { motion } from 'framer-motion';

const TILES = [
  {
    title: 'Vetted candidate pipeline',
    body: 'A steady flow of pre-screened, interview-ready people.',
  },
  {
    title: 'AI-powered matching',
    body: 'Technology that surfaces the right fit from a deep talent pool.',
  },
  {
    title: 'Employer branding',
    body: 'Job ads & content that make top talent want you.',
  },
  {
    title: "We've done the job ourselves",
    body: 'We hire these exact roles for our own projects — so we know who delivers.',
  },
];

export default function StaffingWhatYouGet() {
  return (
    <section className="bg-[#11121a] text-white py-[88px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-[.85fr_1.15fr] max-md:grid-cols-1 gap-14 items-center"
        >
          {/* LEFT */}
          <div>
            <span className="block text-[12px] font-extrabold tracking-[.2em] uppercase text-[#FF9A5A]">
              What you get
            </span>
            <h2 className="text-[38px] max-md:text-[26px] font-extrabold mt-3 leading-[1.1]">
              More than a recruiter — a hiring engine.
            </h2>
            <p className="text-[16px] text-[#a8a8c0] mt-4">
              We don&apos;t just send resumes. We run the whole top of your hiring
              funnel and hand you decisions, not homework.
            </p>
            <a
              href="#book"
              className="inline-block text-white text-[15px] font-extrabold px-[30px] py-[15px] rounded-[12px] mt-6"
              style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
            >
              Start Hiring →
            </a>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {TILES.map((tile) => (
              <div
                key={tile.title}
                className="bg-[rgba(255,255,255,.04)] border border-[rgba(255,255,255,.09)] rounded-[16px] p-[22px]"
              >
                <h3 className="text-[14.5px] font-bold text-white">{tile.title}</h3>
                <p className="text-[13px] text-[#9c9cb5] mt-1.5">{tile.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
