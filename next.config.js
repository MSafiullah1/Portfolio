/** @type {import('next').NextConfig} */

// GitHub Pages serves this project from https://<user>.github.io/Portfolio/,
// so every route and asset needs the /Portfolio prefix in production.
// `basePath` already prefixes _next assets — setting `assetPrefix` on top of
// it produces doubled slashes, so it is deliberately omitted.
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Portfolio' : '',
}

module.exports = nextConfig
