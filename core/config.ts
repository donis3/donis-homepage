import path from "path";

export const config = {
	projectsDirectory: path.join(process.cwd(), "projects"),
} as const;
