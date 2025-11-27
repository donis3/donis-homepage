"use client";

import { Button } from "@/components/ui/button";
import { ProjectTagWithCount } from "@/core/project-helpers";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type ProjectsTagsProps = {
	tags: ProjectTagWithCount[];
	open: boolean;
};

export default function ProjectsTags({ tags, open }: ProjectsTagsProps) {
	const searchParams = useSearchParams();

	const selectedTag = useMemo(() => {
		return searchParams.get("tag");
	}, [searchParams]);

	const handleTagClick = useCallback(
		(tag: string) => {
			// Create a new URLSearchParams object to avoid mutating the existing one
			const params = new URLSearchParams(searchParams);
			const currentTag = params.get("tag");
			if (currentTag === tag) {
				params.delete("tag");
			} else {
				params.set("tag", tag);
			}
			const newSearch = params.toString();
			const newUrl = newSearch ? `?${newSearch}` : window.location.pathname;
			window.history.replaceState(null, "", newUrl);
		},
		[searchParams],
	);

	const containerVariants = {
		open: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.2,
			},
		},
		closed: {
			opacity: 0,
		},
	};

	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
		},
		closed: {
			opacity: 0,
			y: 10,
		},
	};

	return (
		<motion.div
			className="mb-6 overflow-hidden"
			animate={{ height: open ? "auto" : 0 }}
			transition={{ duration: 0.1 }}
		>
			<motion.div
				className="flex flex-wrap justify-evenly gap-2"
				variants={containerVariants}
				initial="closed"
				animate={open ? "open" : "closed"}
			>
				{tags.map((tag) => (
					<motion.div key={tag.label} variants={itemVariants}>
						<Button
							size={"xs"}
							variant={selectedTag === tag.label ? "default" : "secondary"}
							className={cn(
								"h-auto max-w-sm flex-1 cursor-pointer px-2 py-1.5 font-mono text-xs leading-0 transition-colors",
								selectedTag === tag.label &&
									"bg-primary text-primary-foreground",
							)}
							onClick={() => handleTagClick(tag.label)}
						>
							<span>{tag.label}</span>
							<span className="block rounded bg-black/50 px-1 font-sans text-xs font-medium text-white/70 opacity-90">
								{tag.count}
							</span>
						</Button>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
