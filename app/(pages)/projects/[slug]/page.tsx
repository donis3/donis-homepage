import {
	getProjectFolderList,
	getProjectMdxContent,
	getProjectMetadata,
} from "@/core/project-helpers";

import {
	getProjectCoverUrl,
	getProjectImageUrls,
} from "@/core/project-helpers/image-fns";
import type { Metadata } from "next";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";
import ProjectGallery from "./_components/project-gallery";
import ProjectHeader from "./_components/project-header";
import ProjectMetadata from "./_components/project-metadata";
import ProjectStack from "./_components/project-stack";

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
	const coverImageUrl = await getProjectCoverUrl(projectFolder);

	return (
		<div className="w-full mb-12">
			<ProjectHeader
				title={projectMetadata.shortTitle || projectFolder}
				tags={projectMetadata.tags}
				imageUrl={coverImageUrl}
			/>
			<div className="mx-auto max-w-2xl px-4 py-4">
				<ProjectMetadata metadata={projectMetadata} />
				
			</div>
			<div className="mx-auto max-w-2xl px-4">
				<article className="prose dark:prose-invert mx-auto my-8 max-w-full">
					<MDXRemote source={projectContent} options={options} />
				</article>
			</div>
			{imageUrls.length > 0 && (
				<section className="from-muted/50 bg-linear-to-b to-transparent px-4 pt-6 pb-12">
					<ProjectGallery
						images={imageUrls}
						className="mx-auto max-w-2xl"
					/>
				</section>
			)}
			<ProjectStack stack={projectMetadata.techStack} />
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
