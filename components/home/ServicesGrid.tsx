'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Service = {
  icon: ReactNode;
  title: string;
  body: string;
  stat: string;
};

const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#FF6B35',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const SERVICES: Service[] = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    title: 'Performance Marketing',
    body: 'Meta, Google & YouTube ads engineered for ROAS. Every click tracked, every campaign tested.',
    stat: 'Avg. 120% ROAS lift',
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
      </svg>
    ),
    title: 'Funnels & Automation',
    body: 'End-to-end lead funnels that turn cold traffic into paying customers — built and automated.',
    stat: '3× more qualified leads',
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    ),
    title: 'Web & Software',
    body: 'Fast, conversion-built sites & custom software — Shopify, Next.js, full SaaS products.',
    stat: '+40% conversion rate',
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </svg>
    ),
    title: 'Social Media Marketing',
    body: 'Content & community that builds brand equity and consistent, compounding engagement.',
    stat: '2× engagement rate',
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.6 9.1l5.8-.8L12 3z" />
      </svg>
    ),
    title: 'Branding & Identity',
    body: 'Logo, visual identity & brand systems that make you unmistakable and unforgettable.',
    stat: 'Used by 100+ brands',
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 7v5h-5" />
      </svg>
    ),
    title: 'AI SEO & Growth',
    body: 'AI-powered organic systems that compound — content, technical SEO, authority building.',
    stat: 'First page in 90 days',
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-[#fbfaf8] border-t border-[rgba(17,18,26,.07)] py-[92px]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-[52px]"
        >
          <div className="text-[12px] font-extrabold tracking-[.22em] uppercase text-[#FF6B35]">
            What we do
          </div>
          <h2 className="text-[42px] max-md:text-[27px] font-extrabold tracking-[-.025em] text-[#11121a] mt-3">
            One team for your entire growth engine
          </h2>
          <p className="text-[17px] text-[#4b4b6a] max-w-[560px] mx-auto mt-4">
            From the first click to the closed sale — strategy, ads, funnels, and
            the tech to run them, under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className="bg-white border border-[rgba(17,18,26,.08)] rounded-[18px] p-[30px] transition hover:-translate-y-1 hover:border-[rgba(255,107,53,.35)] hover:shadow-[0_16px_40px_rgba(255,107,53,.10)]"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[rgba(255,107,53,.1)] flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-[19px] font-extrabold mt-4 text-[#11121a]">
                {service.title}
              </h3>
              <p className="text-[14.5px] text-[#4b4b6a] mt-2">{service.body}</p>
              <p className="text-[13px] font-bold text-[#FF6B35] mt-4">
                {service.stat}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
