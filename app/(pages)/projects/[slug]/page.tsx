import {
	getProjectFolderList,
	getProjectMdxContent,
	getProjectMetadata,
} from "@/core/project-helpers";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import Link from "next/link";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export default async function ProjectPage({ params }: ProjectPageProps) {
	const folders = await getProjectFolderList();
	const { slug: projectFolder } = await params;

	if (!projectFolder || !folders.includes(projectFolder)) {
		return notFound();
	}

	const options: MDXRemoteOptions = {
		parseFrontmatter: true,
	};

	// load project content here
	const { content: projectContent } =
		await getProjectMdxContent(projectFolder);

	return (
		<div className="mx-auto max-w-2xl p-4">
			<Link
				href="/projects"
				className="mb-8 inline-block text-blue-500 hover:underline"
			>
				Back to Projects
			</Link>
			<Suspense fallback={<div>Loading content...</div>}>
				<article className="prose dark:prose-invert mx-auto max-w-full">
					<MDXRemote source={projectContent} options={options} />
				</article>
			</Suspense>
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
