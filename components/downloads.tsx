"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import TermsOfService from "@/components/terms-of-service";
import { cn } from "@/lib/utils";
import { Download, FileArchive, FileCode2, Lock } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

export type DownloadFile = {
	title: string;
	description?: string;
	href: string;
	filename: string;
	bytes?: number;
};

type DownloadsProps = {
	files: DownloadFile[];
	heading?: string;
	terms?: ReactNode;
	termsTitle?: string;
	acceptLabel?: string;
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

function isSourceArchive(item: DownloadFile) {
	const haystack = `${item.title} ${item.href} ${item.filename}`.toLowerCase();
	return haystack.includes("source");
}

export default function Downloads({
	files,
	heading = "Downloads",
	terms,
	termsTitle = "Terms of use",
	acceptLabel = "I have read and accept the terms of use.",
	className,
}: DownloadsProps) {
	const acceptId = useId();
	const [accepted, setAccepted] = useState(false);
	const requiresTerms = terms != null;
	const unlocked = !requiresTerms || accepted;

	if (files.length === 0) {
		return null;
	}

	return (
		<section
			className={cn(
				"md:bg-accent mx-auto mt-8 mb-16 max-w-2xl p-4 md:rounded-lg",
				className,
			)}
		>
			<h2 className="mb-4 text-lg font-semibold tracking-tight">
				{heading}
			</h2>
			{requiresTerms && (
				<div className="border-border bg-background mb-4 rounded-lg border p-4">
					<p className="text-muted-foreground mb-3 text-sm leading-relaxed">
						Accept the terms of use to unlock the download links.
					</p>
					<TermsOfService
						title={termsTitle}
						triggerLabel="Read terms of use"
						className="my-0 mb-3"
					>
						{terms}
					</TermsOfService>
					<label
						htmlFor={acceptId}
						className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed"
					>
						<input
							id={acceptId}
							type="checkbox"
							checked={accepted}
							onChange={(event) => setAccepted(event.target.checked)}
							className="border-input text-primary focus-visible:ring-ring mt-0.5 size-4 shrink-0 rounded-sm border accent-current focus-visible:ring-2 focus-visible:outline-none"
						/>
						<span>{acceptLabel}</span>
					</label>
				</div>
			)}
			<ul className="flex flex-col gap-3">
				{files.map((item) => {
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
										{item.filename}
										{item.bytes != null && (
											<span> · {formatBytes(item.bytes)}</span>
										)}
									</p>
								</div>
							</div>
							{unlocked ? (
								<Button
									key={`${item.href}-download`}
									asChild
									size="sm"
									className="w-full sm:w-auto"
								>
									<a href={item.href} download={item.filename}>
										<Download />
										Download
									</a>
								</Button>
							) : (
								<div
									key={`${item.href}-locked`}
									className={cn(
										buttonVariants({
											variant: "outline",
											size: "sm",
										}),
										"pointer-events-none w-full cursor-not-allowed opacity-50 sm:w-auto",
									)}
									aria-disabled="true"
								>
									<Lock />
									Locked
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
