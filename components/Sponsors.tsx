import Image from 'next/image';
import Reveal from './Reveal';
import { sponsors } from '@/lib/data';

export default function Sponsors() {
  return (
    <section className="section section-muted" id="sponsori">
      <div className="container">
        <p className="eyebrow">Sponsori și parteneri media</p>
        <h2 className="section-title">Susținători ai evenimentului</h2>

        <Reveal as="ul" className="sponsor-grid">
          {sponsors.map((sponsor) => (
            <li key={sponsor.file}>
              <Image
                src={`/images/sponsors/${sponsor.file}`}
                alt={sponsor.alt}
                width={sponsor.width}
                height={sponsor.height}
              />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
