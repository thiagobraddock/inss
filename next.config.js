/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://inss-project.vercel.app/:path*',
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig
