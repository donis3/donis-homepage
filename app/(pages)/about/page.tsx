import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import DisplayTimeline from "./_components/display-timeline";

import { DownloadIcon, MessageCircleIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Deniz Özkan | Full-Stack Developer & CTO",
	description:
		"Full-stack developer with 15+ years of experience in web development, co-founder & CTO at VibeVenue. Specialized in TypeScript, React, Next.js, Node.js, and modern web technologies. Available for hire.",
	keywords:
		"full stack developer, web developer, TypeScript developer, React developer, Next.js expert, CTO, VibeVenue, hire developer, freelance developer, Deniz Özkan",
	openGraph: {
		title: "About Deniz Özkan | Full-Stack Developer & CTO",
		description:
			"Full-stack developer with 15+ years of experience. Co-founder & CTO at VibeVenue. Available for hire.",
		type: "profile",
	},
};

export default function AboutPage() {
	return (
		<div className="bg-background text-foreground flex min-h-screen flex-1 flex-col items-center p-4 pt-(--navbar-height) pb-12">
			{/* Hero Section */}
			<div className="mx-auto mt-8 mb-16 w-full max-w-4xl">
				<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] lg:gap-16">
					{/* Image */}
					<div className="flex justify-center">
						<div className="border-primary/20 ring-primary/10 relative size-52 overflow-hidden rounded-2xl border-4 shadow-2xl ring-4 transition-transform hover:scale-105 md:size-64 lg:size-72">
							<Image
								src="/assets/images/donis-lg.jpg"
								alt="Deniz Özkan - Full-Stack Developer"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Intro Text */}
					<div className="text-center md:text-left">
						<div className="mb-3">
							<span className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1.5 text-sm font-semibold">
								Available for Hire
							</span>
						</div>
						<h1 className="text-foreground mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
							Hi, I&apos;m{" "}
							<span className="text-primary">Deniz</span>
						</h1>
						<p className="text-foreground/90 mb-2 text-xl font-semibold md:text-2xl">
							Full-Stack Developer & CTO
						</p>
						<p className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg">
							15+ years building scalable web applications with
							TypeScript, React, Next.js, and Node.js. Co-Founder & CTO
							at VibeVenue, creating AI-powered kiosk experiences for
							social events, while also serving as IT Specialist at
							Unikim Fertilizers.
						</p>
						<p className="text-muted-foreground mb-8 text-base leading-relaxed">
							Passionate about clean code, modern architectures, and
							solving complex problems. Available for freelance projects
							and collaborations.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
							<Button
								asChild
								size="lg"
								className="w-full shadow-lg sm:w-auto"
							>
								<a href="/documents/deniz_ozkan_resume.pdf" download>
									<DownloadIcon />
									Download CV
								</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full shadow-lg sm:w-auto"
							>
								<Link href="/contact">
									<MessageCircleIcon />
									Contact Me
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Timeline Section */}
			<div className="flex w-full justify-center">
				<div className="w-full max-w-4xl">
					<h2 className="text-foreground mb-10 text-center text-3xl font-bold md:text-4xl">
						My <span className="text-primary">Journey</span>
					</h2>
					<div className="flex justify-center">
						<DisplayTimeline />
					</div>
				</div>
			</div>
		</div>
	);
}
