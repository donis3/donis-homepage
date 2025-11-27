import { getProjectsMetadata, getProjectTags } from "@/core/project-helpers";

import type { Metadata } from "next";
import ProjectsClient from "./_components/projects-client";

export const metadata: Metadata = {
	title: "Projects | Deniz's Homepage",
	description:
		"Explore my portfolio of projects, including web applications, mobile apps, and more.",
	keywords: "projects, portfolio, web development, mobile apps, software",
};

export default async function ProjectsPage() {
	const projects = await getProjectsMetadata();
	const tags = await getProjectTags();

	return (
		<div className="bg-background text-foreground flex-1 p-4 py-[calc(var(--navbar-height)+1rem)]">
			
			<ProjectsClient projects={projects} tags={tags} />
		</div>
	);
}
