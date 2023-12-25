import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

import remarkReadingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx.js";

/** @type {import('next').NextConfig} */

const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	output: "export",
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
	theme: "one-dark-pro",
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm, remarkReadingTime, readingMdxTime],
		rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
