"use client";
import { getSocialByLabel, getSocials } from "@/core/socials";
import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { LuMail } from "react-icons/lu";
import { Spinner } from "../ui/spinner";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Footer() {
	const [email, setEmail] = useState<string | null | "not-found">(null);
	const [year] = useState<number>(() => new Date().getFullYear());

	const socialLinks = getSocials("link");
	const socialEmail = getSocialByLabel("Email");

	const initEmail = useEffectEvent(async () => {
		if (!socialEmail || socialEmail.type !== "email") {
			return setEmail("not-found");
		}

		return new Promise<void>((resolve) => {
			const parts = [socialEmail.email, "donis.dev"];
			setTimeout(() => {
				resolve(setEmail(`mailto:${parts.join("@")}`));
			}, 1000);
		});
	});

	useEffect(() => {
		initEmail();
	}, []);
	return (
		<footer className="bg-muted text-muted-foreground border-border border-t">
			<div className="container mx-auto max-w-3xl px-4 py-8">
				<div className="flex flex-col items-start justify-between md:flex-row">
					<div className="mb-4 md:mb-0">
						<Link
							href="/"
							className="hover:text-primary text-foreground text-lg font-bold transition-colors"
						>
							Donis.Dev
						</Link>
						<p className="text-muted-foreground mt-2 max-w-sm text-sm">
							Deniz Özkan is a fullstack developer focusing on building
							modern web applications with cutting-edge technologies.
						</p>
					</div>
					<div className="flex flex-wrap gap-8">
						<div>
							<h3 className="text-foreground/80 mb-2 font-semibold">
								Quick Links
							</h3>
							<ul className="space-y-1">
								{links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-muted-foreground hover:text-foreground text-sm transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="border-border mt-8 flex flex-col items-center justify-between border-t pt-4 md:flex-row">
					<p className="text-muted-foreground text-sm">
						&copy; {year} Deniz Özkan. All rights reserved.
					</p>
					<div className="mt-4 flex space-x-4 md:mt-0">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={"href" in social ? social.href : "#"}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label={social.label}
							>
								<social.icon className="size-5" />
							</a>
						))}
						{email && email !== "not-found" ? (
							<a
								href={email}
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Email"
							>
								<LuMail className="size-5" />
							</a>
						) : email === "not-found" ? null : (
							<Spinner className="text-muted-foreground size-5" />
						)}
					</div>
				</div>
			</div>
		</footer>
	);
}
