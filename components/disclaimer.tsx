import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

type DisclaimerProps = {
	title?: string;
	children: ReactNode;
	className?: string;
};

export default function Disclaimer({
	title = "Disclaimer",
	children,
	className,
}: DisclaimerProps) {
	return (
		<aside
			role="note"
			className={cn(
				"not-prose my-8 rounded-lg border border-amber-500/35 bg-amber-500/8 p-4 sm:p-5",
				"dark:border-amber-400/25 dark:bg-amber-400/10",
				className,
			)}
		>
			<div className="mb-3 flex items-center gap-2">
				<TriangleAlert className="size-4 shrink-0 text-amber-600 dark:text-amber-400" />
				<h2 className="text-foreground m-0 text-sm font-semibold tracking-wide uppercase">
					{title}
				</h2>
			</div>
			<div className="text-muted-foreground [&_strong]:text-foreground space-y-3 text-sm leading-relaxed [&_p]:m-0">
				{children}
			</div>
		</aside>
	);
}
