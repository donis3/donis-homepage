import fs from "fs/promises";
import path from "path";
import { config } from "../config";
import { ChangelogEntry, changelogSchema } from "./changelog-schema";

export async function getProjectChangelog(
	projectFolder: string,
): Promise<ChangelogEntry[]> {
	const changelogPath = path.join(
		config.projectsDirectory,
		projectFolder,
		"changelog.json",
	);

	let raw: string;
	try {
		raw = await fs.readFile(changelogPath, "utf-8");
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") {
			return [];
		}
		throw error;
	}

	let parsed: unknown;
	try {
		parsed = JSON.parse(raw);
	} catch {
		throw new Error(
			`Invalid JSON in ${path.relative(process.cwd(), changelogPath)}`,
		);
	}

	const valid = changelogSchema.safeParse(parsed);
	if (!valid.success) {
		const fieldErrors = valid.error.issues
			.map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
			.join("\n");
		throw new Error(
			`Invalid changelog in project ${projectFolder}:\n${fieldErrors}`,
		);
	}

	return valid.data;
}
