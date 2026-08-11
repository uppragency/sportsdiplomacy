import Reveal from './Reveal';

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/^(ambasador|dr\.?|e\.s\.?)\s*/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

type AgendaSpeaker = { name: string; note?: string };
type AgendaItem = {
  time: string;
  type: 'session' | 'panel' | 'break';
  title: string;
  note?: string;
  moderator?: string;
  speakers?: AgendaSpeaker[];
};

const agenda: AgendaItem[] = [
  { time: '08:30 – 09:00', type: 'session', title: 'Înregistrarea participanților' },
  {
    time: '09:00 – 09:05',
    type: 'session',
    title: 'Discurs de bun-venit',
    note: 'Tudor Oancea, co-organizator, Comisia pentru politică externă din Senat · Intonarea Imnului Național a cappella – Opera Română',
  },
  {
    time: '09:10 – 09:15',
    type: 'session',
    title: 'Discurs de deschidere a evenimentului',
    note: 'Titus Corlățean, președinte Comisia pentru politică externă din Senat, și Bogdan Matei, președinte Comisia pentru tineret și sport din Senat',
  },
  {
    time: '09:15 – 10:15',
    type: 'panel',
    title: 'Panel 1 — România pe harta diplomației sportive',
    moderator: 'Cristina Herea, jurnalist Romania TV',
    speakers: [
      { name: 'Bogdan Matei' },
      { name: 'Elisabeta Lipă' },
      { name: 'Mihai Covaliu' },
      { name: 'Florin Șari' },
      { name: 'Adrian Socaciu' },
    ],
  },
  { time: '15 min', type: 'break', title: 'Pauză de cafea' },
  {
    time: '10:30 – 11:30',
    type: 'panel',
    title: 'Panel 2 — Sportul ca instrument diplomatic',
    moderator: 'Andrei Țărnea, director general comunicare și diplomație publică, MAE',
    speakers: [
      { name: 'Titus Corlățean' },
      { name: 'Cristian Bușoi' },
      { name: 'Ambasador Dr. Peer Gebauer' },
      { name: 'Ambasador Dr. Mohammed Abdulghani M. Khayat' },
      { name: 'E.S. Alberto Rodriguez Goñi' },
      { name: 'Cristian Jura' },
    ],
  },
  { time: '15 min', type: 'break', title: 'Pauză de cafea' },
  {
    time: '11:45 – 12:45',
    type: 'panel',
    title: 'Panel 3 — Sportul ca brand de țară',
    moderator: 'Alexandru Coita, diplomat și analist politic',
    speakers: [
      { name: 'Nadia Comăneci', note: 'video' },
      { name: 'Camelia Potec' },
      { name: 'Carmencita Constantin' },
      { name: 'Claudia Nicolae' },
      { name: 'Cristian Gheorghe' },
      { name: 'Marius Copil' },
      { name: 'Andrei Pascu' },
    ],
  },
  {
    time: '12:45 – 13:00',
    type: 'session',
    title: 'Cuvânt de încheiere',
    note: 'Andrei Novac, Secretar de stat pentru relația cu Institutul Cultural Român, politici culturale și sport, MAE',
  },
];

export default function Program() {
  return (
    <section className="section section-muted" id="program">
      <div className="container">
        <p className="eyebrow">Agenda evenimentului</p>
        <h2 className="section-title">Programul conferinței</h2>
        <p className="body-md">
          24 septembrie 2024, Palatul Parlamentului. Fiecare panel are moderator, invitați și
          10 minute dedicate întrebărilor din public.
        </p>

        <Reveal as="ul" className="agenda-timeline">
          {agenda.map((item, i) => (
            <li key={i} className={`agenda-item agenda-item-${item.type}`}>
              <div className="agenda-time">{item.time}</div>
              <div className="agenda-content">
                <h3 className="agenda-title">{item.title}</h3>
                {item.note && <p className="agenda-note">{item.note}</p>}
                {item.moderator && (
                  <p className="agenda-moderator">
                    <span>Moderator</span> {item.moderator}
                  </p>
                )}
                {item.speakers && (
                  <ul className="agenda-speakers">
                    {item.speakers.map((s) => (
                      <li key={s.name}>
                        <a href={`#speaker-${slugify(s.name)}`}>{s.name}</a>
                        {s.note && <span className="agenda-speaker-note"> ({s.note})</span>}
                      </li>
                    ))}
                  </ul>
                )}
                {item.type === 'panel' && <p className="agenda-qa">10&apos; sesiune de întrebări și răspunsuri</p>}
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="agenda-exhibition">
          <div className="agenda-exhibition-time">08:00 – 13:00 · pe tot parcursul evenimentului</div>
          <h3>Expoziție de fotografie</h3>
          <p>110 ani de olimpism în România</p>
        </Reveal>
      </div>
    </section>
  );
}
