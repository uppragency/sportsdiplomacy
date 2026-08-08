'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#despre', label: 'Despre' },
  { href: '#speakeri', label: 'Speakeri' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#media', label: 'Media' },
  { href: '#sponsori', label: 'Sponsori' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true">SD</span>
          <span className="logo-word">Sports<em>Diplomacy</em></span>
        </a>

        <nav id="mainNav" className={`main-nav${navOpen ? ' is-open' : ''}`} aria-label="Navigație principală">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setNavOpen(false)}>
            Contact
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="mainNav"
          aria-label={navOpen ? 'Închide meniul' : 'Deschide meniul'}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
