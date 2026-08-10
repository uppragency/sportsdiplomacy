import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="continut">
        <section className="section section-dark not-found-section">
          <div className="container not-found-inner">
            <div className="not-found-seal" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="seal-svg">
                <circle cx="100" cy="100" r="96" className="seal-ring-outer"></circle>
                <circle cx="100" cy="100" r="60" className="seal-ring-inner"></circle>
                <text x="100" y="94" className="seal-center-1">EROARE</text>
                <text x="100" y="122" className="seal-center-2">404</text>
              </svg>
            </div>
            <p className="eyebrow eyebrow-light">Pagina nu a fost găsită</p>
            <h1 className="not-found-title">
              Se pare că ai luat<br />o cale greșită.
            </h1>
            <p className="not-found-text">
              Pagina pe care o cauți nu există sau a fost mutată. Te invităm să te întorci la
              pagina principală.
            </p>
            <Link href="/" className="btn btn-primary btn-lg">Înapoi la Sports Diplomacy</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
