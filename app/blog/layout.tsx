import type { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "Mdx Blog Page",
// 	description: "A developers personal website",
// };

export default function MdxLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="bg-primary-200 pt-[var(--navbar-h)] min-h-dscreen">
			<article className="prose w-full max-w-none p-4 prose-invert">
				{children}
			</article>
		</main>
	);
}
