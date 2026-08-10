import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Reveal from './Reveal';

const institutions = [
  { name: 'Senatul României', file: 'senat.png' },
  { name: 'Ministerul Afacerilor Externe', file: 'mae.png' },
  { name: 'Comitetul Olimpic și Sportiv Român', file: 'cosr.png' },
  { name: 'Institutul Sportiv Român', file: 'isr.png' },
  { name: 'Uniunea Europeană', file: 'ue.png' },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => w.length > 2 || /^[A-ZȘȚ]/.test(w))
    .slice(0, 1)[0]
    ?.slice(0, 3)
    .toUpperCase() ?? name.slice(0, 3).toUpperCase();
}

export default function Institutions() {
  return (
    <section className="section section-light" id="institutii">
      <div className="container">
        <p className="eyebrow">Sub egida</p>
        <h2 className="section-title">Instituții organizatoare și parteneri oficiali</h2>
        <p className="body-md">
          Conferința s-a desfășurat sub patronajul și cu sprijinul următoarelor instituții.
        </p>

        <Reveal as="ul" className="institution-grid">
          {institutions.map((inst) => {
            const filePath = path.join(process.cwd(), 'public/images/institutions', inst.file);
            const hasLogo = fs.existsSync(filePath);

            return (
              <li className="institution-tile" key={inst.name}>
                <div className="institution-logo-box">
                  {hasLogo ? (
                    <Image
                      src={`/images/institutions/${inst.file}`}
                      alt={inst.name}
                      fill
                      sizes="120px"
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <span className="institution-placeholder" aria-hidden="true">
                      {initials(inst.name)}
                    </span>
                  )}
                </div>
                <span className="institution-name">{inst.name}</span>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
