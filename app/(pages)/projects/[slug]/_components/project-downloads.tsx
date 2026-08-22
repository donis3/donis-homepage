import Downloads, { type DownloadFile } from "@/components/downloads";
import type { ProjectMetadata } from "@/core/project-helpers/project-metadata-schema";
import fs from "fs/promises";
import path from "path";
import type { ReactNode } from "react";

type DownloadItem = ProjectMetadata["downloads"][number];

type ProjectDownloadsProps = {
	downloads: DownloadItem[];
	terms?: ReactNode;
	termsTitle?: string;
	className?: string;
};

function fileNameFromHref(href: string, filename?: string) {
	if (filename) {
		return filename;
	}
	try {
		return decodeURIComponent(href.split("/").pop() ?? href);
	} catch {
		return href;
	}
}

async function getPublicFileSize(href: string) {
	if (/^https?:\/\//i.test(href)) {
		return undefined;
	}

	const relative = href.replace(/^\/+/, "");
	const filePath = path.join(process.cwd(), "public", relative);

	try {
		const { size } = await fs.stat(filePath);
		return size;
	} catch {
		return undefined;
	}
}

export default async function ProjectDownloads({
	downloads,
	terms,
	termsTitle,
	className,
}: ProjectDownloadsProps) {
	if (downloads.length === 0) {
		return null;
	}

	const files: DownloadFile[] = await Promise.all(
		downloads.map(async (item) => ({
			title: item.title,
			description: item.description,
			href: item.href,
			filename: fileNameFromHref(item.href, item.filename),
			bytes: await getPublicFileSize(item.href),
		})),
	);

	return (
		<Downloads
			files={files}
			terms={terms}
			termsTitle={termsTitle}
			className={className}
		/>
	);
}
