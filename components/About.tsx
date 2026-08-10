import Image from 'next/image';
import Reveal from './Reveal';
import AnimatedNumber from './AnimatedNumber';

export default function About() {
  return (
    <section className="section section-light textured" id="despre">
      <div className="container">
        <Reveal className="about-grid">
          <div className="about-text">
            <div className="mini-badge"><span className="dot"></span> Ediția 2024</div>
            <p className="eyebrow">Despre eveniment</p>
            <h2 className="section-title">
              O întâlnire între diplomație și sport, la cel mai înalt nivel.
            </h2>
            <p className="body-lg">
              Conferința cu tema Sports Diplomacy a fost organizată în contextul celor mai
              importante evenimente sportive ale anului: Campionatul European din Germania,
              Jocurile Olimpice din Franța și decizia Comitetului Olimpic Internațional de a
              organiza prima ediție a Jocurilor Olimpice de Esports.
            </p>
            <p className="body-md">
              Evenimentul a reunit la aceeași masă reprezentanți importanți ai administrației
              publice centrale, corpul diplomatic acreditat la București, federațiile sportive
              naționale, sportivi, mediul privat, societatea civilă și mass-media.
            </p>
          </div>

          <div className="about-figure">
            <Image
              src="/images/gallery/poza12.jpg"
              alt="Participanți la Sports Diplomacy Conference, fotografie de grup, Palatul Parlamentului"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Reveal>

        <Reveal className="stat-cards">
          <div className="stat-card">
            <div className="stat-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
            </div>
            <p className="stat-card-value">Palatul Parlamentului</p>
            <p className="stat-card-label">Locație</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
                <path d="M8 3v4M16 3v4M3.5 10h17" />
              </svg>
            </div>
            <p className="stat-card-value">24 septembrie 2024</p>
            <p className="stat-card-label">Dată</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                <path d="M6 21c0-3 2.7-5 6-5s6 2 6 5" />
              </svg>
            </div>
            <p className="stat-card-value"><AnimatedNumber target={26} /></p>
            <p className="stat-card-label">Speakeri și moderatori</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 4h8l-1 6a3 3 0 0 1-6 0L8 4Z" />
                <path d="M12 13v4M9 21h6" />
              </svg>
            </div>
            <p className="stat-card-value">EURO · JO · Esports</p>
            <p className="stat-card-label">Context sportiv 2024</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
