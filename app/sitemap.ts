import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sportsdiplomacy.ro';
  const lastModified = new Date('2024-09-24');

  return [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/#despre`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#speakeri`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#galerie`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#media`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#sponsori`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/confidentialitate`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/termeni`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie-uri`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
