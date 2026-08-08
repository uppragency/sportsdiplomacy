import Image from 'next/image';
import Reveal from './Reveal';
import { mediaArticles } from '@/lib/data';

export default function Media() {
  return (
    <section className="section section-light" id="media">
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
          <Reveal className="media-grid">
            {mediaArticles.map((article) => (
              <article className="media-card" key={article.sourceUrl}>
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
                      </p>
                    )}
                    <h3>{article.title}</h3>
                    <span className="media-card-cta">Citește articolul ↗</span>
                  </div>
                </a>
              </article>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
