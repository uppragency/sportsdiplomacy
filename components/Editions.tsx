import Reveal from './Reveal';

export default function Editions() {
  return (
    <section className="section section-dark" id="editii">
      <div className="container">
        <p className="eyebrow eyebrow-light">Istoric</p>
        <h2 className="section-title section-title-light">Ediții Sports Diplomacy</h2>
        <Reveal className="edition-single">
          <p className="edition-year">2024</p>
          <p className="edition-status">Ediția inaugurală</p>
        </Reveal>
      </div>
    </section>
  );
}
