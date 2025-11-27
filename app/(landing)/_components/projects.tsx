import Link from "next/link";
import { LuArrowRight, LuExternalLink } from "react-icons/lu";

const featuredProjects = [
	{
		name: "Dartofon",
		description:
			"A modern web application for audio processing and visualization.",
		href: "/projects/dartofon",
		tech: ["React", "TypeScript", "Web Audio API"],
	},
	{
		name: "VibeVenue",
		description:
			"Social platform for music discovery and community engagement.",
		href: "/projects/vibevenue",
		tech: ["Next.js", "Prisma", "PostgreSQL"],
	},
];

export default function Projects() {
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

				<div className="grid gap-8 md:grid-cols-2">
					{featuredProjects.map((project) => (
						<div
							key={project.name}
							className="border-border bg-card hover:bg-accent/50 rounded-lg border p-6 transition-colors"
						>
							<h3 className="text-foreground mb-2 text-xl font-semibold">
								{project.name}
							</h3>
							<p className="text-muted-foreground mb-4">
								{project.description}
							</p>
							<div className="mb-4 flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
									>
										{tech}
									</span>
								))}
							</div>
							<Link
								href={project.href}
								className="text-primary hover:text-primary/80 inline-flex items-center gap-2"
							>
								View Project
								<LuExternalLink className="h-4 w-4" />
							</Link>
						</div>
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
