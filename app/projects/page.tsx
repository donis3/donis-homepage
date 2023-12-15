import React, { FC } from "react";
import Section from "../_homepage/Section";
import Link from "next/link";
import Project from "./Project";
import { projects } from "@/data/projects";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
	return (
		<>
			<section className="w-full bg-gradient-to-b from-primary-400 to-light-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
				<div className="container mx-auto p-4">
					<h1 className="text-4xl font-bold tracking-tight  mt-10">
						My Work
					</h1>
					<p className="py-2 leading-relaxed max-w-sm">
						Here are some of my previous work. Visit my{" "}
						<Link
							href={process.env.NEXT_PUBLIC_DEV_GITHUB as string}
							className="underline font-medium hover:text-accent">
							GitHub
						</Link>{" "}
						page for more.
					</p>
				</div>
			</section>
			<Section
				divider="wave"
				dividerFillClass="fill-light-100"
				className="bg-secondary-900 pb-20 flex-1 min-h-[500px]"
				dividerFlip={true}>
				<div className="grid grid-cols-1 gap-x-4 gap-y-16">
					{projects.map((project) => {
						return <Project data={project} key={project.id} />;
					})}
				</div>
			</Section>
		</>
	);
};

export default page;
