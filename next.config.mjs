import createMDX from "@next/mdx";
import remarkReadingTime from "remark-reading-time";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

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

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
	theme: "one-dark-pro",
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm, remarkReadingTime],
		rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
