/** @type {import('next').NextConfig} */
const dedicatedEndPoint = 'swap2swap.infura-ipfs.io';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: dedicatedEndPoint,
        pathname: '/ipfs/**',
      },
    ],
  },
};

module.exports = nextConfig;
