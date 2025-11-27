"use client";

import { ProjectMetadata } from "@/core/project-helpers/project-metadata-schema";
import Link from "next/link";

type ProjectItemProps = {
	project: ProjectMetadata & { slug: string };
};

export default function ProjectItem({ project }: ProjectItemProps) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="border-border hover:bg-accent hover:text-accent-foreground block rounded-lg border p-4 transition-colors"
		>
			<h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
			<p className="text-muted-foreground">{project.description}</p>
		</Link>
	);
}
