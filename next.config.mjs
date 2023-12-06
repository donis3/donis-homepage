import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */

const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
	env: {
		build_mode:
			process.env.NODE_ENV === "development"
				? "development"
				: "production",
	},
	output: "export",
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
