import Image from 'next/image';
import Reveal from './Reveal';
import { mediaArticles } from '@/lib/data';

export default function Media() {
  const featured = mediaArticles.find((a) => a.featured);
  const rest = mediaArticles.filter((a) => !a.featured);

  return (
    <section className="section section-light" id="media">
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow">Media</p>
            <h2 className="section-title">Din interiorul conferinței</h2>
          </div>
          <p className="section-head-note">
            Momente și repere din cadrul evenimentului de la Palatul Parlamentului.
          </p>
        </div>

        <Reveal className="media-grid">
          {featured && (
            <article className="media-card media-card-feature">
              <a href={`/media/${featured.slug}`} className="media-card-link">
                <div className="media-card-image">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 55vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="media-card-body">
                  <p className="media-card-date">{featured.date}</p>
                  <h3>{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <span className="media-card-cta">Citește mai mult →</span>
                </div>
              </a>
            </article>
          )}

          {rest.map((article) => (
            <article className="media-card" key={article.slug}>
              <a href={`/media/${article.slug}`} className="media-card-link">
                <div className="media-card-image">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="media-card-body">
                  <p className="media-card-date">{article.date}</p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="media-card-cta">Citește mai mult →</span>
                </div>
              </a>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
