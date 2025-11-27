"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HTMLAttributes, useCallback } from "react";

type NavLinkProps = HTMLAttributes<HTMLButtonElement> & {
	href: string;
	label: string;
	currentPath: string;
};

export default function NavLink({ href, label, currentPath }: NavLinkProps) {
	const isHrefActive = useCallback(
		(href: string) => {
			if (href === "/") {
				return currentPath === "/";
			}
			return currentPath.startsWith(href);
		},
		[currentPath],
	);
	const router = useRouter();

	return (
		<Button
			variant={isHrefActive(href) ? "secondary" : "ghost"}
			className="w-full justify-start"
			onClick={() => {
				router.push(href, {
					scroll: false,
				});
			}}
		>
			{label}
		</Button>
	);
}
