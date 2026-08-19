import path from "path";

export const config = {
	projectsDirectory: path.join(process.cwd(), "projects"),
} as const;

/** Canonical origin. Empty string from CI must not win over the fallback. */
export function getSiteUrl() {
	const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
	if (fromEnv) {
		return fromEnv;
	}
	return process.env.NODE_ENV === "production"
		? "https://donis.dev"
		: "http://localhost:3000";
}
