import { getProjectsMetadata } from "@/core/project-helpers";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap() {
	const staticRoutes = getStaticRoutes();
    const dynamicRoutes = await generateDynamicRoutes();

	return [...staticRoutes, ...dynamicRoutes];
}

/**
 * Get static routes for the sitemap
 */
function getStaticRoutes(): MetadataRoute.Sitemap {
	const storage: MetadataRoute.Sitemap = [];
	const routes = ["/", "/about", "/projects", "/contact"];

	for (let j = 0; j < routes.length; j++) {
		const path = routes[j];
		const url = new URL(path, process.env.NEXT_PUBLIC_SITE_URL);

		storage.push({
			url: url.toString(),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		});
	}
	return storage;
}

/**
 * Get static routes for the sitemap
 */
async function generateDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
	const projects = await getProjectsMetadata();
	if (projects.length === 0) {
		return [];
	}

	const storage: MetadataRoute.Sitemap = [];
	for (let i = 0; i < projects.length; i++) {
		const project = projects[i];
		const path = `/projects/${project.slug}`;
		const url = new URL(path, process.env.NEXT_PUBLIC_SITE_URL);

		storage.push({
			url: url.toString(),
			lastModified: project.date ? project.date : new Date(),
			changeFrequency: "yearly",
			priority: 0.6,
		});
	}
	return storage;
}
