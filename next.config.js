/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_USER: 'portfolio.app@gmail.com',
    GOOGLE_PASS: 'portfolio21232',
    ADMIN_USER: 'jeeasistio08@gmail.com'
  },
  typescript: {
    ignoreBuildErrors: true
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/about'
      }
    ]
  }
}

module.exports = nextConfig
