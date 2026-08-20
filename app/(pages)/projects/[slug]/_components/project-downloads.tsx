import { Button } from "@/components/ui/button";
import type { ProjectMetadata } from "@/core/project-helpers/project-metadata-schema";
import { cn } from "@/lib/utils";
import fs from "fs/promises";
import { Download, FileArchive, FileCode2 } from "lucide-react";
import path from "path";

type DownloadItem = ProjectMetadata["downloads"][number];

type ProjectDownloadsProps = {
	downloads: DownloadItem[];
	className?: string;
};

function formatBytes(bytes: number) {
	if (bytes < 1024) {
		return `${bytes} B`;
	}
	if (bytes < 1024 * 1024) {
		return `${(bytes / 1024).toFixed(1)} KB`;
	}
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

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

function isSourceArchive(item: DownloadItem) {
	const haystack =
		`${item.title} ${item.href} ${item.filename ?? ""}`.toLowerCase();
	return haystack.includes("source");
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
	className,
}: ProjectDownloadsProps) {
	if (downloads.length === 0) {
		return null;
	}

	const items = await Promise.all(
		downloads.map(async (item) => ({
			...item,
			bytes: await getPublicFileSize(item.href),
			fileName: fileNameFromHref(item.href, item.filename),
		})),
	);

	return (
		<section
			className={cn(
				"md:bg-accent mx-auto max-w-2xl p-4 md:rounded-lg",
				className,
			)}
		>
			<h2 className="mb-4 text-lg font-semibold tracking-tight">
				Downloads
			</h2>
			<ul className="flex flex-col gap-3">
				{items.map((item) => {
					const Icon = isSourceArchive(item) ? FileCode2 : FileArchive;

					return (
						<li
							key={item.href}
							className="border-border bg-background flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
						>
							<div className="flex min-w-0 items-start gap-3">
								<div className="bg-muted text-muted-foreground flex size-10 shrink-0 items-center justify-center rounded-md">
									<Icon className="size-5" />
								</div>
								<div className="min-w-0">
									<p className="font-medium tracking-tight">
										{item.title}
									</p>
									{item.description && (
										<p className="text-muted-foreground mt-0.5 text-sm">
											{item.description}
										</p>
									)}
									<p className="text-muted-foreground mt-1 font-mono text-xs">
										{item.fileName}
										{item.bytes != null && (
											<span> · {formatBytes(item.bytes)}</span>
										)}
									</p>
								</div>
							</div>
							<Button asChild size="sm" className="w-full sm:w-auto">
								<a href={item.href} download={item.fileName}>
									<Download />
									Download
								</a>
							</Button>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
