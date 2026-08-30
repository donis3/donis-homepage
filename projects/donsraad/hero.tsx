"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
	ChevronLeft,
	ChevronRight,
	Download,
	Monitor,
	RefreshCw,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { donsraadFeatureSlides } from "./feature-slides";

type DonsraadHeroProps = {
	className?: string;
};

const slideCount = donsraadFeatureSlides.length;

const headerContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.08, delayChildren: 0.05 },
	},
};

const headerItem = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut" as const },
	},
};

export default function DonsraadHero({ className }: DonsraadHeroProps) {
	const [api, setApi] = useState<CarouselApi>();
	const [activeIndex, setActiveIndex] = useState(0);
	const tabListRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const onSelect = useCallback(() => {
		if (!api) return;
		setActiveIndex(api.selectedScrollSnap());
	}, [api]);

	useEffect(() => {
		if (!api) return;
		onSelect();
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api, onSelect]);

	useEffect(() => {
		const container = tabListRef.current;
		const activeTab = tabRefs.current[activeIndex];
		if (!container || !activeTab) return;

		const targetScrollLeft =
			activeTab.offsetLeft -
			container.clientWidth / 2 +
			activeTab.offsetWidth / 2;
		const maxScrollLeft = container.scrollWidth - container.clientWidth;

		container.scrollTo({
			left: Math.min(Math.max(0, targetScrollLeft), maxScrollLeft),
			behavior: "smooth",
		});
	}, [activeIndex]);

	const activeSlide = donsraadFeatureSlides[activeIndex];

	return (
		<section
			className={cn(
				"not-prose relative -mx-4 mb-10 overflow-x-clip px-4 sm:-mx-6 sm:px-6",
				className,
			)}
		>
			<motion.div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="absolute inset-0 bg-linear-to-b from-amber-500/10 via-amber-950/5 to-transparent dark:from-amber-400/8 dark:via-amber-950/15" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(251,191,36,0.12),transparent_60%)]" />
				<motion.div
					className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-amber-400/15 blur-3xl"
					animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
				<div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_20%,transparent_100%)] opacity-30" />
			</motion.div>

			<div className="relative mx-auto max-w-4xl pt-2 pb-8 md:pt-6 md:pb-10">
				<motion.div
					className="mb-8 text-center md:mb-10"
					variants={headerContainer}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={headerItem}
						className="mb-4 flex flex-wrap items-center justify-center gap-2"
					>
						<Badge
							variant="outline"
							className="border-amber-500/30 bg-amber-500/8 text-amber-800 dark:text-amber-200"
						>
							Dune: Awakening
						</Badge>
						<Badge
							variant="outline"
							className="border-border/80 bg-background/60"
						>
							<Monitor className="mr-1 size-3" />
							Windows 10 / 11
						</Badge>
					</motion.div>
					<motion.h2
						variants={headerItem}
						className="text-foreground mb-3 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl"
					>
						Your{" "}
						<span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
							Landsraad
						</span>{" "}
						companion
					</motion.h2>
					<motion.p
						variants={headerItem}
						className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed text-pretty md:text-lg"
					>
						All-in-one Landsraad mission and reward companion. Less UI, less
						loading screens, more play.
					</motion.p>
				</motion.div>

				<motion.div
					className="mb-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
				>
					<Carousel
						setApi={setApi}
						opts={{ align: "start", loop: true }}
						className="w-full"
					>
						<div className="border-border/80 bg-card group/carousel relative overflow-hidden rounded-2xl border shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/10">
							<CarouselContent className="ml-0">
								{donsraadFeatureSlides.map((slide, index) => (
									<CarouselItem
										key={slide.title}
										className="basis-full pl-0"
									>
										<div className="bg-muted/30 relative aspect-16/10 w-full">
											{slide.image ? (
												<Image
													src={slide.image}
													alt={slide.alt ?? slide.title}
													fill
													className={cn(
														"object-contain object-center p-1 transition-transform duration-500 md:p-2",
														index === activeIndex
															? "scale-100"
															: "scale-[0.98]",
													)}
													sizes="(max-width: 768px) 100vw, 896px"
													priority={index === 0}
												/>
											) : (
												<div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-10 text-center">
													<motion.div
														className="flex size-20 items-center justify-center rounded-full bg-green-500/10 ring-2 ring-green-500/30"
														animate={{
															boxShadow: [
																"0 0 0 0 rgba(34,197,94,0.2)",
																"0 0 0 12px rgba(34,197,94,0)",
															],
														}}
														transition={{
															duration: 2,
															repeat: Infinity,
															ease: "easeOut",
														}}
													>
														<RefreshCw className="size-9 text-green-500" />
													</motion.div>
													<div className="max-w-sm">
														<p className="text-foreground text-lg font-semibold tracking-tight">
															{slide.title}
														</p>
														<p className="text-muted-foreground mt-2 text-sm leading-relaxed">
															Green indicator on the overlay when enabled.
															Detects finished missions, claims, and queues
															your next pick cycle with a sound when ready.
														</p>
													</div>
												</div>
											)}
										</div>
									</CarouselItem>
								))}
							</CarouselContent>

							<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100" />

							<Button
								type="button"
								variant="outline"
								size="icon"
								aria-label="Previous feature"
								onClick={() => api?.scrollPrev()}
								className="border-border/80 bg-background/90 absolute top-1/2 left-2 z-10 size-9 -translate-y-1/2 rounded-full opacity-90 shadow-sm backdrop-blur-sm hover:opacity-100 md:left-3 md:size-10"
							>
								<ChevronLeft className="size-4" />
							</Button>
							<Button
								type="button"
								variant="outline"
								size="icon"
								aria-label="Next feature"
								onClick={() => api?.scrollNext()}
								className="border-border/80 bg-background/90 absolute top-1/2 right-2 z-10 size-9 -translate-y-1/2 rounded-full opacity-90 shadow-sm backdrop-blur-sm hover:opacity-100 md:right-3 md:size-10"
							>
								<ChevronRight className="size-4" />
							</Button>

							<div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
								<span className="bg-background/80 text-muted-foreground rounded-full px-2 py-0.5 font-mono text-[10px] backdrop-blur-sm">
									{activeIndex + 1} / {slideCount}
								</span>
							</div>
						</div>
					</Carousel>
				</motion.div>

				<motion.div
					className="mx-auto max-w-3xl"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.45 }}
				>
					<div
						ref={tabListRef}
						className="mb-5 -mx-1 flex gap-2 overflow-x-auto scroll-smooth px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
						role="tablist"
						aria-label="Feature highlights"
					>
						{donsraadFeatureSlides.map((slide, index) => (
							<motion.button
								key={slide.title}
								ref={(element) => {
									tabRefs.current[index] = element;
								}}
								type="button"
								role="tab"
								aria-selected={index === activeIndex}
								onClick={() => api?.scrollTo(index)}
								className={cn(
									"shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors md:text-sm",
									index === activeIndex
										? "border-amber-500/50 bg-amber-500/15 text-amber-900 dark:text-amber-100"
										: "border-border/80 bg-background/60 text-muted-foreground hover:border-amber-500/30 hover:text-foreground",
								)}
								whileTap={{ scale: 0.98 }}
							>
								{slide.shortTitle}
							</motion.button>
						))}
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							key={activeSlide.title}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.22, ease: "easeOut" }}
							className="text-center"
						>
							<h3 className="text-foreground mb-2 text-lg font-semibold tracking-tight md:text-xl">
								{activeSlide.title}
							</h3>
							<p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed text-pretty md:text-base">
								{activeSlide.description}
							</p>
						</motion.div>
					</AnimatePresence>

					<motion.div
						className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.45, duration: 0.4 }}
					>
						<Button
							asChild
							size="lg"
							className="bg-linear-to-r from-amber-500 to-orange-600 text-black shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-orange-500"
						>
							<a href="#downloads">
								<Download />
								Download Donsraad
							</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<a href="#features">See all features</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
