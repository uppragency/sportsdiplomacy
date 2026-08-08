import Reveal from './Reveal';
import { speakers } from '@/lib/data';

export default function Speakers() {
  return (
    <section className="section section-dark" id="speakeri">
      <div className="container">
        <p className="eyebrow eyebrow-light">Speakeri și moderatori</p>
        <h2 className="section-title section-title-light">Vocile din spatele conferinței</h2>

        <Reveal as="ul" className="speaker-grid">
          {speakers.map((speaker) => (
            <li className="speaker-card" key={speaker.name}>
              <span className="speaker-name">{speaker.name}</span>
              <span className="speaker-role">{speaker.role}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
