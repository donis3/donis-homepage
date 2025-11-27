"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
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
		<div className="relative h-64 w-full bg-slate-800 md:h-80 lg:h-96 xl:h-102">
			<Image
				src={imageUrl}
				alt={title}
				width={1920}
				height={1080}
				className="mx-auto max-w-7xl object-cover  h-64 w-full md:h-80 lg:h-96 xl:h-102"
				loading="eager"
			/>
			<motion.div
				className="absolute inset-0 bg-linear-to-b from-black/40 to-black/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
			>
				<div className="container mx-auto h-full max-w-2xl px-4 py-4">
					<div className="flex h-full flex-col justify-end">
						<div className="absolute top-[calc(var(--navbar-height)+0.5rem)] left-4">
							<Button
								variant="ghost-light"
								size="xs"
								asChild
								className="opacity-60 md:opacity-100"
							>
								<Link href="/projects">
									<ArrowLeft />
									Back to Projects
								</Link>
							</Button>
						</div>
						<div className="text-center text-white">
							<h1 className="mb-6 text-2xl font-bold tracking-tight text-amber-400 text-shadow-black text-shadow-sm md:text-4xl lg:text-4xl">
								{title}
							</h1>
							<div className="flex flex-wrap justify-center gap-2">
								{tags.map((tag) => (
									<Badge
										key={tag}
										asChild
										variant="secondary"
										className="text-secondary-foreground cursor-pointer text-xs opacity-50 transition-opacity hover:opacity-100"
									>
										<Link href={`/projects?tag=${tag}`}>{tag}</Link>
									</Badge>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
