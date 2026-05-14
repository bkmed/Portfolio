const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/Portfolio/",
  basePath: "/Portfolio",
  output: "export",
  outputFileTracingRoot: __dirname,
  turbopack: {},
};

module.exports = withPWA(nextConfig);
