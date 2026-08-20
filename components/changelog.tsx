import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export type ChangelogItem = {
	title?: string;
	body: string;
};

export type ChangelogEntry = {
	version: string;
	date?: Date;
	items: ChangelogItem[];
};

type ChangelogProps = {
	entries: ChangelogEntry[];
	heading?: string;
	className?: string;
};

export default function Changelog({
	entries,
	heading = "Changelog",
	className,
}: ChangelogProps) {
	if (entries.length === 0) {
		return null;
	}

	return (
		<section
			className={cn(
				"md:bg-accent mx-auto max-w-2xl p-4 md:rounded-lg",
				className,
			)}
		>
			<h2 className="mb-4 text-lg font-semibold tracking-tight">
				{heading}
			</h2>
			<ol className="flex flex-col gap-6">
				{entries.map((entry) => (
					<li key={entry.version} className="min-w-0">
						<div className="mb-2 flex flex-wrap items-center gap-2">
							<Badge variant="outline" className="font-mono">
								{entry.version}
							</Badge>
							{entry.date && (
								<time
									dateTime={entry.date.toISOString()}
									className="text-muted-foreground text-xs"
								>
									{format(entry.date, "d MMM yyyy", { locale: enUS })}
								</time>
							)}
						</div>
						<ul className="border-border ml-1 flex flex-col gap-2 border-l pl-4">
							{entry.items.map((item, index) => (
								<li
									key={`${entry.version}-${item.title ?? index}`}
									className="text-sm leading-relaxed"
								>
									{item.title && (
										<span className="font-medium tracking-tight">
											{item.title}
											{item.body ? " — " : ""}
										</span>
									)}
									{item.body && (
										<span className="text-muted-foreground">
											{item.body}
										</span>
									)}
								</li>
							))}
						</ul>
					</li>
				))}
			</ol>
		</section>
	);
}
