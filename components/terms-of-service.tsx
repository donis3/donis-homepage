"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { ScrollText, X } from "lucide-react";
import type { ReactNode } from "react";

type TermsOfServiceProps = {
	title?: string;
	triggerLabel?: string;
	children: ReactNode;
	className?: string;
};

export default function TermsOfService({
	title = "Terms of use",
	triggerLabel = "Terms of use",
	children,
	className,
}: TermsOfServiceProps) {
	return (
		<div className={cn("not-prose my-4", className)}>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button variant="outline" size="sm">
						<ScrollText />
						{triggerLabel}
					</Button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] bg-black/60" />
					<Dialog.Content
						className={cn(
							"border-border bg-background text-foreground",
							"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
							"fixed top-1/2 left-1/2 z-[60] flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border shadow-lg",
						)}
					>
						<div className="flex items-start justify-between gap-4 border-b px-5 py-4">
							<Dialog.Title className="text-sm font-semibold tracking-wide uppercase">
								{title}
							</Dialog.Title>
							<Dialog.Description className="sr-only">
								{title}
							</Dialog.Description>
							<Dialog.Close asChild>
								<Button
									variant="ghost"
									size="icon-sm"
									aria-label="Close terms of use"
								>
									<X />
								</Button>
							</Dialog.Close>
						</div>
						<div className="overflow-y-auto px-5 py-4">
							<div className="text-muted-foreground [&_strong]:text-foreground space-y-3 text-sm leading-relaxed [&_a]:text-blue-500 [&_a]:hover:text-blue-700 [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_p]:m-0">
								{children}
							</div>
						</div>
						<div className="flex justify-end border-t px-5 py-3">
							<Dialog.Close asChild>
								<Button size="sm">Close</Button>
							</Dialog.Close>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
