'use client'

export default function HomepagePhaseOneRefinements() {
  return (
    <style jsx global>{`
      /* Phase 1 refinement layer: responsive geometry + spacing only. */
      @media (min-width: 981px) {
        .ge-nav { --nav-h: 94px !important; }
        .ge-nav.is-scrolled { --nav-h: 78px !important; }
        .ge-nav-inner { gap: 30px !important; }
        .ge-logo img { height: 39px !important; }
        .ge-desktop-nav { gap: clamp(17px, 1.65vw, 28px) !important; }
        .ge-nav-trigger,
        .ge-nav-direct { min-height: 48px !important; font-size: 13px !important; }
        .ge-phone { font-size: 12px !important; }
        .ge-audit { min-height: 48px !important; padding-inline: 22px !important; font-size: 11.5px !important; }
        .ge-mega { top: 94px !important; }
        .ge-mega.is-scrolled { top: 78px !important; }
        .ge-backdrop { top: 94px !important; }
        .ge-backdrop.is-scrolled { top: 78px !important; }
        .ge-mega-inner { padding-top: 54px !important; padding-bottom: 60px !important; }
        .ge-mega-label strong { font-size: 54px !important; }
        .ge-mega-links strong { font-size: 27px !important; }
        .ge-mega-links a > span:not(.ge-mega-index) { font-size: 11px !important; }
      }

      @media (max-width: 980px) {
        .ge-nav { --nav-h: 76px !important; }
        .ge-nav.is-scrolled { --nav-h: 70px !important; }
        .ge-logo img { height: 35px !important; }
        .ge-menu-button { width: 48px !important; height: 48px !important; }
        .ge-mobile-menu { top: 76px !important; }
        .ge-mobile-menu.is-scrolled { top: 70px !important; }

        section[aria-labelledby='home-hero-heading'] {
          padding-top: 24px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) {
          display: block !important;
          min-height: auto !important;
          padding: 28px 24px 42px !important;
        }

        #home-hero-heading {
          margin: 20px 0 25px !important;
          font-size: clamp(72px, 14vw, 108px) !important;
          line-height: .8 !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:first-child {
          max-width: 780px;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) {
          min-height: clamp(470px, 72vw, 580px) !important;
          height: clamp(470px, 72vw, 580px);
          margin-top: 42px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
          inset: 24px 2% 56px 4% !important;
        }

        #services,
        #industries,
        #growthbot,
        section[aria-labelledby='work-heading'],
        section[aria-labelledby='people-heading'],
        section[aria-labelledby='insights-heading'] {
          padding-top: clamp(96px, 12vw, 124px) !important;
          padding-bottom: clamp(96px, 12vw, 124px) !important;
        }

        .audit-chapter { padding-top: clamp(96px, 12vw, 124px) !important; padding-bottom: clamp(96px, 12vw, 124px) !important; }
      }

      @media (max-width: 640px) {
        section[aria-labelledby='home-hero-heading'] {
          padding-top: 10px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) {
          padding: 28px 20px 28px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:first-child > p:first-child {
          max-width: 330px;
          font-size: 9px !important;
          line-height: 1.45 !important;
          letter-spacing: .135em !important;
        }

        #home-hero-heading {
          margin: 17px 0 21px !important;
          font-size: clamp(58px, 18vw, 76px) !important;
          line-height: .82 !important;
          letter-spacing: -.04em !important;
        }

        #home-hero-heading + div > p {
          max-width: 355px !important;
          font-size: 15px !important;
          line-height: 1.55 !important;
        }

        #home-hero-heading + div > div {
          margin-top: 24px !important;
          gap: 12px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) {
          min-height: clamp(365px, 103vw, 425px) !important;
          height: clamp(365px, 103vw, 425px) !important;
          margin-top: 34px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:first-child {
          display: none !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
          inset: 0 0 48px 0 !important;
          border-radius: 23px !important;
          transform: none !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) {
          width: 34% !important;
          left: 12px !important;
          bottom: 18px !important;
          border-width: 6px !important;
          border-radius: 18px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) {
          width: 142px !important;
          right: 12px !important;
          bottom: 15px !important;
          padding: 14px 15px !important;
          border-radius: 17px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) strong {
          font-size: 40px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) {
          top: 14px !important;
          right: 10px !important;
          padding: 8px 11px !important;
          font-size: 8px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:last-child {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          padding-inline: 20px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:last-child > div {
          min-height: 96px !important;
          padding: 16px 12px !important;
        }

        section[aria-labelledby='home-hero-heading'] > div:last-child > div strong {
          font-size: 38px !important;
        }

        section[aria-labelledby='trusted-brands-heading'] {
          padding-top: 42px !important;
          padding-bottom: 48px !important;
        }

        #services,
        #industries,
        #growthbot,
        section[aria-labelledby='work-heading'],
        section[aria-labelledby='people-heading'],
        section[aria-labelledby='insights-heading'],
        .audit-chapter {
          padding-top: 88px !important;
          padding-bottom: 88px !important;
        }

        #services > div:first-child > div:first-child,
        section[aria-labelledby='work-heading'] > div:first-child > div:first-child,
        #growthbot > div:first-child > div:first-child,
        section[aria-labelledby='insights-heading'] > div:first-child > div:first-child {
          margin-bottom: 48px !important;
        }

        #services h2,
        #industries h2,
        section[aria-labelledby='work-heading'] h2,
        #growthbot h2,
        section[aria-labelledby='people-heading'] h2,
        section[aria-labelledby='insights-heading'] h2 {
          font-size: clamp(52px, 15.5vw, 64px) !important;
          line-height: .86 !important;
        }

        .audit-shell { gap: 48px !important; }
      }

      @media (max-width: 390px) {
        #home-hero-heading { font-size: 57px !important; }
        section[aria-labelledby='home-hero-heading'] > div:nth-child(2) > div:nth-child(2) {
          min-height: 360px !important;
          height: 360px !important;
        }
      }
    `}</style>
  )
}
