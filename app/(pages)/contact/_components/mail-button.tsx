"use client";

import { Spinner } from "@/components/ui/spinner";
import { getSocialByLabel } from "@/core/socials";
import { cn } from "@/lib/utils";
import { useEffect, useEffectEvent, useState } from "react";

export default function MailButton() {
	const social = getSocialByLabel("Email");
	const [email, setEmail] = useState<string | null>(null);

	const initEmail = useEffectEvent(async () => {
		if (!social || social.type !== "email") return;

		const parts = [social.email, "donis.dev"];

		return setTimeout(() => {
			setEmail(parts.join("@"));
		}, 1000);
	});

	useEffect(() => {
		initEmail();
	}, []);

	if (!social) return null;

	return (
		<a
			href={email ? `mailto:${email}` : undefined}
			className={cn(
				"border-border hover:bg-accent hover:text-accent-foreground flex items-center space-x-2 rounded-lg border p-4 transition-colors",
				!email && "cursor-not-allowed opacity-50",
			)}
		>
			{email ? (
				<social.icon className="size-6" />
			) : (
				<Spinner className="size-6" />
			)}
			<div>
				<div className="font-semibold">{social.label}</div>
				<div className="text-muted-foreground text-sm">
					{social.description}
				</div>
			</div>
		</a>
	);
}
