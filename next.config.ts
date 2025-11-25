import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: { unoptimized: true },
	env: {
		NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
	},
	output: "export",
};

export default nextConfig;
