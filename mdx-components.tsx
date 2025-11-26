import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
			const className = "text-blue-500 hover:text-blue-700";
			if (href?.startsWith("/")) {
				return (
					<Link href={href} className={className} {...props}>
						{children}
					</Link>
				);
			}
			if (href?.startsWith("#")) {
				return (
					<a href={href} className={className} {...props}>
						{children}
					</a>
				);
			}
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={className}
					{...props}
				>
					{children}
				</a>
			);
		},
	};
}
