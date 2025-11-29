"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectDetails } from "@/core/project-helpers";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import FeaturedProjectItem from "./featured-project-item";

type ProjectsCarouselProps = {
	projects: ProjectDetails[];
};

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
	const [api, setApi] = useState<CarouselApi>();
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	useEffect(() => {
		if (!api) return;
		const onSelect = () => {
			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		};
		api.on("select", onSelect);
		onSelect();
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	const scrollNext = useCallback(() => {
		if (api) {
			api.scrollNext();
		}
	}, [api]);

	const scrollPrev = useCallback(() => {
		if (api) {
			api.scrollPrev();
		}
	}, [api]);

	return (
		<Carousel setApi={setApi}>
			<CarouselContent>
				{projects.map((project) => (
					<CarouselItem key={`featured-${project.slug}`}>
						<FeaturedProjectItem project={project} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="max-md:hidden" />
			<CarouselNext className="max-md:hidden" />
			<button
				onClick={scrollPrev}
				disabled={!canScrollPrev}
				className={cn(
					"absolute top-1/2 left-0 -translate-x-3 z-10 -translate-y-1/2 md:hidden",
					!canScrollPrev && "text-muted-foreground opacity-20",
				)}
			>
				<ChevronLeftIcon className="size-5 " />
			</button>

			<button
				onClick={scrollNext}
				disabled={!canScrollNext}
				className={cn(
					"absolute top-1/2 right-0 translate-x-3 z-10 -translate-y-1/2 md:hidden",
					!canScrollNext && "text-muted-foreground opacity-20",
				)}
			>
				<ChevronRightIcon className="size-5 " />
			</button>
		</Carousel>
	);
}
