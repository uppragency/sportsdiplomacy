import type { Metadata } from 'next';
import Image from 'next/image';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Termeni și condiții — Sports Diplomacy Conference',
  description: 'Termenii și condițiile de utilizare a site-ului Sports Diplomacy Conference.',
};

export default function TermsPage() {
  return (
    <>
      <section className="termeni" id="top">
        <div className="termeni-media">
          <Image
            src="/images/gallery/poza15.jpg"
            alt="Sesiune plenară Sports Diplomacy Conference în Sala Drepturilor Omului, Palatul Parlamentului"
            fill
            priority
            sizes="50vh"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 35%',
            }}
          />
          <div className="termeni-scrim" />
        </div>

        <div className="termeni-content">
          <p className="eyebrow eyebrow-light">
            Termeni și condiții — Sports Diplomacy Conference
          </p>

          <p className="termeni-lead">
            Termenii și condițiile de utilizare a site-ului Sports Diplomacy Conference.
          </p>
        </div>
      </section>

    <LegalPageShell title="Termeni și condiții" updated="24 septembrie 2024">
      <h2>1. Acceptarea termenilor</h2>
      <p>
        Prin accesarea și utilizarea acestui site, ești de acord cu termenii și condițiile de
        mai jos. Dacă nu ești de acord cu acești termeni, te rugăm să nu utilizezi site-ul.
      </p>

      <h2>2. Proprietate intelectuală</h2>
      <p>
        Conținutul acestui site — texte, fotografii, sigla „Sports Diplomacy” și elementele
        grafice — este protejat de drepturi de autor și aparține organizatorilor conferinței
        sau este utilizat cu permisiunea deținătorilor de drepturi. Siglele instituțiilor și
        sponsorilor afișate aparțin entităților respective și sunt folosite cu titlu
        informativ, în contextul parteneriatului lor cu evenimentul.
      </p>
      <p>
        Reproducerea, distribuirea sau utilizarea conținutului acestui site în alte scopuri
        decât cel personal, necomercial, necesită acordul prealabil al organizatorilor.
      </p>

      <h2>3. Conținut de la terți</h2>
      <p>
        Secțiunea „Media” a site-ului include linkuri și referințe către articole publicate de
        organizații de presă terțe. Aceste materiale aparțin publicațiilor respective; site-ul
        nostru doar le referențiază și direcționează vizitatorii către sursa originală.
      </p>

      <h2>4. Limitarea răspunderii</h2>
      <p>
        Informațiile prezentate pe acest site au caracter informativ general. Deși depunem
        eforturi rezonabile pentru acuratețea conținutului, nu garantăm că informațiile sunt
        complete, actualizate sau lipsite de erori în orice moment.
      </p>
      <p>
        Nu suntem responsabili pentru conținutul site-urilor externe către care acest site
        face trimitere (articole de presă, siglele sponsorilor sau ale instituțiilor
        partenere).
      </p>

      <h2>5. Modificări</h2>
      <p>
        Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment.
        Modificările intră în vigoare din momentul publicării pe această pagină.
      </p>

      <h2>6. Legea aplicabilă</h2>
      <p>
        Acești termeni sunt guvernați de legislația română. Orice dispută va fi soluționată
        conform legislației în vigoare în România.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pentru întrebări legate de acești termeni, ne poți contacta la{' '}
        <a href="mailto:office@sportsdiplomacy.ro">office@sportsdiplomacy.ro</a>.
      </p>
      
    </LegalPageShell>
  );
}
