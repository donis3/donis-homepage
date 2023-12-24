import useProjects from "@/data/useProjects";
import getDirFileStats from "@/lib/getDirFileStats";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		/** Home page */
		{
			url: siteUrl(),
			lastModified: new Date("2023-12-24"),
			changeFrequency: "monthly",
			priority: 1,
		},
		/** About page */
		{
			url: siteUrl("/about"),
			lastModified: new Date("2023-12-24"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		/** Projects page */
		{
			url: siteUrl("/projects"),
			lastModified: new Date("2023-12-24"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		/**Each Project Page */
		...getProjectSitemap(),
		/** Blog page */
		{
			url: siteUrl("/blog"),
			lastModified: new Date("2023-12-24"),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		/**Each Blog page */
		...getBlogSitemap(),
		/** Contact page */
		{
			url: siteUrl("/contact"),
			lastModified: new Date("2023-12-24"),
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];
}

/**
 * Generate sitemap objects for each project page
 * @returns
 */
function getProjectSitemap() {
	const projectUrls: MetadataRoute.Sitemap = [];
	const projectFiles = getDirFileStats("./data/projects", [
		"readme",
		"_example",
	]);

	projectFiles.forEach((fileStats) => {
		projectUrls.push({
			url: siteUrl(`projects/${fileStats.filename}`),
			changeFrequency: "monthly",
			lastModified: fileStats.lastModified,
			priority: 0.8,
		});
	});

	return projectUrls;
}

/**
 * Generate sitemap objects for each blog page
 * @returns
 */
function getBlogSitemap() {
	const projectUrls: MetadataRoute.Sitemap = [];
	const projectFiles = getDirFileStats("./data/posts", [
		"readme",
		"_example",
	]);

	projectFiles.forEach((fileStats) => {
		projectUrls.push({
			url: siteUrl(`blog/${fileStats.filename}`),
			changeFrequency: "monthly",
			lastModified: fileStats.lastModified,
			priority: 1,
		});
	});

	return projectUrls;
}

/**
 * Create a url for the provided site path including the APP_URL
 * @param relativePath example: projects/donis
 * @returns
 */
function siteUrl(relativePath?: string) {
	return new URL(relativePath ?? "", process.env.APP_URL).toString();
}
