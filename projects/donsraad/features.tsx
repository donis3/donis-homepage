"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { donsraadFeatureGroups } from "./feature-slides";

type DonsraadFeaturesProps = {
	className?: string;
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.06 },
	},
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function DonsraadFeatures({ className }: DonsraadFeaturesProps) {
	return (
		<section className={cn("not-prose my-14", className)} id="features">
			<div className="mb-8 text-center">
				<h2 className="text-foreground mb-2 text-2xl font-bold tracking-tight md:text-3xl">
					Everything in one companion
				</h2>
				<p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed md:text-base">
					From weekly Landsraad scans to AutoRun loops — built for{" "}
					<Link
						href="https://duneawakening.com/"
						className="text-foreground font-medium underline underline-offset-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dune: Awakening
					</Link>
					.
				</p>
			</div>

			<motion.div
				className="grid gap-4 md:grid-cols-2"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-40px" }}
			>
				{donsraadFeatureGroups.map((group) => (
					<motion.article
						key={group.title}
						variants={item}
						className="border-border/80 bg-card rounded-2xl border p-5 shadow-sm md:p-6"
					>
						<h3 className="text-foreground mb-1 text-lg font-semibold tracking-tight">
							{group.title}
						</h3>
						<p className="text-muted-foreground mb-4 text-sm leading-relaxed">
							{group.description}
						</p>
						<ul className="space-y-3">
							{group.items.map((feature) => (
								<li
									key={feature.title}
									className="border-border/60 border-l-2 border-l-amber-500/40 pl-3"
								>
									<p className="text-foreground text-sm font-medium">
										{feature.title}
									</p>
									<p className="text-muted-foreground mt-0.5 text-sm leading-relaxed">
										{feature.body}
									</p>
								</li>
							))}
						</ul>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
}
