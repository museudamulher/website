/** @type {import('next').NextConfig} */

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.carrismetropolitana.pt',
        port: '',
        // pathname: '/account123/**'
      },
    ],
  },
};
