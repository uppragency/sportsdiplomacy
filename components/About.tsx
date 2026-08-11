import Image from 'next/image';
import Reveal from './Reveal';
import AnimatedNumber from './AnimatedNumber';
import AnimatedIcon from './AnimatedIcon';
import locationIconData from '@/lib/icons/location.json';
import calendarIconData from '@/lib/icons/calendar.json';
import badgeIconData from '@/lib/icons/badge.json';
import noteIconData from '@/lib/icons/note.json';

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
              <AnimatedIcon animationData={locationIconData} size={20} />
            </div>
            <p className="stat-card-value">Palatul Parlamentului</p>
            <p className="stat-card-label">Locație</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              <AnimatedIcon animationData={calendarIconData} size={20} />
            </div>
            <p className="stat-card-value">24 septembrie 2024</p>
            <p className="stat-card-label">Dată</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              <AnimatedIcon animationData={badgeIconData} size={20} />
            </div>
            <p className="stat-card-value"><AnimatedNumber target={27} /></p>
            <p className="stat-card-label">Speakeri și moderatori</p>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">
              <AnimatedIcon animationData={noteIconData} size={20} />
            </div>
            <p className="stat-card-value">EURO · JO · Esports</p>
            <p className="stat-card-label">Context sportiv 2024</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
