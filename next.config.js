/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  Images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
