import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectHeaderProps {
	title: string;
	tags: string[];
	imageUrl: string;
}

export default function ProjectHeader({
	title,
	tags,
	imageUrl,
}: ProjectHeaderProps) {
	return (
		<div className="relative h-64 w-full bg-black md:h-80 lg:h-96">
			<Image src={imageUrl} alt={title} fill className="object-cover" />
			<div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/90">
				<div className="container mx-auto h-full px-4 py-4">
					<div className="flex h-full flex-col justify-end">
						<div className="absolute top-[calc(var(--navbar-height)+0.5rem)] left-4">
							<Button variant="ghost-light" size="xs" asChild className="opacity-60 md:opacity-100">
								<Link href="/projects">
									<ArrowLeft  />
									Back to Projects
								</Link>
							</Button>
						</div>
						<div className="text-center text-white">
							<h1 className="mb-6 text-2xl font-bold md:text-4xl lg:text-4xl tracking-tight text-amber-400 text-shadow-sm text-shadow-black">
								{title}
							</h1>
							<div className="flex flex-wrap justify-center gap-2">
								{tags.map((tag) => (
									<Badge
										key={tag}
										asChild
										variant="secondary"
										
										className="text-secondary-foreground cursor-pointer opacity-50 transition-opacity hover:opacity-100 text-xs "
									>
										<Link href={`/projects?tag=${tag}`}>{tag}</Link>
									</Badge>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
