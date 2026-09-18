import ContactEmail from "@/components/contact-email";
import { cn } from "@/lib/utils";
import { FlaskConical } from "lucide-react";

type DonsraadBetaProps = {
	className?: string;
};

export default function DonsraadBeta({ className }: DonsraadBetaProps) {
	return (
		<aside
			className={cn(
				"not-prose border-border/80 bg-muted/30 my-10 rounded-xl border p-5 md:p-6",
				className,
			)}
		>
			<div className="flex items-start gap-3">
				<FlaskConical
					className="text-amber-600 mt-0.5 size-5 shrink-0 dark:text-amber-400"
					aria-hidden
				/>
				<div className="space-y-2">
					<h2 className="text-foreground m-0 text-lg font-semibold tracking-tight">
						Beta
					</h2>
					<p className="text-muted-foreground m-0 text-sm leading-relaxed">
						Built for{" "}
						<strong className="text-foreground font-medium">
							Dune: Awakening 1.5
						</strong>
						. Tested at{" "}
						<strong className="text-foreground font-medium">1080p</strong>,{" "}
						<strong className="text-foreground font-medium">1440p</strong>, and{" "}
						<strong className="text-foreground font-medium">3440×1440</strong>{" "}
						— other resolutions may not work correctly. Bugs are still possible.
					</p>
					<p className="text-muted-foreground m-0 text-sm leading-relaxed">
						If something breaks, turn on debug in Settings, reproduce the issue,
						then email a short description and the logs to <ContactEmail />.
					</p>
				</div>
			</div>
		</aside>
	);
}
