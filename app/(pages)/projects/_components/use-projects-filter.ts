"use client";

import { ProjectDetails } from "@/core/project-helpers";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

type ProjectsFilter = {
	projects: ProjectDetails[];
};

export default function useProjectsFilter({ projects }: ProjectsFilter) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedTag = searchParams.get("tag") || null;

	const setSelectedTag = (tag: string | null) => {
		const params = new URLSearchParams(searchParams.toString());
		if (tag) {
			params.set("tag", tag);
		} else {
			params.delete("tag");
		}
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	const filteredProjects = useMemo(() => {
		return selectedTag
			? projects.filter(project => project.tags.includes(selectedTag))
			: projects;
	}, [projects, selectedTag]);

	return { projects: filteredProjects, selectedTag, setSelectedTag };
}
