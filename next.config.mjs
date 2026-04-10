/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //  https://phi-lab-server.vercel.app/api/v1/lab/foods
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
