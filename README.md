# Sports Diplomacy — Next.js

Site de prezentare pentru Sports Diplomacy Conference (Palatul Parlamentului, 24 septembrie 2024). Next.js 14, App Router, TypeScript, CSS simplu (fără framework CSS), imagini optimizate automat prin `next/image`.

## Rulare locală

Necesită Node.js 18.18+ (recomandat 20 LTS).

```bash
npm install
npm run dev
```

Deschide `http://localhost:3000`.

## Structură

```
app/
  layout.tsx      → fonturi (Fraunces / Inter / IBM Plex Mono), metadata SEO
  page.tsx         → asamblează secțiunile
  globals.css       → toate design tokens + stiluri (culorile clientului: #0A021E / #1D5199 / #153872)
components/
  Header.tsx        → nav sticky + meniu mobil (client component)
  Hero.tsx
  About.tsx
  Speakers.tsx       → randează lib/data.ts → speakers
  Media.tsx          → randează lib/data.ts → mediaArticles
  Sponsors.tsx        → randează lib/data.ts → sponsors
  CTA.tsx
  Footer.tsx
  Reveal.tsx          → wrapper reutilizabil pentru animația scroll-reveal
lib/
  data.ts             → toate datele editabile (speakeri, articole media, sponsori) — un singur loc de update
public/images/
  gallery/            → poze eveniment
  sponsors/           → sigle sponsori
```

## Editare conținut

Tot conținutul variabil (nume speakeri, roluri, articole media, sponsori) e în `lib/data.ts`. Nu trebuie atinse componentele pentru modificări de text/imagini.

**Secțiunea Media** conține 4 carduri placeholder scrise pe baza conținutului real al evenimentului, dar nu sunt articole complete — înlocuiește `title`/`excerpt` din `mediaArticles` cu text real când e disponibil. Legăturile din carduri duc spre `/media/[slug]` — pagina de articol individual nu există încă (trebuie creată în `app/media/[slug]/page.tsx` când ai conținutul).

## Deploy pe Vercel

```bash
npm install -g vercel
vercel
```

Sau conectează repo-ul direct din dashboard-ul Vercel (Import Project → selectează repo-ul). Build command și output sunt detectate automat (`next build`).

## Observații

- Am validat build-ul de producție (`next build`) local — compilează fără erori.
- 3 sigle sponsor (fișierele `5.png`, `9.png`, `14.png` din `public/images/sponsors/`) nu au brand identificabil din imagine — alt-text generic „Partener eveniment" în `lib/data.ts`. Actualizează dacă știi denumirile.
- Nu există fișier de logo separat — header/footer folosesc un logo tipografic (cerc „SD" + wordmark). Dacă ai un logo real (SVG/PNG), înlocuiește marcajul din `Header.tsx` și `Footer.tsx`.
