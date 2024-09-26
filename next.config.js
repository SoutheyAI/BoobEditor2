/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.sora.moemiku.com', /* 其他已配置的域名 */],
  },
}

module.exports = nextConfig