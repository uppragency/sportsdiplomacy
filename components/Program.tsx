'use client';

import { useState } from 'react';
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
    title: 'Cuvânt de bun-venit',
    note: 'Tudor Oancea, co-organizator, Comisia pentru politică externă din Senat · Intonarea Imnului Național a cappella – Opera Română',
  },
  {
    time: '09:10 – 09:15',
    type: 'session',
    title: 'Cuvânt de deschidere a evenimentului',
    note: 'Titus Corlățean, președinte Comisia pentru politică externă din Senat, și Bogdan Matei, președinte Comisia pentru tineret și sport din Senat',
  },
  {
    time: '09:15 – 10:15',
    type: 'panel',
    title: 'Panel 1 — România și diplomația prin sport',
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
    title: 'Panel 2 — Sportul ca instrument de diplomație și cooperare internațională',
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
    title: 'Panel 3 — Sportul, identitatea și brandul de țară',
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

// Primul panel e deschis implicit, ca vizitatorul să înțeleagă imediat că se poate extinde
const FIRST_PANEL_INDEX = agenda.findIndex((item) => item.type === 'panel');

export default function Program() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([FIRST_PANEL_INDEX]));

  const toggle = (i: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="section section-muted" id="program">
      <div className="container">
        <p className="eyebrow">Agenda evenimentului</p>
        <h2 className="section-title">Programul conferinței</h2>
        <p className="body-md">
          24 septembrie 2024, Palatul Parlamentului.
        </p>

        <Reveal as="ul" className="agenda-list">
          {agenda.map((item, i) => {
            if (item.type !== 'panel') {
              return (
                <li key={i} className={`agenda-simple agenda-simple-${item.type}`}>
                  <div className="agenda-simple-time">{item.time}</div>
                  <div className="agenda-simple-content">
                    <h3>{item.title}</h3>
                    {item.note && <p>{item.note}</p>}
                  </div>
                </li>
              );
            }

            const isOpen = openIndexes.has(i);
            return (
              <li key={i} className={`agenda-panel${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="agenda-panel-head"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="agenda-panel-time">{item.time}</span>
                  <h3>{item.title}</h3>
                  <svg className="agenda-panel-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="agenda-panel-body">
                  <div className="agenda-panel-body-inner">
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
                    <p className="agenda-qa">10&apos; sesiune de întrebări și răspunsuri</p>
                  </div>
                </div>
              </li>
            );
          })}
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
