import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:'images.pexels.com',
        protocol: "https",
        port:"",
      },
      {
        hostname:'static.vecteezy.com',
        protocol: "https",
        port:"",
      },
      {
        hostname:'lh3.googleusercontent.com',
        protocol: "https",
        port:"",
      },
      // { protocol: "https", hostname: "via.placeholder.com" },
    ]
  }
};

export default nextConfig;
