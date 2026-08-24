import { cn } from "@/lib/utils";
import { OctagonAlert } from "lucide-react";
import Link from "next/link";

type DonsraadNoticeProps = {
	className?: string;
};

export default function DonsraadNotice({ className }: DonsraadNoticeProps) {
	return (
		<aside
			role="note"
			className={cn(
				"not-prose my-0 mb-8 rounded-xl border-2 border-destructive/40 bg-destructive/6 p-5 shadow-sm sm:p-6",
				"dark:border-destructive/35 dark:bg-destructive/10",
				className,
			)}
		>
			<div className="mb-4 flex items-start gap-3">
				<OctagonAlert className="text-destructive mt-0.5 size-5 shrink-0" />
				<div className="space-y-3">
					<p className="text-foreground m-0 text-base leading-snug font-semibold">
						Hobby learning project — not for live play
					</p>
					<p className="text-muted-foreground m-0 text-sm leading-relaxed">
						Donsraad is a personal learning project I built for a game I
						love —{" "}
						<Link
							href="https://duneawakening.com/"
							className="text-foreground font-medium underline underline-offset-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dune: Awakening
						</Link>
						. It is a portfolio piece and{" "}
						<strong className="text-foreground font-semibold">
							not intended for general use
						</strong>
						.
					</p>
					<p className="text-muted-foreground m-0 text-sm leading-relaxed">
						Only use it for testing in{" "}
						<strong className="text-foreground font-semibold">
							single-player
						</strong>{" "}
						or on{" "}
						<strong className="text-foreground font-semibold">
							private servers
						</strong>
						.{" "}
						<strong className="text-destructive font-semibold">
							Do not use this on live official servers or active accounts.
						</strong>{" "}
						Automating the game client may violate Funcom&apos;s terms of
						service and can result in account bans.
					</p>
					<p className="text-muted-foreground m-0 text-xs leading-relaxed">
						Unofficial fan tool. Not affiliated with, endorsed by, or sponsored
						by Funcom, Legendary, or any other rights holder of Dune or Dune:
						Awakening.
					</p>
				</div>
			</div>
		</aside>
	);
}
