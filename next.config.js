/** @type {import('next').NextConfig} */
const dedicatedEndPoint = 'second-market.infura-ipfs.io';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: dedicatedEndPoint,
      },
    ],
  },
};

module.exports = nextConfig;
