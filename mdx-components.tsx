import type { MDXComponents } from "mdx/types";
import Disclaimer from "@/components/disclaimer";
import Kbd from "@/components/kbd";
import TermsOfService from "@/components/terms-of-service";
import DonsraadTerms from "@/projects/donsraad/terms";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		kbd: Kbd,
		Disclaimer,
		TermsOfService,
		DonsraadTerms,
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
