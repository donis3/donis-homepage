import { getProjectsMetadata } from "@/core/project-helpers";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import FeaturedProjectItem from "./featured-project-item";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

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

				<Carousel>
					<CarouselContent>
						{featuredProjects.map((project) => (
							<CarouselItem
								key={`featured-${project.slug}`}
								className=""
							>
								<FeaturedProjectItem project={project} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<div className="mt-12 text-center">
					<Link
						href="/projects"
						className="text-foreground hover:text-white  inline-flex items-center gap-2 rounded-lg bg-transparent px-6 py-3 font-medium transition-all hover:bg-amber-700"
					>
						View All Projects
						<LuArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
