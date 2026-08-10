import Reveal from './Reveal';

export default function ParticipationCard() {
  return (
    <section className="participation-section">
      <div className="container">
        <p className="eyebrow eyebrow-light">Pentru oaspeți</p>
        <h2 className="cta-title" style={{ fontSize: 'clamp(26px, 3.6vw, 36px)', margin: '0 auto' }}>
          Cardul tău de participare
        </h2>
        <Reveal className="participation-card">
          <div className="participation-seal">SD</div>
          <h3>Am participat</h3>
          <p>
            Sports Diplomacy Conference · Ediția 2024
            <br />
            Palatul Parlamentului, București
          </p>
          <a href="/images/participation-card-2024.jpg" download className="participation-download">
            Descarcă cardul ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
