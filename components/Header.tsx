'use client';

import { useEffect, useMemo, useState } from 'react';
import { speakers, mediaArticles } from '@/lib/data';

const NAV_LINKS = [
  { href: '/#despre', label: 'Despre' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#media', label: 'Media' },
  { href: '/#sponsori', label: 'Sponsori' },
];

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/^(ambasador|dr\.?|e\.s\.?)\s*/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Comutatorul RO/EN e ascuns momentan (pus pe hold) — pune pe true ca să-l readuci.
const SHOW_LANG_TOGGLE = false;

type SearchItem = { label: string; sub: string; tag: 'Speaker' | 'Media'; targetId: string; slug?: string };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [lang, setLang] = useState<'ro' | 'en'>('ro');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen, searchOpen]);

  // Idee 11: scroll-spy — evidențiază link-ul secțiunii curente
  useEffect(() => {
    const sectionIds = ['despre', 'speakeri', 'galerie', 'media', 'institutii', 'sponsori', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Idee 23: index de căutare (speakeri + articole media)
  const searchIndex: SearchItem[] = useMemo(() => {
    const speakerItems: SearchItem[] = speakers.map((s) => ({
      label: s.name,
      sub: s.role,
      tag: 'Speaker',
      targetId: `speaker-${slugify(s.name)}`,
    }));
    const mediaItems: SearchItem[] = mediaArticles.map((a) => ({
      label: a.title,
      sub: a.publication ?? '',
      tag: 'Media',
      targetId: `media-${a.slug}`,
      slug: a.slug,
    }));
    return [...speakerItems, ...mediaItems];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 6);
    return searchIndex.filter((r) => r.label.toLowerCase().includes(q));
  }, [query, searchIndex]);

  const goToResult = (item: SearchItem) => {
    setSearchOpen(false);
    setQuery('');
    if (item.tag === 'Media' && item.slug) {
      // articolul poate fi ascuns încă (dincolo de "vezi mai multe") — cerem componentei Media să-l arate
      window.dispatchEvent(new CustomEvent('sd:reveal-media', { detail: { slug: item.slug } }));
    }
    // lăsăm un moment pentru randare/afișare înainte de scroll
    setTimeout(() => {
      document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }, item.tag === 'Media' ? 150 : 0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/#top" className="logo">
            <span className="logo-word">Sports<em>Diplomacy</em></span>
          </a>

          <nav id="mainNav" className="main-nav-desktop" aria-label="Navigație principală">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.split('#')[1] ? 'is-active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              className="search-trigger search-trigger-desktop"
              aria-label="Căutare"
              onClick={() => setSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>

            {SHOW_LANG_TOGGLE && (
              <div className="lang-toggle" role="group" aria-label="Limbă">
                <button className={lang === 'ro' ? 'is-active' : ''} onClick={() => setLang('ro')}>RO</button>
                <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>EN</button>
              </div>
            )}

            <a href="/#contact" className="nav-cta nav-cta-desktop">Contact</a>

            <button
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="mobileNav"
              aria-label={navOpen ? 'Închide meniul' : 'Deschide meniul'}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Nav mobilă randată în afara <header>, ca să nu fie prinsă de backdrop-filter-ul acestuia */}
      <nav
        id="mobileNav"
        className={`main-nav-mobile${navOpen ? ' is-open' : ''}`}
        aria-label="Navigație principală (mobil)"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
            {link.label}
          </a>
        ))}
        <button
          className="mobile-search-trigger"
          onClick={() => {
            setNavOpen(false);
            setSearchOpen(true);
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Caută
        </button>
        {SHOW_LANG_TOGGLE && (
          <div className="lang-toggle" role="group" aria-label="Limbă" style={{ display: 'flex' }}>
            <button className={lang === 'ro' ? 'is-active' : ''} onClick={() => setLang('ro')}>RO</button>
            <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        )}
        <a href="/#contact" className="nav-cta" onClick={() => setNavOpen(false)}>
          Contact
        </a>
      </nav>

      {/* Idee 23: overlay căutare rapidă */}
      <div className={`search-overlay${searchOpen ? ' is-open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
        <div className="search-box">
          <input
            type="text"
            placeholder="Caută un speaker sau un articol..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={searchOpen}
          />
          <div className="search-results">
            {results.length === 0 ? (
              <div className="search-empty">Niciun rezultat pentru „{query}”</div>
            ) : (
              results.map((r) => (
                <button key={r.targetId} className="search-result-item" onClick={() => goToResult(r)}>
                  <span>{r.label}</span>
                  <span className="tag">{r.tag}</span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
