"use client";

import { Button } from "@/components/ui/button";
import { ProjectDetails, ProjectTagWithCount } from "@/core/project-helpers";
import { ChevronDown, FunnelIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import NoProjects from "./no-projects";
import ProjectGrid from "./project-grid";
import ProjectsTags from "./projects-tags";

type ProjectsClientProps = {
	projects: ProjectDetails[];
	tags: ProjectTagWithCount[];
};

export default function ProjectsClient({
	projects,
	tags,
}: ProjectsClientProps) {
	const searchParams = useSearchParams();
	const selectedTag = searchParams.get("tag");
	const [open, setOpen] = useState(selectedTag !== null);

	if (projects.length === 0) {
		return <NoProjects />;
	}

	return (
		<div className="mx-auto max-w-2xl">
			<div className="mb-4 md:mb-8 ">
				<div className="mb-4 flex items-center justify-between gap-x-2">
					<h1 className="flex-1 text-3xl leading-0 font-bold tracking-tight text-foreground/70">Projects</h1>
					<Button
						disabled={tags.length === 0}
						onClick={() => tags.length > 0 && setOpen(!open)}
						size={"sm"}
						variant={open ? "default" : "outline"}
						hidden={tags.length === 0}
					>
						Filter
						{open ? <ChevronDown /> : <FunnelIcon />}
					</Button>
				</div>
				<ProjectsTags tags={tags} open={open} />
			</div>

			<section>
				<ProjectGrid allProjects={projects} />
			</section>
		</div>
	);
}
