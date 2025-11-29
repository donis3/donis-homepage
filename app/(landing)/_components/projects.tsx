import { getProjectsMetadata } from "@/core/project-helpers";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { ProjectsCarousel } from "./projects-carousel";

export default async function Projects() {
	const featuredProjects = await getProjectsMetadata(true);

	return (
		<section className="bg-muted/50 px-4 py-16">
			<div className="container mx-auto max-w-2xl">
				<div className="mb-12 text-center">
					<h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
						Featured Projects
					</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl">
						Explore some of my recent work showcasing modern web
						development techniques.
					</p>
				</div>
				{featuredProjects.length > 0 ? (
					<ProjectsCarousel projects={featuredProjects} />
				) : (
					<div className="text-muted-foreground bg-muted/50 px-4 py-8 text-center">
						No featured projects available at the moment. Please check
						back later.
					</div>
				)}
				<div className="mt-12 text-center">
					<Link
						href="/projects"
						className="text-foreground inline-flex items-center gap-2 rounded-lg bg-transparent px-6 py-3 font-medium transition-all hover:bg-amber-700 hover:text-white"
					>
						View All Projects
						<LuArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
