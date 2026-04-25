'use client';
import { useEffect, useState, useCallback } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Our Work',     href: '#work'         },
  { label: 'Services',     href: '#services'      },
  { label: 'Results',      href: '#results'       },
  { label: 'Process',      href: '#process'       },
  { label: 'Testimonials', href: '#testimonials'  },
  { label: 'Contact',      href: '#contact'       },
];

function smoothScrollTo(href) {
  if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const target = document.querySelector(href);
  if (target) {
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [activeId,    setActiveId]    = useState('');
  const [menuOpen,    setMenuOpen]    = useState(false);

  // Navbar glass + active section tracking
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      let current = '';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        id="navbar"
        className={`${styles.navbar}${scrolled ? ' ' + styles.scrolled : ''}`}
        role="banner"
      >
        <nav className={styles.inner} aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#"
            className={styles.logo}
            onClick={e => handleLinkClick(e, '#')}
            aria-label="Growth Escalators — Home"
          >
            <img
              src="https://growthescalators.com/wp-content/uploads/2023/10/growth-escalator-logo.png"
              alt="Growth Escalators logo"
              height="40"
              onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'block';
              }}
            />
            <span className={styles.logoFallback} style={{ display: 'none' }}>
              Growth Escalators
            </span>
          </a>

          {/* Desktop links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.link}${activeId === href.slice(1) ? ' ' + styles.active : ''}`}
                  onClick={e => handleLinkClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={styles.cta}
            onClick={e => handleLinkClick(e, '#contact')}
            aria-label="Get a free audit"
          >
            Get Free Audit
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger}${menuOpen ? ' ' + styles.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileNav}${menuOpen ? ' ' + styles.mobileNavOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={styles.mobileLink}
            onClick={e => handleLinkClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileCta}
          onClick={e => handleLinkClick(e, '#contact')}
        >
          Get Free Audit
        </a>
      </nav>
    </>
  );
}