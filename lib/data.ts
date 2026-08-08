export type Speaker = {
  name: string;
  role: string;
};

export const speakers: Speaker[] = [
  { name: 'Elisabeta Lipă', role: 'Președinte, Agenția Națională pentru Sport' },
  { name: 'Titus Corlățean', role: 'Președinte, Comisia pentru politică externă din Senat' },
  { name: 'Mihai Covaliu', role: 'Președinte, Comitetul Olimpic și Sportiv Român' },
  { name: 'Nadia Comăneci', role: 'Gimnastă română' },
  { name: 'Ambasador Dr. Peer Gebauer', role: 'Ambasador, Republica Federală Germania' },
  { name: 'Andrei Țărnea', role: 'Director general comunicare și diplomație publică, MAE' },
  { name: 'Cristina Herea', role: 'Jurnalist, Romania TV' },
  { name: 'Alexandru Coita', role: 'Diplomat și analist politic' },
  { name: 'Tudor Oancea', role: 'Co-organizator, Comisia pentru politică externă din Senat' },
  { name: 'Andrei Pascu', role: 'Jucător profesionist de esports' },
  { name: 'Adrian Socaciu', role: 'Co-organizator, Președinte Institutul Sportiv Român' },
  { name: 'Octavian Morariu', role: 'Membru CIO pentru România' },
  { name: 'Bogdan Matei', role: 'Președinte, Comisia pentru tineret și sport din Senat' },
  { name: 'Carmencita Constantin', role: 'Președinte, Federația Română de Gimnastică' },
  { name: 'Cristian Bușoi', role: 'Vicepreședinte PNL, fost președinte Comisia ITRE, Parlamentul European' },
  { name: 'Carmen Tocală', role: 'Invitat' },
  { name: 'Andrei Novac', role: 'Secretar de stat, relația cu Institutul Cultural Român, politici culturale și sport, MAE' },
  { name: 'Marius Copil', role: 'Jucător profesionist de tenis' },
  { name: 'Ambasador Nicolae Comănescu', role: 'Ambasador' },
  { name: 'Claudia Nicolae', role: 'Director general, Agerpres' },
  { name: 'Cristian Gheorghe', role: 'Fondator, Sports Business Academy' },
  { name: 'Florin Șari', role: 'Manager politici publice și responsabilitate socială, Federația Română de Fotbal' },
  { name: 'Ambasador Dr. Mohammed Abdulghani M. Khayat', role: 'Ambasadorul Regatului Arabiei Saudite în România' },
  { name: 'Cristian Jura', role: 'Invitat' },
  { name: 'Ionuț Popa', role: 'Invitat' },
  { name: 'Camelia Potec', role: 'Vicepreședinte Comitetul Executiv COSR, Președinte Federația Română de Natație' },
];

export type MediaArticle = {
  slug: string;
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};

export const mediaArticles: MediaArticle[] = [
  {
    slug: 'deschiderea-conferintei',
    image: '/images/gallery/poza11.jpg',
    imageAlt: 'Ecran de deschidere Sports Diplomacy Conference, Palatul Parlamentului',
    date: '24 septembrie 2024',
    title: 'Deschiderea conferinței la Palatul Parlamentului',
    excerpt:
      'Sports Diplomacy Conference a reunit lideri politici, diplomați și sportivi într-o singură discuție despre puterea sportului de a uni națiuni.',
    featured: true,
  },
  {
    slug: 'expozitia-110-ani-olimpism',
    image: '/images/gallery/poza8.jpg',
    imageAlt: 'Expoziția 110 ani de Olimpism în România, Palatul Parlamentului',
    date: '24 septembrie 2024',
    title: 'Expoziția „110 ani de Olimpism în România”',
    excerpt:
      'O expoziție de fotografie dedicată unui secol de performanță sportivă românească a însoțit conferința pe tot parcursul zilei.',
  },
  {
    slug: 'diplomati-si-oficiali',
    image: '/images/gallery/poza3.jpg',
    imageAlt: 'Diplomați și oficiali în cadrul Sports Diplomacy Conference',
    date: '24 septembrie 2024',
    title: 'Diplomați și oficiali, la aceeași masă',
    excerpt:
      'Corpul diplomatic acreditat la București s-a alăturat reprezentanților federațiilor sportive naționale și administrației publice centrale.',
  },
  {
    slug: 'sportivi-si-campioni',
    image: '/images/gallery/poza6.jpg',
    imageAlt: 'Sportivi și campioni în cadrul Sports Diplomacy Conference',
    date: '24 septembrie 2024',
    title: 'Sportivi și campioni în dialog cu decidenții',
    excerpt:
      'De la gimnastică la tenis și esports, sportul românesc a avut o voce directă în discuțiile despre diplomație sportivă.',
  },
];

export type Sponsor = {
  file: string;
  alt: string;
  width: number;
  height: number;
};

export const sponsors: Sponsor[] = [
  { file: '1.png', alt: 'CitySport', width: 526, height: 160 },
  { file: '2.png', alt: 'Bounce', width: 452, height: 138 },
  { file: '3.png', alt: 'Cotnari, Casa de vinuri', width: 774, height: 452 },
  { file: '4.png', alt: 'Uber', width: 388, height: 135 },
  { file: '5.png', alt: 'Partener eveniment', width: 413, height: 309 },
  { file: '6.png', alt: '5 to go', width: 365, height: 364 },
  { file: '7.png', alt: 'Bilbor', width: 594, height: 382 },
  { file: '8.png', alt: 'Digital Crusade', width: 251, height: 300 },
  { file: '9.png', alt: 'Partener eveniment', width: 232, height: 346 },
  { file: '10.png', alt: 'Capital', width: 487, height: 144 },
  { file: '11.png', alt: 'EVZ.ro', width: 660, height: 415 },
  { file: '12.png', alt: 'EVZ.ro', width: 660, height: 415 },
  { file: '13.png', alt: 'Romania TV', width: 475, height: 96 },
  { file: '14.png', alt: 'Partener eveniment', width: 237, height: 268 },
  { file: '15.png', alt: 'Radio România', width: 534, height: 240 },
  { file: '16.png', alt: 'Agerpres', width: 512, height: 173 },
  { file: '17.png', alt: 'F.M. Medident', width: 417, height: 362 },
  { file: '18.png', alt: 'Elite Energy', width: 553, height: 94 },
  { file: '19.png', alt: 'Decoraktiva by Alina Alexe', width: 375, height: 376 },
];
