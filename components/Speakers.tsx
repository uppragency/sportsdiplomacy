'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { speakers } from '@/lib/data';

const TITLE_WORDS = new Set(['ambasador', 'dr.', 'dr', 'e.s.', 'e.s']);

function initials(name: string) {
  const words = name.split(' ').filter((w) => w && !TITLE_WORDS.has(w.toLowerCase()));
  const first = words[0]?.[0] ?? '';
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/^(ambasador|dr\.?|e\.s\.?)\s*/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function Speakers() {
  const trackRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasInteractedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [barWidthPct, setBarWidthPct] = useState(8);
  const [barOffsetPct, setBarOffsetPct] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [inView, setInView] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    hasInteractedRef.current = true;
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('li');
    const cardWidth = card ? card.getBoundingClientRect().width : 280;
    track.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const card = track.querySelector('li');
      const cardWidth = card ? card.getBoundingClientRect().width + 20 : 280;
      const i = Math.min(Math.max(Math.round(track.scrollLeft / cardWidth), 0), speakers.length - 1);
      setIndex(i);

      const maxScroll = track.scrollWidth - track.clientWidth;
      const widthPct = Math.max(8, (track.clientWidth / track.scrollWidth) * 100);
      const travelPct = 100 - widthPct;
      const scrollPct = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      setBarWidthPct(widthPct);
      setBarOffsetPct(scrollPct * travelPct);
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft >= maxScroll - 4);
    };

    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Rotire automată, foarte lentă — se oprește definitiv la orice interacțiune a vizitatorului
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const markInteracted = () => { hasInteractedRef.current = true; };
    track.addEventListener('pointerdown', markInteracted);
    track.addEventListener('wheel', markInteracted, { passive: true });
    track.addEventListener('touchstart', markInteracted, { passive: true });
    const onEnter = () => { isHoveredRef.current = true; };
    const onLeave = () => { isHoveredRef.current = false; };
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);
    return () => {
      track.removeEventListener('pointerdown', markInteracted);
      track.removeEventListener('wheel', markInteracted);
      track.removeEventListener('touchstart', markInteracted);
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      if (hasInteractedRef.current || isHoveredRef.current) return;
      const track = trackRef.current;
      if (!track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 4) return; // se oprește la capăt, nu reia de la zero
      const card = track.querySelector('li');
      const cardWidth = card ? card.getBoundingClientRect().width + 20 : 280;
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }, 4200);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section className="section section-dark" id="speakeri" ref={sectionRef}>
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow eyebrow-light">Speakeri și moderatori</p>
            <h2 className="section-title section-title-light">Vocile din spatele conferinței</h2>
          </div>

          <div className="carousel-nav">
            <span className="carousel-counter">
              {String(index + 1).padStart(2, '0')} / {speakers.length}
            </span>
            <div className="carousel-nav-btns">
              <button
                type="button"
                className="carousel-nav-btn"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Speakerul anterior"
              >
                ‹
              </button>
              <button
                type="button"
                className="carousel-nav-btn"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Speakerul următor"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <Reveal>
          <ul className="speaker-carousel" ref={trackRef}>
            {speakers.map((speaker) => (
              <li className="speaker-item" id={`speaker-${slugify(speaker.name)}`} key={speaker.name}>
                <div className="speaker-avatar">
                  {speaker.photo ? (
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="84px"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <span className="speaker-initials" aria-hidden="true">
                      {initials(speaker.name)}
                    </span>
                  )}
                </div>
                <div className="speaker-info">
                  <span className="speaker-name">{speaker.name}</span>
                  <span className="speaker-role">{speaker.role}</span>
                  <span className="sp-cat-tag">{speaker.category}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="carousel-progress">
            <div
              className="carousel-progress-bar"
              style={{ width: `${barWidthPct}%`, marginLeft: `${barOffsetPct}%` }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
