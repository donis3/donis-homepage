import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			
		},
		sitemap: "https://donis.dev/sitemap.xml",
	};
}
