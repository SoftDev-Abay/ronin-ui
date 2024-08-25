/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  experimental: {
    optimizeFonts: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
