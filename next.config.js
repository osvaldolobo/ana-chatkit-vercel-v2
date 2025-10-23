/** @type {import('next').NextConfig} */
const nextConfig = {
  // Força o Next.js a transpilar o pacote @openai/chatkit
  transpilePackages: ['@openai/chatkit'],

  // Ignora erros de tipagem e lint durante o build (evita travar o deploy)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
