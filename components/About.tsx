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
              {/* Scut heraldic — Locație */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3L19 6v6c0 5-3.5 8-7 9.5C8.5 20 5 17 5 12V6l7-3Z" />
                <path d="M10 21v-5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5" />
              </svg>
            </div>
            <p className="stat-card-value">Palatul Parlamentului</p>
            <p className="stat-card-label">Locație</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              {/* Fanion / banderolă heraldică — Dată */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 4h14v13l-3-2-2 2-2-2-2 2-2-2-3 2V4Z" />
              </svg>
            </div>
            <p className="stat-card-value">24 septembrie 2024</p>
            <p className="stat-card-label">Dată</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              {/* Coroniță de lauri — Speakeri */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4c-3 3-4 8-2 15" />
                <path d="M9 6.5c-1 1-1 2 0 3M8 9.5c-1 1-1 2 0 3M8 12.5c-1 1-1 2 0 3M9.2 15.3c-1 .5-1 1.5 0 2.4" />
                <path d="M12 4c3 3 4 8 2 15" />
                <path d="M15 6.5c1 1 1 2 0 3M16 9.5c1 1 1 2 0 3M16 12.5c1 1 1 2 0 3M14.8 15.3c1 .5 1 1.5 0 2.4" />
              </svg>
            </div>
            <p className="stat-card-value"><AnimatedNumber target={26} /></p>
            <p className="stat-card-label">Speakeri și moderatori</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              {/* Stea încadrată (estoile heraldică) — Context sportiv */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 7.2l1.4 3 3.3.3-2.5 2.3.8 3.4L12 14.5l-2.9 1.7.7-3.4-2.4-2.3 3.2-.3L12 7.2Z" />
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
