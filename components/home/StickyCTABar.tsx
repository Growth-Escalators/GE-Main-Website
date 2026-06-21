'use client'

/**
 * StickyCTABar — mobile-only fixed bottom bar. Primary "Free Audit →" anchor
 * jumps to the #book lead band; the square button opens WhatsApp. Hidden on
 * md+ via the "md:hidden" root class.
 */
export default function StickyCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] flex gap-2.5 px-4 md:hidden"
      style={{
        background: 'rgba(255,255,255,.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(17,18,26,.1)',
        boxShadow: '0 -6px 24px rgba(17,18,26,.08)',
        paddingTop: '11px',
        paddingBottom: 'calc(11px + env(safe-area-inset-bottom))',
      }}
    >
      <a
        href="#book"
        className="flex-1 rounded-[12px] py-3.5 text-center text-[15px] font-extrabold text-white"
        style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
      >
        Free Audit →
      </a>

      <a
        href="https://wa.me/917733888883"
        aria-label="Chat on WhatsApp"
        className="grid h-[52px] w-[52px] place-items-center rounded-[12px]"
        style={{ background: '#25D366' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.78 2.72 4.3 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </a>
    </div>
  )
}
