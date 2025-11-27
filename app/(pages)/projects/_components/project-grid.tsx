"use client";

import { ProjectDetails } from "@/core/project-helpers";
import ProjectItem from "./project-item";
import { motion, Variants } from "motion/react";
import useProjectsFilter from "./use-projects-filter";

type ProjectGridProps = {
	allProjects: ProjectDetails[];
};

export default function ProjectGrid({ allProjects }: ProjectGridProps) {
	const { projects, selectedTag } = useProjectsFilter({
		projects: allProjects,
	});

	const containerVariants = {
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			x: -20,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};

	return (
		<motion.div
			className="grid grid-cols-1 gap-6 md:grid-cols-2"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			key={`project-grid-${selectedTag || "all"}`}
		>
			{projects.map((project) => (
				<motion.div
					key={`project-item-${project.slug}`}
					variants={itemVariants}
					transition={{ ease: "easeInOut" }}
				>
					<ProjectItem project={project} />
				</motion.div>
			))}
		</motion.div>
	);
}
