// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This helps with static exports if you're using Image component
  },
  // Remove the "output: export" line
};

module.exports = nextConfig;