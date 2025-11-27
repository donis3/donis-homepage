import { getProjectsMetadata, getProjectTags } from "@/core/project-helpers";

import type { Metadata } from "next";
import ProjectsClient from "./_components/projects-client";
import ProjectsClientSkeleton from "./_components/projects-client-skeleton";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Projects",
	description: "View Deniz Özkan's portfolio of full-stack development projects, from web apps to innovative software solutions.",
	keywords: "portfolio, projects, full stack development, web applications, software projects, developer showcase",
};

export default async function ProjectsPage() {
	const projects = await getProjectsMetadata();
	const tags = await getProjectTags();

	return (
		<div className="bg-background text-foreground flex-1 p-4 py-[calc(var(--navbar-height)+1rem)]">
			<Suspense fallback={<ProjectsClientSkeleton />}>
				<ProjectsClient projects={projects} tags={tags} />
			</Suspense>
		</div>
	);
}
