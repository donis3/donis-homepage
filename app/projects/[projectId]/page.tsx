import React, { FC } from "react";
import { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import Section from "@/app/_homepage/Section";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaGlobe } from "react-icons/fa";
import Album from "./Album";
import { cn } from "@/lib/utilities";
import useProjects from "@/data/useProjects";
import { notFound } from "next/navigation";
import ThemeColorChanger from "@/components/ThemeColorChanger";

/**
 * Each project must be generated
 * @returns
 */
export async function generateStaticParams() {
	const { filenames } = useProjects();

	return filenames.map((filename) => {
		return { projectId: filename };
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
	const { getProjectData } = useProjects();
	const projectId = params.projectId;

	//Lazy load the mdx file for the project
	try {
		const metadata = await getProjectData(projectId, "metadata");
		if (!metadata) throw new Error();

		return {
			...metadata,
			openGraph: {
				images: `/projects/${projectId}/open-graph.png`,
			},
			twitter: {
				images: `/projects/${projectId}/twitter-image.png`,
			},
		};
	} catch (error) {
		//Err
		console.log("Unable to fetch metadata for " + projectId);
		return {
			title: "Project Page",
			description: "Project Desc",
		};
	}
}

export const viewport: Viewport = {
	//Default theme color
	themeColor: "#060b12",
};

type projectProps = {
	params: { projectId: string };
};

const project: FC<projectProps> = async ({ params }) => {
	const { getProjectData } = useProjects();
	const projectId = params.projectId;
	const data = await getProjectData(projectId, "data");

	if (!data) return notFound();
	const ProjectMarkdown = dynamic(
		() => import("../../../data/projects/" + projectId + ".mdx"),
	);

	return (
		<>
			<ThemeColorChanger color="#060b12" />
			<section
				className={cn(
					"w-full bg-gradient-to-b   relative pt-[var(--navbar-h)] text-muted-800  to-90%",
					`from-primary-100 to-accent-100`,
				)}>
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
				dividerFillClass="fill-accent-100"
				className="bg-slate-100  pb-20 "
				dividerFlip={true}>
				{data.images && data.images.length > 1 && (
					<div>
						<Album
							images={data.images.slice(1)} // Skip first image because its the cover image
							projectId={projectId}
							caption={data.title}
						/>
					</div>
				)}
				<article className="prose w-full mt-10 mx-auto">
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
