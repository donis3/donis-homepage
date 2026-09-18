import Kbd from "@/components/kbd";
import { cn } from "@/lib/utils";
import {
	Crosshair,
	Flag,
	LayoutGrid,
	Play,
	RefreshCw,
	Settings,
	TriangleAlert,
	Trophy,
	type LucideIcon,
} from "lucide-react";

type Step = {
	title: string;
	body: string;
	icon: LucideIcon;
};

const steps: Step[] = [
	{
		icon: Settings,
		title: "Profile & settings",
		body: "Create a profile for each character. Guild name is required for board refresh — new profiles get a random five-letter name. Enable AutoRun, overlay, and sounds in Settings.",
	},
	{
		icon: LayoutGrid,
		title: "Scan the house grid",
		body: "On the Landsraad tab, run a house scan whenever new missions unlock during the week. Donsraad reads houses, rewards, and your contribution — green circles for tracked houses, diamonds for hunted rewards. Skip the scan to use the manual grid (pickup only, no tracking).",
	},
	{
		icon: Flag,
		title: "Goals & Reward Hunter",
		body: "Set contribution goals on houses you want to support. Open Reward Hunter and flag items you care about — yellow when they are on offer, diamonds on the grid when a house has them.",
	},
	{
		icon: Crosshair,
		title: "Pick missions",
		body: "Click a house on the mission grid. Choose up to three targets — one specialization per cell. Hunted rewards show purple highlights. Drag cells to swap or move picks.",
	},
	{
		icon: Play,
		title: "Start the picker",
		body: "Focus Dune: Awakening and press Start (Home). First Start runs setup, then the loop: claim completed missions, disband to refresh offers, accept your targets. End stops the picker; Delete toggles AutoRun.",
	},
	{
		icon: RefreshCw,
		title: "Play & AutoRun",
		body: "Run your missions in game. With AutoRun on, the overlay shows a green indicator — finished actives trigger the next claim-and-pick cycle with a notification and sound when ready. Running low on mnemonic recollections? Turn on auto stop and the picker halts once they are spent.",
	},
	{
		icon: Trophy,
		title: "Rewards & cleanup",
		body: "Claim house tiers in game, then press Claim on the Rewards tab. Houses at 14,000 contribution auto-mark swatch obtained. Mark hunted items as you collect them.",
	},
];

const keybinds = [
	{ action: "Start picker", key: "Home" },
	{ action: "Stop picker", key: "End" },
	{ action: "Toggle AutoRun", key: "Delete" },
	{ action: "Show / hide dashboard", key: "F8" },
	{ action: "Show / hide overlay", key: "Insert" },
	{ action: "Exit Donsraad", key: "Pause" },
] as const;

type DonsraadHowToUseProps = {
	className?: string;
};

export default function DonsraadHowToUse({ className }: DonsraadHowToUseProps) {
	return (
		<section className={cn("not-prose my-14", className)} id="how-to-use">
			<div className="mb-8 text-center">
				<h2 className="text-foreground mb-2 text-2xl font-bold tracking-tight md:text-3xl">
					How to use
				</h2>
				<p className="text-muted-foreground mx-auto max-w-xl text-sm leading-relaxed md:text-base">
					Scan once a week, pick your targets, press Start — Donsraad handles
					the board rolls between runs.
				</p>
			</div>

			<div className="border-border/80 bg-muted/20 mx-auto mb-10 max-w-3xl rounded-xl border p-4 md:p-5">
				<h3 className="text-foreground mb-2 text-sm font-semibold tracking-tight md:text-base">
					How board refresh works
				</h3>
				<p className="text-muted-foreground text-sm leading-relaxed">
					Abandoning your guild removes your active missions and the Landsraad
					board offers new random missions instead. Donsraad uses that refresh
					to roll until your targeted missions appear, then accepts them.
				</p>
				<div className="mt-4 space-y-3">
					<div className="border-amber-500/30 bg-amber-500/8 flex gap-3 rounded-lg border p-3">
						<TriangleAlert
							className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
							aria-hidden
						/>
						<p className="text-muted-foreground m-0 text-sm leading-relaxed">
							<strong className="text-foreground font-medium">Warning:</strong>{" "}
							you will not earn voting power for the Landsraad term when you
							abandon the guild.
						</p>
					</div>
					<div className="border-amber-500/30 bg-amber-500/8 flex gap-3 rounded-lg border p-3">
						<TriangleAlert
							className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
							aria-hidden
						/>
						<p className="text-muted-foreground m-0 text-sm leading-relaxed">
							<strong className="text-foreground font-medium">Warning:</strong>{" "}
							Funcom may disable guild abandon in a future game update. If that
							happens, board refresh will stop working and Donsraad will no
							longer be able to pick missions for you.
						</p>
					</div>
				</div>
			</div>

			<ol className="relative mx-auto max-w-3xl">
				<div
					aria-hidden
					className="bg-border absolute top-4 bottom-4 left-5 w-px md:left-6"
				/>
				{steps.map((step, index) => {
					const Icon = step.icon;

					return (
						<li
							key={step.title}
							className="relative flex gap-4 pb-8 last:pb-0 md:gap-5"
						>
							<div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 md:size-12 dark:text-amber-300">
								<Icon className="size-4 md:size-5" aria-hidden />
								<span className="sr-only">Step {index + 1}</span>
							</div>
							<div className="border-border/80 bg-card min-w-0 flex-1 rounded-xl border p-4 shadow-sm md:p-5">
								<div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
									<span className="text-muted-foreground font-mono text-xs">
										{String(index + 1).padStart(2, "0")}
									</span>
									<h3 className="text-foreground text-base font-semibold tracking-tight md:text-lg">
										{step.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm leading-relaxed md:text-[0.95rem]">
									{step.body}
								</p>
							</div>
						</li>
					);
				})}
			</ol>

			<div className="mx-auto mt-12 max-w-3xl">
				<h3 className="text-foreground mb-4 text-center text-lg font-semibold tracking-tight">
					Keybinds
				</h3>
				<div className="grid gap-2 sm:grid-cols-2">
					{keybinds.map((bind) => (
						<div
							key={bind.action}
							className="border-border/80 bg-muted/30 flex items-center justify-between gap-3 rounded-lg border px-4 py-3"
						>
							<span className="text-muted-foreground text-sm">
								{bind.action}
							</span>
							<Kbd>{bind.key}</Kbd>
						</div>
					))}
				</div>
				<p className="text-muted-foreground mt-4 text-center text-xs leading-relaxed">
					Rebind in{" "}
					<strong className="text-foreground font-medium">
						Settings → Keybinds
					</strong>
					. Click a bind, press a key — <Kbd>Esc</Kbd> cancels.
				</p>
				<p className="text-muted-foreground mt-3 text-center text-xs leading-relaxed">
					Hide the dashboard with <strong className="text-foreground font-medium">X</strong> — use the tray icon or <Kbd>F8</Kbd> to bring it back. The overlay pins to the game window and hides when unfocused.
				</p>
			</div>
		</section>
	);
}
