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
    images: ['/images/gallery/poza4.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${robotoSlab.variable} ${roboto.variable} ${robotoMono.variable}`}>
      <body>
        <a className="skip-link" href="#continut">Sari la conținut</a>
        {children}
      </body>
    </html>
  );
}
