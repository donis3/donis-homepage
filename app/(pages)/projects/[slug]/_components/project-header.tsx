import Link from "next/link";
import { getCoverImageUrl } from "@/core/project-helpers/image-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ProjectHeaderProps {
	slug: string;
	title: string;
	tags: string[];
}

export default function ProjectHeader({
	slug,
	title,
	tags,
}: ProjectHeaderProps) {
	return (
		<div className="relative h-64 w-full bg-black md:h-80 lg:h-96">
			<Image
				src={getCoverImageUrl(slug)}
				alt={title}
				fill
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/80">
				<div className="container mx-auto h-full px-4 py-8">
					<div className="flex h-full flex-col justify-end">
						<div className="absolute top-4 left-4">
							<Button variant="default" size="sm" asChild>
								<Link href="/projects">
									<ArrowLeft className="h-4 w-4" />
									Back to Projects
								</Link>
							</Button>
						</div>
						<div className="text-center text-white">
							<h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
								{title}
							</h1>
							<div className="flex flex-wrap justify-center gap-2">
								{tags.map((tag) => (
									<Badge
										key={tag}
										asChild
										variant="secondary"
										className="cursor-pointer text-secondary-foreground opacity-50 hover:opacity-100 transition-opacity"
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
