/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
