import Reveal from './Reveal';

const institutions = [
  'Senatul României',
  'Ministerul Afacerilor Externe',
  'Comitetul Olimpic și Sportiv Român',
  'Institutul Sportiv Român',
  'Uniunea Europeană',
];

export default function Institutions() {
  return (
    <section className="section section-light" id="institutii">
      <div className="container">
        <p className="eyebrow">Sub egida</p>
        <h2 className="section-title">Instituții organizatoare și parteneri oficiali</h2>
        <p className="body-md">
          Conferința s-a desfășurat sub patronajul și cu sprijinul următoarelor instituții.
        </p>

        <Reveal as="ul" className="institutions-row">
          {institutions.map((name) => (
            <li className="institution-badge" key={name}>
              <span className="dot" aria-hidden="true"></span>
              <span>{name}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
