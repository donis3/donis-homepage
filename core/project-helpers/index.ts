import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { config } from "../config";
import {
	ProjectMetadata,
	projectMetadataSchema,
} from "./project-metadata-schema";
import { getProjectCoverUrl, getProjectThumbnailUrl } from "./image-fns";

export async function getProjectFolderList() {
	const projectsDir = config.projectsDirectory;
	const files = await fs.readdir(projectsDir);
	const projectFolders: string[] = [];
	for (const file of files) {
		const filePath = path.join(projectsDir, file);
		if ((await fs.stat(filePath)).isDirectory()) {
			projectFolders.push(file);
		}
	}
	return projectFolders;
}

export async function getProjectMdxContent(projectFolder: string) {
	const projectDir = path.join(config.projectsDirectory, projectFolder);
	const mdxFilePath = path.join(projectDir, "content.mdx");
	const content = await fs.readFile(mdxFilePath, "utf-8");
	const { content: mdxContent, data: frontmatter } = matter(content);

	const relativePath = path.relative(process.cwd(), mdxFilePath);
	return { content: mdxContent, frontmatter, relativePath };
}

export type ProjectDetails = ProjectMetadata & {
	slug: string;
	thumbnailUrl: string;
	coverUrl: string;
};

export async function getProjectMetadata(
	projectFolder: string,
): Promise<ProjectDetails> {
	const { frontmatter } = await getProjectMdxContent(projectFolder);

	const valid = projectMetadataSchema.safeParse(frontmatter);
	if (!valid.success) {
		const fieldErrors = valid.error.issues
			.map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
			.join("\n");
		throw new Error(
			`Invalid frontmatter in project ${projectFolder}:\n${fieldErrors}`,
		);
	}

	const thumbnailUrl = await getProjectThumbnailUrl(projectFolder);
	const coverUrl = await getProjectCoverUrl(projectFolder);
	return { slug: projectFolder, ...valid.data, thumbnailUrl, coverUrl };
}

export async function getProjectsMetadata(
	onlyFeatured: boolean = false,
): Promise<ProjectDetails[]> {
	const projectFolders = await getProjectFolderList();
	const projectsMetadata: ProjectDetails[] = await Promise.all(
		projectFolders.map(async (folder) => {
			return await getProjectMetadata(folder);
		}),
	);

	if (onlyFeatured) {
		return projectsMetadata
			.filter((project) => project.isFeatured)
			.sort((a, b) => b.date.getTime() - a.date.getTime());
	}
	return projectsMetadata.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export type ProjectTagWithCount = {
	label: string;
	count: number;
};

export async function getProjectTags(): Promise<ProjectTagWithCount[]> {
	const projects = await getProjectsMetadata();
	const collection: { label: string; count: number }[] = [];
	const tagCountMap: Record<string, number> = {};

	projects.forEach((project) => {
		project.tags.forEach((tag) => {
			if (tag in tagCountMap) {
				tagCountMap[tag] += 1;
			} else {
				tagCountMap[tag] = 1;
			}
		});
	});

	for (const [label, count] of Object.entries(tagCountMap)) {
		collection.push({ label, count });
	}

	collection.sort((a, b) => b.count - a.count);

	return collection;
}
