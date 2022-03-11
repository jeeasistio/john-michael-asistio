/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_USER: 'portfolio.jee@gmail.com',
    GOOGLE_PASS: 'portfolio21232',
    ADMIN_USER: 'jeeasistio08@gmail.com'
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
