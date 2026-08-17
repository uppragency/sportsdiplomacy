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
              Diplomația prin sport, la cel mai înalt nivel.
            </h2>
            <p className="body-lg">
              Sports Diplomacy a creat la București un spațiu de dialog dedicat rolului
              sportului ca instrument de diplomație, cooperare internațională și apropiere
              între națiuni.
            </p>
            <p className="body-md">
              Ediția din 2024 a avut loc într-un an definitoriu pentru sportul internațional,
              marcat de Campionatul European de Fotbal din Germania, Jocurile Olimpice de la
              Paris și decizia Comitetului Internațional Olimpic de a crea Jocurile Olimpice
              de Esports.
            </p>
            <p className="body-md">
              La aceeași masă s-au reunit reprezentanți ai administrației publice centrale, ai
              corpului diplomatic acreditat la București, ai federațiilor sportive naționale și
              internaționale, sportivi, reprezentanți ai mediului privat, ai societății civile
              și ai mass-media.
            </p>
            <p className="body-md">
              Un dialog despre modul în care sportul poate construi punți acolo unde politica,
              uneori, întâlnește bariere.
            </p>
          </div>

          <div className="about-figure">
            <Image
              src="/images/gallery/poza15.jpg"
              alt="Sala de conferințe, Sports Diplomacy Conference, Palatul Parlamentului"
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
