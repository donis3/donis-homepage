import {
	getProjectFolderList,
	getProjectMdxContent,
	getProjectMetadata,
} from "@/core/project-helpers";

import { getProjectImageUrls } from "@/core/project-helpers/image-fns";
import type { Metadata } from "next";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";
import ProjectGallery from "./_components/project-gallery";
import ProjectHeader from "./_components/project-header";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export default async function ProjectPage({ params }: ProjectPageProps) {
	const folders = await getProjectFolderList();
	const { slug: projectFolder } = await params;

	if (!projectFolder || !folders.includes(projectFolder)) {
		return notFound();
	}

	// load project content here
	const { content: projectContent } =
		await getProjectMdxContent(projectFolder);

	const projectMetadata = await getProjectMetadata(projectFolder);

	const options: MDXRemoteOptions = {
		parseFrontmatter: true,
	};

	// Read available images
	const imageUrls = await getProjectImageUrls(projectFolder);

	return (
		<div className="w-full">
			<ProjectHeader
				slug={projectFolder}
				title={projectMetadata.title || projectFolder}
				tags={projectMetadata.tags}
			/>
			<div className="max-w-2xl mx-auto px-4">
				<article className="prose dark:prose-invert mx-auto max-w-full my-8">
					<MDXRemote source={projectContent} options={options} />
				</article>
				{imageUrls.length > 0 && (
					<ProjectGallery images={imageUrls} className="my-8" />
				)}
			</div>
		</div>
	);
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug: projectFolder } = await params;
	const projectMetadata = await getProjectMetadata(projectFolder);

	return {
		title: projectMetadata.title || projectFolder,
		description: projectMetadata.description,
		keywords: projectMetadata.keywords,
		authors: [{ name: projectMetadata.author }],
		openGraph: {
			title: projectMetadata.title || projectFolder,
			description: projectMetadata.description,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: projectMetadata.title || projectFolder,
			description: projectMetadata.description,
		},
	};
}

export async function generateStaticParams() {
	const projectFolders = await getProjectFolderList();

	return projectFolders.map((folder) => ({
		slug: folder,
	}));
}
