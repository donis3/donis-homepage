import path from "path";
import { config } from "../config";
import fs from "fs/promises";

export async function getProjectCoverUrl(projectFolder: string) {
	const projectDir = path.join(config.projectsDirectory, projectFolder);
	const files = await fs.readdir(projectDir);

	for (const file of files) {
		if (file.toLowerCase().includes("cover")) {
			return `/assets/projects/${projectFolder}/${file}`;
		}
	}
	return `/assets/common/project-placeholder.jpg`;
}

export async function getProjectThumbnailUrl(projectFolder: string) {
	const projectDir = path.join(config.projectsDirectory, projectFolder);
	const files = await fs.readdir(projectDir);

	for (const file of files) {
		if (file.toLowerCase().includes("thumbnail")) {
			return `/assets/projects/${projectFolder}/${file}`;
		}
	}
	return `/assets/common/project-placeholder.jpg`;
}

export async function getProjectImageUrls(projectFolder: string) {
	const images: { src: string; alt: string }[] = [];

	const projectDir = path.join(config.projectsDirectory, projectFolder);
	const files = await fs.readdir(projectDir);

	// Filter out any filename that contains cover. Get all other images and sort by their names
	const imageFiles = files
		.filter((file) => {
			const ext = path.extname(file).toLowerCase();
			const isImage = [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(
				ext,
			);
			const isCover = file.toLowerCase().includes("cover");
			const isThumbnail = file.toLowerCase().includes("thumbnail");
			return isImage && !isCover && !isThumbnail;
		})
		.sort();

	for (let i = 0; i < imageFiles.length; i++) {
		const file = imageFiles[i];
		const src = `/assets/projects/${projectFolder}/${file}`;
		const alt = `Image ${i + 1} of project ${projectFolder}`;
		images.push({ src, alt });
	}

	return images;
}
