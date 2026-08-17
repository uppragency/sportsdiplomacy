import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

export default function LegalPageShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
    <section className="termeni" id="top">
        <div className="termeni-media">
          <Image
            src="/images/gallery/poza15.jpg"
            alt="Sesiune plenară Sports Diplomacy Conference în Sala Drepturilor Omului, Palatul Parlamentului"
            fill
            priority
            sizes="300px"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 35%',
            }}
          />
          <div className="termeni-scrim" />
        </div>

        <div className="termeni-content">
          <p className="eyebrow eyebrow-light">
            Termeni și condiții — Sports Diplomacy Conference
          </p>

          <p className="termeni-lead">
            Termenii și condițiile de utilizare a site-ului Sports Diplomacy Conference.
          </p>
        </div>
      </section>
      <Header />
      <main id="continut">
        <section className="section section-light legal-page">
          <div className="container">
            <Breadcrumb current={title} />
            <a href="/" className="back-to-site">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Înapoi la site
            </a>
            <h1 className="legal-title">{title}</h1>
            {updated && <p className="legal-updated">Ultima actualizare: {updated}</p>}
            <div className="legal-body">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
