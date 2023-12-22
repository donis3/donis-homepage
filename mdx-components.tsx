import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		//Customize links so they open in new tab
		a: ({ children, ...props }) => (
			<a {...props} target="_blank">
				{children}
			</a>
		),
		...components,
	};
}
