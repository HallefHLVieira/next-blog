import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);