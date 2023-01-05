/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// Below (lines 15-19 Jan 4) will force SWC compiling if uncommented, custom babel does not work with next/@font
//Warning messages when force compiling with SWC:
// warn  - You have enabled experimental feature (forceSwcTransforms) in next.config.js.
// Important: warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.


/*
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}
*/