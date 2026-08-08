'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { galleryPhotos } from '@/lib/data';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <section className="section section-muted" id="galerie">
      <div className="container">
        <p className="eyebrow">Galerie foto</p>
        <h2 className="section-title">Sports Diplomacy Conference, în imagini</h2>

        <Reveal as="ul" className="gallery-grid">
          {galleryPhotos.map((photo, i) => (
            <li key={photo.file}>
              <button
                type="button"
                className="gallery-thumb"
                onClick={() => setOpenIndex(i)}
                aria-label={`Deschide poza ${i + 1} din ${galleryPhotos.length}`}
              >
                <Image
                  src={`/images/gallery/${photo.file}`}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 760px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </button>
            </li>
          ))}
        </Reveal>
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
          <p className="lightbox-counter">{openIndex + 1} / {galleryPhotos.length}</p>

          <button className="lightbox-backdrop" onClick={close} aria-label="Închide" tabIndex={-1} />
        </div>
      )}
    </section>
  );
}
