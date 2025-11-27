import { generateSocialImage } from "@/components/social-image";
import {
	getProjectFolderList,
	getProjectMetadata,
} from "@/core/project-helpers";
import { getProjectCoverPath } from "@/core/project-helpers/image-fns";
import { notFound } from "next/navigation";

// Image metadata
export const alt = "Donis.Dev Project Showcase";
export const size = {
	width: 1200,
	height: 675,
};

export const contentType = "image/jpeg";

export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const projectData = await getProjectMetadata(slug);
	if (!projectData) {
		return notFound();
	}
	const coverPath = await getProjectCoverPath(slug);

	return await generateSocialImage({
		width: size.width,
		height: size.height,
		imagePath: coverPath,
		title: projectData.shortTitle || projectData.slug,
		summary: projectData.shortDescription,
	});
}

export async function generateStaticParams() {
	const projectFolders = await getProjectFolderList();

	return projectFolders.map((folder) => ({
		slug: folder,
	}));
}
