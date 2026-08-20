import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function Kbd({ className, ...props }: ComponentProps<"kbd">) {
	return (
		<kbd
			data-slot="kbd"
			className={cn(
				"border-border bg-muted text-foreground mx-0.5 inline-flex translate-y-px items-center rounded-md border px-1.5 py-px font-mono text-[0.8em] font-medium not-italic shadow-[0_1px_0_0_var(--border)]",
				className,
			)}
			{...props}
		/>
	);
}
