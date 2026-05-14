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

if (process.env.NODE_ENV === "development") {
  nextConfig.redirects = async () => {
    return [
      {
        source: "/",
        destination: "/Portfolio",
        basePath: false,
        permanent: false,
      },
    ];
  };
}

module.exports = withPWA(nextConfig);
