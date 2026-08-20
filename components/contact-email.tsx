"use client";

import { getSocialByLabel } from "@/core/socials";
import { cn } from "@/lib/utils";
import { useEffect, useEffectEvent, useState } from "react";

type ContactEmailProps = {
	className?: string;
};

export default function ContactEmail({ className }: ContactEmailProps) {
	const social = getSocialByLabel("Email");
	const [address, setAddress] = useState<string | null>(null);

	const initEmail = useEffectEvent(() => {
		if (!social || social.type !== "email") {
			return;
		}

		const parts = [social.email, "donis.dev"];
		const timeout = setTimeout(() => {
			setAddress(parts.join("@"));
		}, 1000);

		return () => clearTimeout(timeout);
	});

	useEffect(() => initEmail(), []);

	if (!social || social.type !== "email") {
		return null;
	}

	if (!address) {
		return (
			<span className={cn("text-muted-foreground", className)}>
				contact at donis.dev
			</span>
		);
	}

	return (
		<a
			href={`mailto:${address}`}
			className={cn(
				"text-blue-500 no-underline hover:text-blue-700",
				className,
			)}
		>
			{address}
		</a>
	);
}
