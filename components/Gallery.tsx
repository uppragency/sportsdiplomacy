'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import AnimatedIcon from './AnimatedIcon';
import closeIconData from '@/lib/icons/close.json';
import arrowIconData from '@/lib/icons/arrow.json';
import arrowLeftIconData from '@/lib/icons/arrowleft.json';
import { galleryPhotos } from '@/lib/data';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cursorActive, setCursorActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Carusel orizontal (nu grid)
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [barWidthPct, setBarWidthPct] = useState(20);
  const [barOffsetPct, setBarOffsetPct] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length)),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % galleryPhotos.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, prev, next]);

  // Precarcă poza următoare (și anterioară), ca tranziția cu săgețile să fie instant
  useEffect(() => {
    if (openIndex === null) return;
    const nextPhoto = galleryPhotos[(openIndex + 1) % galleryPhotos.length];
    const prevPhoto = galleryPhotos[(openIndex - 1 + galleryPhotos.length) % galleryPhotos.length];
    [nextPhoto, prevPhoto].forEach((photo) => {
      const img = new window.Image();
      img.src = `/images/gallery/${photo.file}`;
    });
  }, [openIndex]);

  // Idee 13: cursor personalizat (lupă) la hover pe galerie — doar desktop
  const handleMouseEnter = () => {
    if (!window.matchMedia('(hover: none)').matches) setCursorActive(true);
  };
  const handleMouseLeave = () => setCursorActive(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  // Logica caruselului (aceeași mecanică ca la Speakeri)
  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('li');
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    track.scrollBy({ left: dir * (cardWidth + 16), behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const card = track.querySelector('li');
      const cardWidth = card ? card.getBoundingClientRect().width + 16 : 300;
      const i = Math.min(Math.max(Math.round(track.scrollLeft / cardWidth), 0), galleryPhotos.length - 1);
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
    <section className="section section-muted" id="galerie">
      {/* Idee 13: punctul cursorului custom */}
      <div ref={cursorRef} className={`custom-cursor-dot${cursorActive ? ' is-active' : ''}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M11 8v6M8 11h6" />
        </svg>
      </div>

      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow">Galerie foto</p>
            <h2 className="section-title">Sports Diplomacy Conference, în imagini</h2>
          </div>
          <div className="carousel-nav">
            <span className="carousel-counter">
              {String(index + 1).padStart(2, '0')} / {galleryPhotos.length}
            </span>
            <div className="carousel-nav-btns">
              <button
                type="button"
                className="carousel-nav-btn carousel-nav-btn-light"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Poza anterioară"
              >
                <AnimatedIcon animationData={arrowLeftIconData} size={18} />
              </button>
              <button
                type="button"
                className="carousel-nav-btn carousel-nav-btn-light"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Poza următoare"
              >
                <AnimatedIcon animationData={arrowIconData} size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className={cursorActive ? 'custom-cursor-active' : ''}
        >
          <Reveal>
            <ul className="gallery-carousel" ref={trackRef}>
              {galleryPhotos.map((photo, i) => (
                <li key={photo.file}>
                  <button
                    type="button"
                    className="gallery-thumb"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`Deschide poza ${i + 1} din ${galleryPhotos.length}`}
                  >
                    {/* Idee 12: blur-up la încărcare */}
                    <span className="blurup-wrap" style={{ position: 'absolute', inset: 0 }}>
                      <Image
                        src={`/images/gallery/${photo.file}`}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 760px) 78vw, (max-width: 1024px) 42vw, 340px"
                        style={{ objectFit: 'cover' }}
                        onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
                      />
                    </span>
                  </button>
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
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Vizualizare poză">
          <button className="lightbox-close" onClick={close} aria-label="Închide">
            <AnimatedIcon animationData={closeIconData} size={18} />
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Poza anterioară">
            <AnimatedIcon animationData={arrowLeftIconData} size={22} />
          </button>

          <div className="lightbox-figure">
            <Image
              src={`/images/gallery/${galleryPhotos[openIndex].file}`}
              alt={galleryPhotos[openIndex].alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Poza următoare">
            <AnimatedIcon animationData={arrowIconData} size={22} />
          </button>

          {/* Idee 4: bandă de thumbnail-uri */}
          <div className="lightbox-thumbs">
            {galleryPhotos.map((photo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={photo.file}
                src={`/images/gallery/${photo.file}`}
                alt=""
                className={i === openIndex ? 'is-active' : ''}
                onClick={() => setOpenIndex(i)}
              />
            ))}
          </div>

          <p className="lightbox-counter">{openIndex + 1} / {galleryPhotos.length}</p>

          <button className="lightbox-backdrop" onClick={close} aria-label="Închide" tabIndex={-1} />
        </div>
      )}
    </section>
  );
}
