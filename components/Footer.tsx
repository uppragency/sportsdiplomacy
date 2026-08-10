export default function Footer() {
  return (
    <footer className="footer-v2">
      <svg className="footer-v2-seal" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="96" fill="none" stroke="#fff" strokeWidth="1"></circle>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#fff" strokeWidth="1"></circle>
      </svg>

      <div className="container">
        <div className="footer-v2-top">
          <div className="footer-v2-brand">
            <a href="#top" className="logo">
              <span className="logo-word">Sports<em>Diplomacy</em></span>
            </a>
            <p>
              Conferința care aduce laolaltă diplomația și sportul, la Palatul Parlamentului.
              Puterea sportului de a uni națiuni, într-un singur eveniment anual.
            </p>
          </div>

          <div className="footer-v2-col">
            <h4>Explorează</h4>
            <ul>
              <li><a href="#despre">Despre eveniment</a></li>
              <li><a href="#speakeri">Speakeri și moderatori</a></li>
              <li><a href="#galerie">Galerie foto</a></li>
              <li><a href="#media">Media</a></li>
            </ul>
          </div>

          <div className="footer-v2-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:office@sportsdiplomacy.ro">office@sportsdiplomacy.ro</a></li>
              <li><a href="#sponsori">Sponsori și parteneri</a></li>
              <li><a href="#institutii">Instituții organizatoare</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-v2-bottom">
          <p>© 2024 Sports Diplomacy. Palatul Parlamentului, București.</p>
          <p>
            Website by{' '}
            <a
              href="https://www.uppr.agency/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px' }}
            >
              UPPR Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
