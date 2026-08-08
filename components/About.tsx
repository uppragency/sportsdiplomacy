import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section section-light" id="despre">
      <div className="container">
        <Reveal className="about-grid">
          <div className="about-text">
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

        <Reveal as="dl" className="stat-row">
          <div className="stat">
            <dt>Locație</dt>
            <dd>Palatul Parlamentului</dd>
          </div>
          <div className="stat">
            <dt>Dată</dt>
            <dd>24 septembrie 2024</dd>
          </div>
          <div className="stat">
            <dt>Speakeri și moderatori</dt>
            <dd>26</dd>
          </div>
          <div className="stat">
            <dt>Context sportiv 2024</dt>
            <dd>EURO · Jocurile Olimpice · Esports</dd>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
