/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'natickcommissionondisability.local',
        port: '',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
