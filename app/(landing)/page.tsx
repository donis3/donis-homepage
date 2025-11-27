import About from "./_components/about";
import CallToAction from "./_components/call-to-action";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "Meet Deniz Özkan | Fullstack Developer for Innovative Web Solutions",
	},
	description:
		"Discover Deniz Özkan's portfolio: full-stack developer specializing in web technologies. Explore projects, skills, and get in touch for opportunities.",
	keywords:
		"full stack developer, portfolio, web development, react, nextjs, typescript, projects",
};

export default function LandingPage() {
	return (
		<>
			<main className="relative z-0 flex flex-1 flex-col">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<CallToAction />
			</main>
		</>
	);
}
