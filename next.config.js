/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ywmxkvkocthifcztevge.supabase.co'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
