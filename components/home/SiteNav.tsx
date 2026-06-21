'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navLogo" x1="0" y1="30" x2="30" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" stopOpacity="0.45" />
            <stop offset="1" stopColor="#FF9A5A" />
          </linearGradient>
        </defs>
        <rect x="3" y="17" width="5" height="10" rx="2" fill="url(#navLogo)" />
        <rect x="12.5" y="11" width="5" height="16" rx="2" fill="url(#navLogo)" />
        <rect x="22" y="5" width="5" height="22" rx="2" fill="url(#navLogo)" />
        <path d="M5 14 L14 8 L24 3" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M19 3 L24 3 L24 8" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-extrabold text-[19px] tracking-[-0.025em] text-[#11121a]">
        Growth Escalators
      </span>
    </span>
  );
}

function NewBadge() {
  return (
    <span className="ml-1.5 inline-block text-[9px] font-extrabold uppercase bg-[#FF6B35] text-white px-1.5 py-0.5 rounded-[5px] align-middle">
      New
    </span>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,.82)] backdrop-blur-[18px] backdrop-saturate-150 border-b border-[rgba(17,18,26,.07)]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <div className="flex items-center justify-between py-4">
          {/* Left: logo */}
          <Link href="/" aria-label="Growth Escalators home">
            <Logo />
          </Link>

          {/* Center links */}
          <nav className="flex items-center gap-[30px] text-[14.5px] font-semibold text-[#4b4b6a] max-md:hidden">
            <Link href="/services" className="hover:text-[#FF6B35]">Services</Link>
            <Link href="/staffing" className="text-[#FF6B35] hover:text-[#FF6B35]">
              Staffing<NewBadge />
            </Link>
            <a href="#industries" className="hover:text-[#FF6B35]">Industries</a>
            <Link href="/work" className="hover:text-[#FF6B35]">Work</Link>
            <Link href="/contact" className="hover:text-[#FF6B35]">Contact</Link>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-5 max-md:hidden">
            <a href="tel:+917733888883" className="text-[14px] font-bold text-[#11121a]">
              +91 77338 88883
            </a>
            <a
              href="#book"
              className="text-[14px] font-extrabold text-white px-[22px] py-[11px] rounded-[10px] shadow-[0_4px_16px_rgba(255,107,53,.3)]"
              style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
            >
              Get Free Audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="hidden flex-col gap-1 md:hidden max-md:flex"
          >
            <span className="block w-5 h-0.5 bg-[#11121a] rounded" />
            <span className="block w-5 h-0.5 bg-[#11121a] rounded" />
            <span className="block w-5 h-0.5 bg-[#11121a] rounded" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-[rgba(255,255,255,.96)] backdrop-blur-[8px] flex flex-col p-[16px_22px_28px]">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={closeMenu} aria-label="Growth Escalators home">
              <Logo />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(255,107,53,.1)] grid place-items-center text-[20px] text-[#FF6B35]"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 flex flex-col">
            <Link
              href="/services"
              onClick={closeMenu}
              className="py-[19px] flex items-center justify-between border-b border-[rgba(17,18,26,.07)]"
            >
              <span className="text-[21px] font-bold">Services</span>
              <span className="text-[18px] text-[#c5c5d0]">→</span>
            </Link>
            <Link
              href="/staffing"
              onClick={closeMenu}
              className="py-[19px] flex items-center justify-between border-b border-[rgba(17,18,26,.07)]"
            >
              <span className="text-[21px] font-extrabold text-[#FF6B35]">
                Staffing<NewBadge />
              </span>
              <span className="text-[18px] text-[#FF6B35]">→</span>
            </Link>
            <a
              href="#industries"
              onClick={closeMenu}
              className="py-[19px] flex items-center justify-between border-b border-[rgba(17,18,26,.07)]"
            >
              <span className="text-[21px] font-bold">Industries</span>
              <span className="text-[18px] text-[#c5c5d0]">→</span>
            </a>
            <Link
              href="/work"
              onClick={closeMenu}
              className="py-[19px] flex items-center justify-between border-b border-[rgba(17,18,26,.07)]"
            >
              <span className="text-[21px] font-bold">Work</span>
              <span className="text-[18px] text-[#c5c5d0]">→</span>
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="py-[19px] flex items-center justify-between border-b border-[rgba(17,18,26,.07)]"
            >
              <span className="text-[21px] font-bold">About</span>
              <span className="text-[18px] text-[#c5c5d0]">→</span>
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-[19px] flex items-center justify-between border-b border-[rgba(17,18,26,.07)]"
            >
              <span className="text-[21px] font-bold">Contact</span>
              <span className="text-[18px] text-[#c5c5d0]">→</span>
            </Link>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href="#book"
              onClick={closeMenu}
              className="py-4 rounded-[13px] text-[16px] font-extrabold text-white text-center"
              style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
            >
              Get Your Free Audit →
            </a>
            <a
              href="https://wa.me/917733888883"
              onClick={closeMenu}
              className="py-[15px] rounded-[13px] text-[15px] font-extrabold text-white text-center bg-[#25D366]"
            >
              Chat on WhatsApp
            </a>
            <div className="text-center text-[13px] text-[#9898b8]">
              <a href="https://www.instagram.com/growthescalators" onClick={closeMenu}>Instagram</a>
              <span className="opacity-40"> · </span>
              <a href="https://www.linkedin.com/company/growth-escalators" onClick={closeMenu}>LinkedIn</a>
              <span className="opacity-40"> · </span>
              <span>+91 77338 88883</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
