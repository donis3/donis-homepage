import { getProjectsMetadata } from "@/core/project-helpers";
import About from "./_components/about";
import CallToAction from "./_components/call-to-action";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute:
			"Meet Deniz Özkan | Fullstack Developer for Innovative Web Solutions",
	},
	description:
		"Discover Deniz Özkan's portfolio: full-stack developer specializing in web technologies. Explore projects, skills, and get in touch for opportunities.",
	keywords:
		"full stack developer, portfolio, web development, react, nextjs, typescript, projects",
};

export default async function LandingPage() {
	const projects = await getProjectsMetadata();
	const latestProject = projects[0];

	return (
		<>
			<main className="relative z-0 flex flex-1 flex-col">
				<Hero
					latestProject={
						latestProject
							? {
									slug: latestProject.slug,
									shortTitle: latestProject.shortTitle,
									publishedAt: latestProject.date.toISOString(),
								}
							: undefined
					}
				/>
				<About />
				<Skills />
				<Projects />
				<CallToAction />
			</main>
		</>
	);
}
