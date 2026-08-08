import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="section section-dark cta-section" id="contact">
      <div className="cta-texture" aria-hidden="true"></div>
      <div className="container">
        <Reveal className="cta-inner">
          <p className="eyebrow eyebrow-light">Alătură-te comunității</p>
          <h2 className="cta-title">Conectați-vă cu<br />liderii din industrie.</h2>
          <p className="cta-text">
            Nu ratați ocazia de a interacționa, a învăța și a progresa. Alăturați-vă comunității
            pentru a fi la curent cu noutățile din Sports și Esports Diplomacy.
          </p>
          <a href="mailto:office@sportsdiplomacy.ro" className="btn btn-primary btn-lg">
            office@sportsdiplomacy.ro
          </a>
        </Reveal>
      </div>
    </section>
  );
}
