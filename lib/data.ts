export type Speaker = {
  name: string;
  role: string;
  category: 'Oficial' | 'Diplomat' | 'Sportiv' | 'Presă' | 'Invitat';
  photo?: string; // /images/speakers/nume-fisier.jpg — dacă lipsește, se afișează un placeholder cu inițiale
};

export const speakers: Speaker[] = [
  { name: 'Elisabeta Lipă', role: 'Președinte, Agenția Națională pentru Sport', category: 'Oficial', photo: '/images/speakers/elisabeta-lipa.jpg' },
  { name: 'Titus Corlățean', role: 'Președinte, Comisia pentru politică externă din Senat', category: 'Oficial', photo: '/images/speakers/titus-corlatean.jpg' },
  { name: 'Mihai Covaliu', role: 'Președinte, Comitetul Olimpic și Sportiv Român', category: 'Oficial', photo: '/images/speakers/mihai-covaliu.jpg' },
  { name: 'Nadia Comăneci', role: 'Gimnastă română', category: 'Sportiv', photo: '/images/speakers/nadia-comaneci.jpg' },
  { name: 'Ambasador Dr. Peer Gebauer', role: 'Ambasador, Republica Federală Germania', category: 'Diplomat', photo: '/images/speakers/ambasador-peer-gebauer.jpg' },
  { name: 'Andrei Țărnea', role: 'Director general comunicare și diplomație publică, MAE', category: 'Oficial', photo: '/images/speakers/andrei-tarnea.jpg' },
  { name: 'Cristina Herea', role: 'Jurnalist, Romania TV', category: 'Presă', photo: '/images/speakers/cristina-herea.jpg' },
  { name: 'Alexandru Coita', role: 'Diplomat și analist politic', category: 'Diplomat', photo: '/images/speakers/alexandru-coita.jpg' },
  { name: 'Tudor Oancea', role: 'Co-organizator, Comisia pentru politică externă din Senat', category: 'Oficial', photo: '/images/speakers/tudor-oancea.jpg' },
  { name: 'Andrei Pascu', role: 'Jucător profesionist de esports', category: 'Sportiv', photo: '/images/speakers/andrei-pascu.jpg' },
  { name: 'Adrian Socaciu', role: 'Co-organizator, Președinte Institutul Sportiv Român', category: 'Oficial', photo: '/images/speakers/adrian-socaciu.jpg' },
  { name: 'Octavian Morariu', role: 'Membru CIO pentru România', category: 'Oficial', photo: '/images/speakers/octavian-morariu.jpg' },
  { name: 'Bogdan Matei', role: 'Președinte, Comisia pentru tineret și sport din Senat', category: 'Oficial', photo: '/images/speakers/bogdan-matei.jpg' },
  { name: 'Carmencita Constantin', role: 'Președinte, Federația Română de Gimnastică', category: 'Sportiv', photo: '/images/speakers/carmencita-constantin.jpg' },
  { name: 'Cristian Bușoi', role: 'Vicepreședinte PNL, fost președinte Comisia ITRE, Parlamentul European', category: 'Oficial', photo: '/images/speakers/cristian-busoi.jpg' },
  { name: 'Carmen Tocală', role: 'Invitat', category: 'Invitat', photo: '/images/speakers/carmen-tocala.jpg' },
  { name: 'Andrei Novac', role: 'Secretar de stat, relația cu Institutul Cultural Român, politici culturale și sport, MAE', category: 'Oficial', photo: '/images/speakers/andrei-novac.jpg' },
  { name: 'Marius Copil', role: 'Jucător profesionist de tenis', category: 'Sportiv', photo: '/images/speakers/marius-copil.jpg' },
  { name: 'Ambasador Nicolae Comănescu', role: 'Ambasador', category: 'Diplomat', photo: '/images/speakers/ambasador-nicolae-comanescu.jpg' },
  { name: 'Claudia Nicolae', role: 'Director general, Agerpres', category: 'Presă', photo: '/images/speakers/claudia-nicolae.jpg' },
  { name: 'Cristian Gheorghe', role: 'Fondator, Sports Business Academy', category: 'Oficial', photo: '/images/speakers/cristian-gheorghe.jpg' },
  { name: 'Florin Șari', role: 'Manager politici publice și responsabilitate socială, Federația Română de Fotbal', category: 'Oficial', photo: '/images/speakers/florin-sari.jpg' },
  { name: 'Ambasador Dr. Mohammed Abdulghani M. Khayat', role: 'Ambasadorul Regatului Arabiei Saudite în România', category: 'Diplomat', photo: '/images/speakers/ambasador-mohammed-khayat.jpg' },
  { name: 'E.S. Alberto Rodriguez Goñi', role: 'Ambasador, Republica Orientală Uruguay în România', category: 'Diplomat' },
  { name: 'Cristian Jura', role: 'Invitat', category: 'Invitat' },
  { name: 'Ionuț Popa', role: 'Invitat', category: 'Invitat' },
  { name: 'Camelia Potec', role: 'Vicepreședinte Comitetul Executiv COSR, Președinte Federația Română de Natație', category: 'Sportiv', photo: '/images/speakers/camelia-potec.jpg' },
];

export type GalleryPhoto = {
  file: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { file: 'poza13.jpg', alt: 'Panel de discuții, Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza14.jpg', alt: 'Mihai Covaliu și Adrian Socaciu, Sports Diplomacy Conference' },
  { file: 'poza16.jpg', alt: 'Cor a cappella, intonarea Imnului Național, Sports Diplomacy Conference' },
  { file: 'poza17.jpg', alt: 'Participanți în picioare, Sports Diplomacy Conference' },
  { file: 'poza18.jpg', alt: 'Intervenție video în cadrul Panel 3, Sports Diplomacy Conference' },
  { file: 'poza19.jpg', alt: 'Participanți la conferință, Sports Diplomacy Conference' },
  { file: 'poza20.jpg', alt: 'Expoziția 110 ani de Olimpism în România, Palatul Parlamentului' },
  { file: 'poza21.jpg', alt: 'Ambasadori la Panel 2, Sports Diplomacy Conference' },
  { file: 'poza22.jpg', alt: 'Speakeri la conferință, Sports Diplomacy Conference' },
  { file: 'poza1.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza2.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza3.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza4.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza5.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza6.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza7.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza8.jpg', alt: 'Expoziția 110 ani de Olimpism în România, Palatul Parlamentului' },
  { file: 'poza9.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza10.jpg', alt: 'Sports Diplomacy Conference, Palatul Parlamentului' },
  { file: 'poza11.jpg', alt: 'Ecran de deschidere Sports Diplomacy Conference' },
  { file: 'poza12.jpg', alt: 'Fotografie de grup, Sports Diplomacy Conference' },
];

export type MediaArticle = {
  slug: string;
  title: string;
  image: string;
  sourceUrl: string;
  publication?: string;
  date?: string;
  type: 'presa' | 'social';
};

// Articole reale de presă despre Sports Diplomacy Conference.
// Thumbnail-urile folosesc poze locale din galerie (poza15 este rezervată secțiunii About).
// Instagram/Facebook nu permit extragerea automată a pozei/titlului (robots blocked),
// deci acele carduri folosesc tot o poză din galeria proprie ca fallback vizual.
export const mediaArticles: MediaArticle[] = [
  {
    slug: 'evz-interviu-isr',
    title: 'Conferința „Sports Diplomacy”. Interviu cu președintele Institutului Sportiv Român',
    image: '/images/gallery/poza2.jpg',
    sourceUrl: 'https://evz.ro/conferinta-sports-diplomacy-interviu-cu-presedintele-institutului-sportiv-roman.html',
    publication: 'Evenimentul Zilei',
    date: '25 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'prosport-lipa-covaliu-comaneci',
    title: '„Diplomația Sportivă”, conferință cu Elisabeta Lipă și Mihai Covaliu. Ce mesaj a transmis Nadia Comăneci',
    image: '/images/gallery/poza3.jpg',
    sourceUrl:
      'https://www.prosport.ro/alte-sporturi/diplomatia-sportiva-conferinta-cu-elisabeta-lipa-si-mihai-covaliu-ce-mesaj-a-transmis-nadia-comaneci-19993952',
    publication: 'Prosport',
    date: '24 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'ici-bucuresti',
    title: 'ICI București a participat la Conferința „Sports Diplomacy”',
    image: '/images/gallery/poza6.jpg',
    sourceUrl: 'https://ici.ro/ro/evenimente/ici-bucuresti-a-participat-la-conferinta-sports-diplomacy/',
    publication: 'ICI București',
    date: '24 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'evz-moldova-europa',
    title: 'Sportul poate aduce Republica Moldova mai aproape de Europa. Conferința Sports Diplomacy',
    image: '/images/gallery/poza7.jpg',
    sourceUrl:
      'https://evz.ro/sportul-poate-aduce-republica-moldova-mai-aproape-de-europa-conferinta-sports-diplomacy.html',
    publication: 'Evenimentul Zilei',
    date: '25 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'nineoclock-corlatean',
    title:
      'The Participation of the President of the Foreign Affairs Committee in the Romanian Senate, Senator Titus Corlățean, at the "Sports Diplomacy" Conference',
    image: '/images/gallery/poza8.jpg',
    sourceUrl:
      'https://nineoclock.ro/the-participation-of-the-president-of-the-foreign-affairs-committee-in-the-romanian-senate-senator-titus-corlatean-at-the-sports-diplomacy-conference/',
    publication: 'Nine O\u2019Clock',
    date: '30 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'infocons-mierlea',
    title: 'Sorin Mierlea, Președintele InfoCons, participă la Conferința „Diplomația Sportivă”',
    image: '/images/gallery/poza10.jpg',
    sourceUrl:
      'https://infocons.ro/stiri-scurte/sorin-mierlea-presedintele-infocons-participa-la-conferinta-diplomatia-sportiva/',
    publication: 'InfoCons',
    date: '24 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'oranoua-socaciu',
    title: 'Adrian Socaciu: Conferința „Sports Diplomacy”',
    image: '/images/gallery/poza11.jpg',
    sourceUrl: 'https://www.oranoua.ro/adrian-socaciu-conferinta-sports-diplomacy/',
    publication: 'Ora Nouă',
    date: '25 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'agerpres-comaneci',
    title: 'Nadia Comăneci, la conferința Diplomația Sportivă: Mulți sportivi devin diplomați extraordinari fără să știe',
    image: '/images/gallery/poza12.jpg',
    sourceUrl:
      'https://agerpres.ro/sport/2024/09/24/nadia-comaneci-la-conferinta-diplomatia-sportiva-multi-sportivi-devin-diplomati-extraordinari-fara-s--1359746',
    publication: 'Agerpres',
    date: '24 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'evz-sportivi-diplomati',
    title: 'Sports Diplomacy, conferința dedicată sportivilor. Nadia Comăneci: Cei mai mulți dintre sportivi devin, fără să știe, diplomați',
    image: '/images/gallery/poza13.jpg',
    sourceUrl:
      'https://evz.ro/sports-diplomacy-conferinta-dedicata-sportivilor-nadia-comaneci-cei-mai-multi-dintre-sportivi-devin-fara-sa-stie-diplomati.html',
    publication: 'Evenimentul Zilei',
    date: '24 septembrie 2024',
    type: 'presa',
  },
  {
    slug: 'financialintelligence-romania-avanseaza',
    title: 'România avansează cu Sports Diplomacy după succesul de la Jocurile Olimpice de la Paris',
    image: '/images/gallery/poza14.jpg',
    sourceUrl:
      'https://financialintelligence.ro/romania-avanseaza-cu-sports-diplomacy-dupa-succesul-de-la-jocurile-olimpice-de-la-paris/',
    publication: 'Financial Intelligence',
    date: '11 octombrie 2024',
    type: 'presa',
  },
  {
    slug: 'business-review-romania-advances',
    title: 'Romania Advances Sports Diplomacy Following Success at Paris 2024 Olympics',
    image: '/images/gallery/poza16.jpg',
    sourceUrl:
      'https://business-review.eu/business/sports/romania-advances-sports-diplomacy-following-success-at-paris-2024-olympics-271241',
    publication: 'Business Review',
    date: '3 octombrie 2024',
    type: 'presa',
  },
  {
    slug: 'instagram-post-1',
    title: 'Sports Diplomacy Conference — postare Instagram',
    image: '/images/gallery/poza1.jpg',
    sourceUrl: 'https://www.instagram.com/p/DY2IPeXDEsK/',
    publication: 'Instagram',
    type: 'social',
  },
  {
    slug: 'instagram-post-2',
    title: 'Sports Diplomacy Conference — postare Instagram',
    image: '/images/gallery/poza5.jpg',
    sourceUrl: 'https://www.instagram.com/p/DY3wMOViCZ0/',
    publication: 'Instagram',
    type: 'social',
  },
  {
    slug: 'facebook-aspen',
    title: 'Aspen Institute România salută inițiativa Sports Diplomacy',
    image: '/images/gallery/poza9.jpg',
    sourceUrl:
      'https://www.facebook.com/AspenInstituteRomania/posts/salut%C4%83m-ini%C8%9Biativa-lui-%F0%9D%90%93%F0%9D%90%AE%F0%9D%90%9D%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%8E%F0%9D%90%9A%F0%9D%90%A7%F0%9D%90%9C%F0%9D%90%9E%F0%9D%90%9A-membru-al-aspen-society-of-fellows-alumni-as/958196973016052/',
    publication: 'Facebook — Aspen Institute România',
    type: 'social',
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
