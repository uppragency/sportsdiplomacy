import type { Metadata } from 'next';
import { Roboto, Roboto_Slab, Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sports Diplomacy Conference — Palatul Parlamentului',
  description:
    'Sports Diplomacy Conference, Palatul Parlamentului, 24 septembrie 2024. Conferință care reunește lideri politici, diplomați, federații sportive și sportivi în jurul puterii sportului de a uni națiuni.',
  metadataBase: new URL('https://sportsdiplomacy.ro'),
  openGraph: {
    title: 'Sports Diplomacy Conference',
    description:
      'Palatul Parlamentului, 24 septembrie 2024. Puterea sportului unește națiuni.',
    locale: 'ro_RO',
    type: 'website',
    // Idee 18: imagine dedicată pentru preview-ul de share (WhatsApp/Facebook/LinkedIn)
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Sports Diplomacy Conference' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Diplomacy Conference',
    description: 'Palatul Parlamentului, 24 septembrie 2024. Puterea sportului unește națiuni.',
    images: ['/images/og-image.jpg'],
  },
};

// Idee 19: date structurate Schema.org — ajută Google să afișeze un card special de eveniment
const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Sports Diplomacy Conference',
  startDate: '2024-09-24',
  endDate: '2024-09-24',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Palatul Parlamentului',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'București',
      addressCountry: 'RO',
    },
  },
  image: ['https://sportsdiplomacy.ro/images/og-image.jpg'],
  description:
    'Conferință care reunește lideri politici, diplomați, federații sportive și sportivi în jurul puterii sportului de a uni națiuni.',
  organizer: {
    '@type': 'Organization',
    name: 'Sports Diplomacy',
    url: 'https://sportsdiplomacy.ro',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${robotoSlab.variable} ${roboto.variable} ${robotoMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#continut">Sari la conținut</a>
        {children}
      </body>
    </html>
  );
}
