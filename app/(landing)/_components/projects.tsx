import { getProjectsMetadata } from "@/core/project-helpers";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import FeaturedProjectItem from "./featured-project-item";

export default async function Projects() {
	const featuredProjects = await getProjectsMetadata(true);

	return (
		<section className="bg-muted/50 px-4 py-16">
			<div className="container mx-auto">
				<div className="mb-12 text-center">
					<h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
						Featured Projects
					</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl">
						Explore some of my recent work showcasing modern web
						development techniques.
					</p>
				</div>

				<div className="space-y-3">
					{featuredProjects.map((project) => (
						<FeaturedProjectItem
							project={project}
							key={`featured-${project.slug}`}
						/>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						href="/projects"
						className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
					>
						View All Projects
						<LuArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
