"use client";

import { ProjectMetadata } from "@/core/project-helpers/project-metadata-schema";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type ProjectItemProps = {
	project: ProjectMetadata & { slug: string; thumbnailUrl: string };
};

export default function ProjectItem({ project }: ProjectItemProps) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="group border-border bg-card block overflow-hidden rounded-lg border transition-all hover:-translate-y-1 hover:shadow-lg"
		>
			<div className="aspect-video overflow-hidden">
				<Image
					src={project.thumbnailUrl}
					alt={project.shortTitle}
					width={400}
					height={225}
					className="w-full h-auto object-cover transition-transform group-hover:scale-105"
					loading="eager"
				/>
			</div>
			<div className="p-4">
				<h2 className="mb-2 text-lg leading-tight font-semibold">
					{project.shortTitle}
				</h2>
				<p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
					{project.shortDescription}
				</p>
				<div className="flex flex-wrap gap-1">
					{project.tags.slice(0, 3).map((tag) => (
						<Badge key={tag} variant="secondary" className="text-xs">
							{tag}
						</Badge>
					))}
					{project.tags.length > 3 && (
						<Badge variant="outline" className="text-xs">
							+{project.tags.length - 3}
						</Badge>
					)}
				</div>
			</div>
		</Link>
	);
}
