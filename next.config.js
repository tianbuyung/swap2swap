/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'second-market.infura-ipfs.io',
      },
    ],
  },
};

module.exports = nextConfig;
