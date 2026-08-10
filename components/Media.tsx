'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { mediaArticles } from '@/lib/data';

const PER_BATCH = 6; // 2 rânduri x 3 coloane

export default function Media() {
  const [shown, setShown] = useState(Math.min(PER_BATCH, mediaArticles.length));

  // Idee 23: dacă un rezultat de căutare țintește un articol încă neafișat, îl arătăm
  useEffect(() => {
    const onReveal = (e: Event) => {
      const { slug } = (e as CustomEvent<{ slug: string }>).detail || {};
      const idx = mediaArticles.findIndex((a) => a.slug === slug);
      if (idx >= 0 && idx >= shown) {
        setShown(mediaArticles.length);
      }
    };
    window.addEventListener('sd:reveal-media', onReveal);
    return () => window.removeEventListener('sd:reveal-media', onReveal);
  }, [shown]);

  const visibleArticles = mediaArticles.slice(0, shown);
  const hasMore = shown < mediaArticles.length;

  return (
    <section className="section section-light textured" id="media">
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow">Media</p>
            <h2 className="section-title">Sports Diplomacy în presă</h2>
          </div>
          <p className="section-head-note">
            Articole și apariții media despre Sports Diplomacy Conference.
          </p>
        </div>

        {mediaArticles.length === 0 ? (
          <div className="media-empty">
            <p>Articolele media vor apărea în curând aici.</p>
          </div>
        ) : (
          <>
            <Reveal className="media-grid">
              {visibleArticles.map((article) => (
                <article className="media-card" id={`media-${article.slug}`} key={article.slug}>
                  <a
                    href={article.sourceUrl}
                    className="media-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="media-card-image">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="media-card-body">
                      {article.publication && (
                        <p className="media-card-date">
                          {article.publication}
                          {article.date ? ` · ${article.date}` : ''}
                          {/* Idee 5: etichetă tip articol */}
                          <span className={`media-tag${article.type === 'social' ? ' social' : ''}`}>
                            {article.type === 'social' ? 'Social media' : 'Presă scrisă'}
                          </span>
                        </p>
                      )}
                      <h3>{article.title}</h3>
                      <span className="media-card-cta">Citește articolul ↗</span>
                    </div>
                  </a>
                </article>
              ))}
            </Reveal>

            {/* Idee 2: buton „Vezi mai multe” — încarcă câte 2 rânduri */}
            {hasMore && (
              <div className="load-more-wrap">
                <button
                  type="button"
                  className="load-more-btn"
                  onClick={() => setShown((s) => Math.min(s + PER_BATCH, mediaArticles.length))}
                >
                  Vezi mai multe articole
                </button>
                <span className="load-more-count">
                  {shown} din {mediaArticles.length} articole
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
