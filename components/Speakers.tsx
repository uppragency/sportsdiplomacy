'use client';

import { useRef } from 'react';
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

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('li');
    const cardWidth = card ? card.getBoundingClientRect().width : 280;
    track.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' });
  };

  return (
    <section className="section section-dark" id="speakeri">
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow eyebrow-light">Speakeri și moderatori</p>
            <h2 className="section-title section-title-light">Vocile din spatele conferinței</h2>
          </div>

          <div className="carousel-nav">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={() => scrollByCard(-1)}
              aria-label="Speakerul anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={() => scrollByCard(1)}
              aria-label="Speakerul următor"
            >
              ›
            </button>
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
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
