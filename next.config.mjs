/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  experimental: {
    optimizeFonts: true,
  },
};

export default nextConfig;
