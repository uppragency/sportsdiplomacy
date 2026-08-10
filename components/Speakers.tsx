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

export default function Speakers() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [barWidthPct, setBarWidthPct] = useState(8);
  const [barOffsetPct, setBarOffsetPct] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
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

  return (
    <section className="section section-dark" id="speakeri">
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
              <li className="speaker-item" key={speaker.name}>
                <div className="speaker-photo">
                  {speaker.photo ? (
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      sizes="280px"
                      style={{ objectFit: 'contain' }}
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
