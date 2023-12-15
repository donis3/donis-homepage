import React, { FC } from "react";
import { projects, getProjectImages } from "@/data/projects";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Section from "@/app/_homepage/Section";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaGlobe } from "react-icons/fa";
import Album from "./Album";
import ImageModal from "@/components/img-modal/ImageModal";

/**
 * Each project must be generated
 * @returns
 */
export async function generateStaticParams() {
	if (projects.length === 0) return [];

	return projects.map((project) => {
		return { projectId: [project.id] };
	});
}

/**
 * Load metadata for each blog post by importing directly their metadata
 * @param param0
 * @returns
 */
export async function generateMetadata({
	params,
}: projectProps): Promise<Metadata> {
	const projectId = params.projectId[0];

	//Lazy load the mdx file for the project
	try {
		const file = await import(
			"../../../data/projects/" + projectId + ".mdx"
		);
		if (file.metadata) return file.metadata;
		else {
			throw new Error();
		}
	} catch (error) {
		//Err
		console.log("Unable to fetch metadata for " + projectId);
		return {
			title: "Project Page",
			description: "Project Desc",
		};
	}
}

type projectProps = {
	params: { projectId: string[] };
};

const project: FC<projectProps> = ({ params }) => {
	const projectId = params.projectId[0];
	const data = projects.find((p) => p.id === projectId);
	if (!data) return <></>;
	const ProjectMarkdown = dynamic(
		() => import("../../../data/projects/" + projectId + ".mdx"),
	);

	return (
		<>
			<section className="w-full bg-gradient-to-b from-primary-400 to-light-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
				<div className="container mx-auto p-4 h-10">
					<Link
						href={"/projects"}
						className="inline-flex items-center gap-2 py-1 px-2 rounded-lg  text-sm font-medium bg-light-200/10 hover:bg-light-200/30">
						<FaArrowLeft />
						Projects
					</Link>
				</div>
				<div className="container mx-auto p-4 flex flex-col md:flex-row gap-4 justify-between ">
					<div className="flex-1">
						<h1 className="text-4xl font-bold tracking-tight text-center md:text-start">
							{data.title}
						</h1>
						<p className="leading-relaxed  text-center md:text-start text-sm font-light text-slate-100/75">
							Technologies: {data.tech.join(", ")}
						</p>
						<p className="leading-relaxed  text-center md:text-start text-sm font-medium opacity-80 h-8">
							Completed in {data.year}
						</p>
					</div>

					<div className="flex-shrink flex flex-wrap gap-4 justify-center items-center md:items-start md:justify-end">
						{data.link && (
							<Link
								target="_blank"
								href={data.link}
								className="shadow-md p-2 rounded-md font-medium text-base inline-flex items-center gap-2 transition-colors duration-500 bg-orange-800 hover:bg-orange-700">
								<FaGlobe />
								Visit Project
							</Link>
						)}
						{data.repo && (
							<Link
								target="_blank"
								href={data.repo}
								className="shadow-md p-2 rounded-md font-medium text-base inline-flex items-center gap-2 transition-colors duration-500 bg-purple-950 hover:bg-purple-700">
								<FaGithub />
								Github Repo
							</Link>
						)}
					</div>
				</div>
			</section>
			<Section
				divider="wave"
				dividerFillClass="fill-light-100"
				className="bg-slate-100  pb-20 flex-1 min-h-[500px]"
				dividerFlip={true}>
				<div>
					<Album images={data.images} projectId={projectId} caption={data.title} />
				</div>
				<article className="prose w-full mt-10 ">
					<ProjectMarkdown />
				</article>
				<div className="mt-20 flex justify-center">
					<Link
						href={"/projects"}
						className="flex items-center gap-2 py-2 px-4 rounded-lg border bg-white text-lg font-medium hover:bg-slate-50 hover:border-black">
						<FaArrowLeft />
						Projects
					</Link>
				</div>
			</Section>
		</>
	);
};

export default project;
