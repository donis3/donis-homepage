import useProjects from "@/data/useProjects";
import { Metadata } from "next";
import React, { FC } from "react";

type ProjectPageProps = {
	params: { projectId: string[] };
};

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
	const projectId = params.projectId[0];

	return (
		<section className="w-full bg-gradient-to-b from-primary-400 to-primary-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
			<div className="grid grid-cols-1 md:grid-cols-2  container mx-auto mt-8">
				Displaying {projectId}
			</div>
		</section>
	);
};

export default ProjectPage;

/**
 * Each project must be generated
 * @returns
 */
export async function generateStaticParams() {
	const { filenames } = useProjects();

	return filenames.map((filename) => {
		return { projectId: [filename] };
	});
}

/**
 * Load metadata for each blog post by importing directly their metadata
 * @param param0
 * @returns
 */
export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { getProjectData } = useProjects();
	const projectId = params.projectId[0];

	//Lazy load the mdx file for the project
	try {
		const metadata = await getProjectData(projectId, "metadata");
		if (!metadata) throw new Error();

		return metadata;
	} catch (error) {
		//Err
		console.log("Unable to fetch metadata for " + projectId);
		return {
			title: "Project Page",
			description: "Project Desc",
		};
	}
}
