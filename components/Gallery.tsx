'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { galleryPhotos } from '@/lib/data';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cursorActive, setCursorActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="section section-muted" id="galerie">
      {/* Idee 13: punctul cursorului custom */}
      <div ref={cursorRef} className={`custom-cursor-dot${cursorActive ? ' is-active' : ''}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M11 8v6M8 11h6" />
        </svg>
      </div>

      <div className="container">
        <p className="eyebrow">Galerie foto</p>
        <h2 className="section-title">Sports Diplomacy Conference, în imagini</h2>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className={cursorActive ? 'custom-cursor-active' : ''}
        >
          <Reveal as="ul" className="gallery-grid">
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
                      sizes="(max-width: 760px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
                    />
                  </span>
                </button>
              </li>
            ))}
          </Reveal>
        </div>
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Vizualizare poză">
          <button className="lightbox-close" onClick={close} aria-label="Închide">✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Poza anterioară">‹</button>

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

          <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Poza următoare">›</button>

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
