"use client";

import { ProjectDetails } from "@/core/project-helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type FeaturedProjectItemProps = {
	project: ProjectDetails;
};

export default function FeaturedProjectItem({
	project,
}: FeaturedProjectItemProps) {
	return (
		<section className="p-4 grid h-full">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.1, ease: "easeInOut" }}
				viewport={{ once: true }}
				className={cn(
					"group border-border overflow-hidden rounded-xl border bg-white transition-all select-none dark:bg-slate-900",
					"shadow-primary/10 hover:shadow-primary/20 shadow-md h-full  ",
				)}
			>
				<div className="flex flex-col md:flex-row  h-full ">
					<Link href={`/projects/${project.slug}`} className="md:w-1/2 ">
						<div className="relative h-36 w-full overflow-hidden md:h-full ">
							<Image
								src={project.thumbnailUrl}
								alt={project.shortTitle}
								fill
								className="object-cover transition-transform"
								loading="eager"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
						</div>
					</Link>
					<div className="flex flex-col justify-between p-6 md:w-1/2 flex-1 ">
						<div>
							<h3 className="mb-2 text-2xl leading-tight font-bold tracking-tight">
								{project.shortTitle}
							</h3>
							<p className="text-muted-foreground mb-4 leading-relaxed">
								{project.shortDescription}
							</p>
							<div className="mb-4 flex flex-wrap gap-2">
								{project.tags.slice(0, 4).map((tag) => (
									<Badge
										key={tag}
										variant="secondary"
										className="font-mono text-xs"
									>
										{tag}
									</Badge>
								))}
								{project.tags.length > 4 && (
									<Badge
										variant="outline"
										className="font-mono text-xs"
									>
										+{project.tags.length - 4}
									</Badge>
								)}
							</div>
						</div>
						<div className="flex items-center gap-3">
							<Button
								size="sm"
								asChild
								className="group/btn"
								variant={"default"}
							>
								<Link href={`/projects/${project.slug}`}>
									View Project
									<ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
								</Link>
							</Button>
							{project.projectUrl && (
								<Button size="sm" variant="outline" asChild>
									<a
										href={project.projectUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center"
									>
										<ExternalLink className="h-4 w-4" />
									</a>
								</Button>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
