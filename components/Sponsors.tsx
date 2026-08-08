import Reveal from './Reveal';
import { sponsors } from '@/lib/data';

export default function Sponsors() {
  const track = [...sponsors, ...sponsors]; // dublat pentru buclă continuă

  return (
    <section className="section section-muted" id="sponsori">
      <div className="container">
        <p className="eyebrow">Sponsori și parteneri media</p>
        <h2 className="section-title">Susținători ai evenimentului</h2>

        <Reveal className="sponsor-marquee">
          <div className="sponsor-track">
            {track.map((sponsor, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${sponsor.file}-${i}`}
                src={`/images/sponsors/${sponsor.file}`}
                alt={i < sponsors.length ? sponsor.alt : ''}
                aria-hidden={i >= sponsors.length}
                loading="lazy"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
