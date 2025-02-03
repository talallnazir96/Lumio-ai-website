import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  eslint: {
    dirs: ['pages', 'utils'],
  },
};

export default nextConfig;
