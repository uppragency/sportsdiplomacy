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
  layout.tsx      → fonturi (Roboto / Roboto Slab / Roboto Mono), metadata SEO
  page.tsx         → asamblează secțiunile
  globals.css       → toate design tokens + stiluri (culorile clientului: #0A021E / #1D5199 / #153872)
components/
  Header.tsx        → nav sticky + meniu mobil (client component)
  Hero.tsx           → Ken Burns pe fundal + intrare eșalonată a textului
  About.tsx          → include stat-cards (fapte cheie, carduri elevate cu iconițe)
  Speakers.tsx       → carusel cu contor (01/26) + bară de progres (client component)
  Gallery.tsx         → randează lib/data.ts → galleryPhotos, cu lightbox (client component)
  Media.tsx           → randează lib/data.ts → mediaArticles (articole externe, link către sursă)
  Institutions.tsx     → instituții organizatoare (placeholder text, fără sigle reale încă)
  Sponsors.tsx        → bandă auto-scroll infinită, pauză la hover
  CTA.tsx              → include textură de fundal (puncte discrete)
  Footer.tsx           → footer editorial, 3 coloane + siglă mare estompată
  Reveal.tsx          → wrapper reutilizabil pentru animația scroll-reveal
lib/
  data.ts             → toate datele editabile (speakeri, poze galerie, articole media, sponsori) — un singur loc de update
public/images/
  gallery/            → poze eveniment (folosite integral în secțiunea Galerie)
  sponsors/           → sigle sponsori
```

## Editare conținut

Tot conținutul variabil (nume speakeri, roluri, poze galerie, articole media, sponsori) e în `lib/data.ts`. Nu trebuie atinse componentele pentru modificări de text/imagini.

**Galeria foto** (`galleryPhotos`) conține toate cele 12 poze din eveniment, afișate într-un grid cu lightbox (click pentru mărire, navigare cu săgeți/tastatură, Escape pentru închidere).

**Secțiunea Media** (`mediaArticles`) conține 12 articole reale de presă despre eveniment, cu titlu, poză (preluată direct de pe site-ul sursă) și link către articolul original (`target="_blank"`). Imaginile Instagram/Facebook nu au putut fi extrase automat (platformele blochează accesul automat), deci acele 3 carduri folosesc o poză din galeria proprie ca fallback vizual — linkul duce totuși corect spre postarea reală.

Pozele articolelor sunt încărcate direct de pe domeniile surselor (evz.ro, prosport.ro, agerpres.ro etc.) prin `next/image`, care le optimizează automat. Domeniile permise sunt listate în `next.config.mjs` → `images.remotePatterns`. Dacă adaugi articole de pe alte domenii, trebuie adăugat domeniul acolo.

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
