'use client';

import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);

  // Idee 8: parallax discret pe hero la mișcarea mouse-ului (doar desktop, unde hover e disponibil)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!mediaRef.current || window.matchMedia('(hover: none)').matches) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    mediaRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (mediaRef.current) mediaRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <section className="hero" id="top" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero-media" ref={mediaRef}>
        <Image
          src="/images/gallery/poza4.jpg"
          alt="Sesiune plenară Sports Diplomacy Conference în Sala Drepturilor Omului, Palatul Parlamentului"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
        />
        <div className="hero-scrim"></div>
      </div>

      <div className="hero-content">
        <p className="eyebrow eyebrow-light">Palatul Parlamentului · 24 septembrie 2024</p>
        <h1 className="hero-title">
          Sports<br />
          <em>Diplomacy</em>
        </h1>
        <p className="hero-lead">
          Bun venit la Sports Diplomacy, unde puterea sportului unește națiuni. Alăturați-vă
          liderilor politici, sportivilor și vizionarilor pentru a valorifica spiritul de
          competiție, a construi punți și a inspira progresul.
        </p>
        <p className="hero-tagline">Let&apos;s make history, one game at a time.</p>

        <div className="hero-actions">
          <a href="#despre" className="btn btn-primary">Despre eveniment</a>
          <a href="#media" className="btn btn-ghost">Presă și media</a>
        </div>
      </div>

      <div className="seal" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="seal-svg">
          <defs>
            <path id="sealCircle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
          </defs>
          <circle cx="100" cy="100" r="96" className="seal-ring-outer"></circle>
          <circle cx="100" cy="100" r="60" className="seal-ring-inner"></circle>
          <text className="seal-text">
            <textPath href="#sealCircle" startOffset="0%">
              SPORTS DIPLOMACY CONFERENCE · 24 SEPTEMBRIE 2024 ·{' '}
            </textPath>
          </text>
          <text x="100" y="94" className="seal-center-1">EST.</text>
          <text x="100" y="116" className="seal-center-2">2024</text>
        </svg>
      </div>

      <a href="#despre" className="scroll-cue" aria-label="Derulează în jos">
        <span></span>
      </a>
    </section>
  );
}
