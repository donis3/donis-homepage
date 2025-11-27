import { getProjectsMetadata } from "@/core/project-helpers";

import type { Metadata } from "next";
import Link from "next/link";
import NoProjects from "./_components/no-projects";

export const metadata: Metadata = {
	title: "Projects | Deniz's Homepage",
	description:
		"Explore my portfolio of projects, including web applications, mobile apps, and more.",
	keywords: "projects, portfolio, web development, mobile apps, software",
};

export default async function ProjectsPage() {
	const projects = await getProjectsMetadata();
	if (projects.length === 0) {
		return <NoProjects />;
	}

	return (
		<div>
			<h1 className="mb-6 text-3xl font-bold">Projects</h1>
			<ul className="space-y-4">
				{projects.map((project) => (
					<li key={project.slug} className="">
						<Link
							href={`/projects/${project.slug}`}
							className="block rounded p-2 hover:bg-gray-50"
						>
							<h2 className="text-xl font-semibold">
								{project.shortTitle}
							</h2>
							<p className="text-gray-600">{project.shortDescription}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
