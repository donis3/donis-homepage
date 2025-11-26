import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	images: { unoptimized: true },
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	env: {
		NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
	},
	output: "export",
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
