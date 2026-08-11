/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'evz.ro' },
      { protocol: 'https', hostname: 'media.evz.ro' },
      { protocol: 'https', hostname: 'www.prosport.ro' },
      { protocol: 'https', hostname: 'media.prosport.ro' },
      { protocol: 'https', hostname: 'ici.ro' },
      { protocol: 'https', hostname: 'nineoclock.ro' },
      { protocol: 'https', hostname: 'infocons.ro' },
      { protocol: 'https', hostname: 'www.oranoua.ro' },
      { protocol: 'https', hostname: 'foto.agerpres.ro' },
      { protocol: 'https', hostname: 'financialintelligence.ro' },
      { protocol: 'https', hostname: 'business-review.eu' },
    ],
  },
};

export default nextConfig;
