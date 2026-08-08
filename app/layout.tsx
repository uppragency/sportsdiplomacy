import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sports Diplomacy Conference — Palatul Parlamentului',
  description: 'Sports Diplomacy Conference, Palatul Parlamentului, 24 septembrie 2024.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <a className="skip-link" href="#continut">Sari la conținut</a>
        {children}
      </body>
    </html>
  );
}
