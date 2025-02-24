/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignores all TypeScript errors during the build process
  },
  experimental: {
		turbo: {
			resolveExtensions: [
				".mdx",
				".tsx",
				".ts",
				".jsx",
				".js",
				".mjs",
				".json",
			],
		},
	},
};

export default nextConfig;
