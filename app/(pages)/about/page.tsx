import Image from "next/image";

import { Button } from "@/components/ui/button";
import DisplayTimeline from "./_components/display-timeline";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Deniz",
	description: "Learn about Deniz Özkan's background in computer programming and web development. Passionate about creating innovative solutions.",
	keywords: "about, full stack developer, programmer, web development, background, experience",
};

export default function AboutPage() {
	return (
		<div className="bg-background text-foreground flex min-h-screen flex-1 flex-col items-center p-4 pt-(--navbar-height) pb-12">
			{/* Hero Section */}
			<div className="mx-auto mt-4 mb-12 w-full max-w-3xl">
				<div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
					{/* Image */}
					<div className="flex justify-center md:justify-end">
						<div className="border-accent relative size-48 overflow-hidden rounded-full border-4 shadow-lg md:size-64">
							<Image
								src="/assets/images/donis-lg.jpg"
								alt="Donis"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Intro Text */}
					<div className="text-center md:text-left">
						<h1 className="text-amber-600 mb-4 text-4xl font-bold md:text-5xl">
							Hi, I&apos;m Deniz
						</h1>
						<p className="text-muted-foreground mb-6 text-lg leading-relaxed md:text-xl">
							A passionate developer with a background in computer
							programming and web development. I love creating innovative
							solutions and bringing ideas to life through code.
						</p>
						<p className="text-muted-foreground mb-8 text-base leading-relaxed">
							With experience in various technologies and a keen interest
							in continuous learning, I&apos;m always excited to take on
							new challenges and collaborate on meaningful projects.
						</p>
						<Button asChild className="w-full md:w-auto">
							<a href="/documents/deniz_ozkan_resume.pdf" download>
								Download CV
							</a>
						</Button>
					</div>
				</div>
			</div>

			{/* Timeline Section */}
			<div className="flex w-full justify-center mb-8">
				<div className="w-full max-w-4xl">
					<h2 className="text-primary mb-8 text-center text-3xl font-bold">
						My Journey
					</h2>
					<div className="flex justify-center">
						<DisplayTimeline />
					</div>
				</div>
			</div>
		</div>
	);
}
