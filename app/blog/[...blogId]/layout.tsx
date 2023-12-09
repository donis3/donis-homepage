import type { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "Mdx Blog Page",
// 	description: "A developers personal website",
// };

export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return (
		<article className="pt-[var(--navbar-h)]  prose w-full max-w-none p-4 prose-invert">
			{children}
		</article>
	);
}
