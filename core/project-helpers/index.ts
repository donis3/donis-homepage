import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { config } from "../config";
import {
	ProjectMetadata,
	projectMetadataSchema,
} from "./project-metadata-schema";

export async function getProjectFolderList() {
	const projectsDir = config.projectsDirectory;
	const files = await fs.readdir(projectsDir);
	return files.filter(async (file) => {
		const filePath = path.join(projectsDir, file);
		return (await fs.stat(filePath)).isDirectory();
	});
}

export async function getProjectMdxContent(projectFolder: string) {
	const projectDir = path.join(config.projectsDirectory, projectFolder);
	const mdxFilePath = path.join(projectDir, "content.mdx");
	const content = await fs.readFile(mdxFilePath, "utf-8");
	const { content: mdxContent, data: frontmatter } = matter(content);

	const relativePath = path.relative(process.cwd(), mdxFilePath);
	return { content: mdxContent, frontmatter, relativePath };
}

export async function getProjectMetadata(
	projectFolder: string,
): Promise<ProjectMetadata & { slug: string }> {
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
	return { slug: projectFolder, ...valid.data };
}

export async function getProjectsMetadata(): Promise<
	(ProjectMetadata & { slug: string })[]
> {
	const projectFolders = await getProjectFolderList();
	const projectsMetadata = await Promise.all(
		projectFolders.map(async (folder) => {
			return await getProjectMetadata(folder);
		}),
	);

	return projectsMetadata.filter(
		(project): project is ProjectMetadata & { slug: string } =>
			project !== null,
	);
}
