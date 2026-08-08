export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#top" className="logo logo-footer">
          <span className="logo-mark" aria-hidden="true">SD</span>
          <span className="logo-word">Sports<em>Diplomacy</em></span>
        </a>

        <nav className="footer-nav" aria-label="Navigație footer">
          <a href="#despre">Despre</a>
          <a href="#speakeri">Speakeri</a>
          <a href="#media">Media</a>
          <a href="#sponsori">Sponsori</a>
          <a href="mailto:office@sportsdiplomacy.ro">Contact</a>
        </nav>

        <p className="footer-copy">© 2024 Sports Diplomacy. Palatul Parlamentului, București.</p>
      </div>
    </footer>
  );
}
