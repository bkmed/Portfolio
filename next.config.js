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
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: "/Portfolio/",
  basePath: "/Portfolio",
  output: "export",
  outputFileTracingRoot: __dirname,
  turbopack: {
    // Explicitly set the root directory to fix Turbopack inference issues
    root: __dirname,
  },
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
