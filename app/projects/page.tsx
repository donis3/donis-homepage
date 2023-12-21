import React, { FC } from "react";
import Section from "../_homepage/Section";
import Link from "next/link";
import Project from "./Project";
import useProjects from "@/data/useProjects";
import { Viewport } from "next";
import ThemeColorChanger from "@/components/ThemeColorChanger";


export const viewport: Viewport = {
	//Default theme color
	themeColor: "#172b46",
};

const ProjectsPage: FC = async () => {
	const { getAllProjectsSorted } = useProjects();

	const projects = await getAllProjectsSorted();
	return (
		<>
			<ThemeColorChanger color="#172b46" />
			<section className="w-full bg-gradient-to-b from-primary-400 to-light-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
				<div className="container mx-auto p-4 mt-10">
					<h1 className="text-4xl font-bold tracking-tight  ">
						My Work
					</h1>
					<p className="py-2 leading-relaxed max-w-sm">
						Here are some of my previous work. Visit my{" "}
						<Link
							href={process.env.NEXT_PUBLIC_DEV_GITHUB as string}
							target="_blank"
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
				className="bg-secondary-900 pb-20"
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

export default ProjectsPage;
