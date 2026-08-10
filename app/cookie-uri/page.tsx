import type { Metadata } from 'next';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Politica de cookie-uri — Sports Diplomacy Conference',
  description: 'Ce cookie-uri folosește site-ul Sports Diplomacy Conference și de ce.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPageShell title="Politica de cookie-uri" updated="24 septembrie 2024">
      <h2>1. Ce sunt cookie-urile</h2>
      <p>
        Cookie-urile sunt fișiere text mici, salvate în browserul tău atunci când vizitezi un
        site. Ele ajută site-ul să funcționeze corect și, în unele cazuri, să rețină
        preferințele tale de la o vizită la alta.
      </p>

      <h2>2. Ce cookie-uri folosim</h2>
      <p>
        Site-ul Sports Diplomacy Conference folosește, în prezent, exclusiv cookie-uri
        esențiale:
      </p>
      <ul>
        <li>
          <strong>Cookie de consimțământ</strong> — reține alegerea ta din bannerul de
          cookie-uri (accept toate / doar esențiale), ca să nu-ți mai cerem acordul la fiecare
          vizită.
        </li>
      </ul>
      <p>
        Nu folosim, momentan, cookie-uri de analiză (statistici de trafic), marketing sau
        urmărire (tracking) publicitară. Dacă acest lucru se va schimba în viitor, această
        pagină va fi actualizată corespunzător, iar bannerul de consimțământ va reflecta noile
        categorii.
      </p>

      <h2>3. Cookie-uri de la terți</h2>
      <p>
        Anumite imagini din secțiunea „Media” sunt încărcate direct de pe site-urile
        publicațiilor de presă originale. Aceste site-uri terțe pot seta propriile cookie-uri
        atunci când imaginile lor sunt afișate; acestea nu sunt controlate de noi și intră sub
        incidența politicilor de confidențialitate ale publicațiilor respective.
      </p>

      <h2>4. Cum poți controla cookie-urile</h2>
      <p>
        Poți accepta sau refuza cookie-urile neesențiale direct din bannerul afișat la prima
        vizită. În plus, majoritatea browserelor îți permit să ștergi sau să blochezi
        cookie-urile din setări — caută secțiunea „Confidențialitate” sau „Cookie-uri” din
        setările browserului tău.
      </p>
      <p>
        Blocarea cookie-urilor esențiale poate afecta funcționarea corectă a anumitor părți
        ale site-ului (de exemplu, bannerul de consimțământ va reapărea la fiecare vizită).
      </p>

      <h2>5. Actualizări</h2>
      <p>
        Această politică poate fi actualizată periodic pentru a reflecta schimbări în modul în
        care folosim cookie-urile. Data ultimei actualizări este afișată în partea de sus a
        acestei pagini.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pentru întrebări despre această politică, scrie-ne la{' '}
        <a href="mailto:office@sportsdiplomacy.ro">office@sportsdiplomacy.ro</a>.
      </p>
    </LegalPageShell>
  );
}
