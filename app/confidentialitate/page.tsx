import type { Metadata } from 'next';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate — Sports Diplomacy Conference',
  description: 'Politica de confidențialitate a site-ului Sports Diplomacy Conference.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Politica de confidențialitate" updated="24 septembrie 2024">
      <h2>1. Cine suntem</h2>
      <p>
        Acest site prezintă Sports Diplomacy Conference, eveniment desfășurat la Palatul
        Parlamentului, București. Pentru orice întrebare legată de datele tale cu caracter
        personal, ne poți contacta la{' '}
        <a href="mailto:office@sportsdiplomacy.ro">office@sportsdiplomacy.ro</a>.
      </p>

      <h2>2. Ce date colectăm</h2>
      <p>
        Site-ul, în forma sa actuală, nu colectează date personale prin formulare. Singurele
        date procesate sunt:
      </p>
      <ul>
        <li>
          <strong>Cookie-uri esențiale</strong> — necesare pentru funcționarea de bază a
          site-ului (ex. reținerea alegerii tale privind bannerul de cookie-uri).
        </li>
        <li>
          <strong>Date tehnice generale</strong> — colectate automat de furnizorul de
          găzduire (adresă IP, tip de browser), strict pentru funcționarea și securitatea
          serviciului, fără a fi folosite pentru identificarea ta personală.
        </li>
      </ul>
      <p>
        Dacă ne contactezi direct prin email, vom folosi adresa ta de email doar pentru a-ți
        răspunde solicitării.
      </p>

      <h2>3. Cum folosim datele</h2>
      <p>
        Nu vindem, închiriem sau distribuim datele tale către terți în scopuri de marketing.
        Datele tehnice minime colectate automat sunt folosite exclusiv pentru funcționarea și
        securitatea site-ului.
      </p>

      <h2>4. Drepturile tale</h2>
      <p>
        Conform Regulamentului General privind Protecția Datelor (GDPR), ai dreptul de a
        solicita:
      </p>
      <ul>
        <li>acces la datele pe care le deținem despre tine;</li>
        <li>rectificarea datelor inexacte;</li>
        <li>ștergerea datelor („dreptul de a fi uitat”);</li>
        <li>restricționarea sau opoziția față de prelucrare;</li>
        <li>portabilitatea datelor, unde este aplicabil.</li>
      </ul>
      <p>
        Pentru exercitarea oricăruia dintre aceste drepturi, ne poți scrie la{' '}
        <a href="mailto:office@sportsdiplomacy.ro">office@sportsdiplomacy.ro</a>.
      </p>

      <h2>5. Securitate</h2>
      <p>
        Site-ul este găzduit pe infrastructură modernă (Vercel), cu conexiune securizată
        (HTTPS) pentru toate paginile.
      </p>

      <h2>6. Modificări ale acestei politici</h2>
      <p>
        Această politică poate fi actualizată periodic. Orice modificare va fi reflectată pe
        această pagină, cu data ultimei actualizări afișată mai sus.
      </p>
    </LegalPageShell>
  );
}
