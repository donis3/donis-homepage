export type FeatureSlide = {
	title: string;
	shortTitle: string;
	description: string;
	image?: string;
	alt?: string;
};

export const donsraadFeatureSlides: FeatureSlide[] = [
	{
		title: "House grid",
		shortTitle: "House grid",
		description:
			"Run a house scan and Donsraad reads every Landsraad house, reward tier, and your contribution. Scan again whenever new house missions unlock during the week — it keeps your board and progress in sync. Tracked houses show a green circle; hunted rewards show a diamond.",
		image: "/assets/projects/donsraad/donsraad-3.jpg",
		alt: "Donsraad house grid after a Landsraad scan",
	},
	{
		title: "Manual grid",
		shortTitle: "Manual grid",
		description:
			"Skip the scan and Donsraad falls back to a position-based grid that mirrors the in-game house layout. Pick missions by cell — mission pickup still works, but contribution and reward tracking stay off until you scan.",
		image: "/assets/projects/donsraad/donsraad-12.jpg",
		alt: "Donsraad manual mission grid without a house scan",
	},
	{
		title: "House goals",
		shortTitle: "House goals",
		description:
			"Set a contribution goal on any house. When you hit it, that house’s targeted missions drop off your list so you can shift support elsewhere. Pick a new house anytime from the Landsraad tab.",
		image: "/assets/projects/donsraad/donsraad-2.jpg",
		alt: "Donsraad house contribution goal settings",
	},
	{
		title: "Landsraad progress",
		shortTitle: "Progress",
		description:
			"After a scan, every house shows how much you’ve contributed this week. Finishing missions adds progress automatically — no need to re-scan the board after every run.",
		image: "/assets/projects/donsraad/donsraad-11.jpg",
		alt: "Donsraad Landsraad progress per house",
	},
	{
		title: "Reward Hunter",
		shortTitle: "Reward Hunter",
		description:
			"Flag reward items that matter to you. Items currently on offer get a yellow marker here; houses offering hunted rewards get a diamond on the grid so you can add them to your tracked list quickly.",
		image: "/assets/projects/donsraad/donsraad-5.jpg",
		alt: "Donsraad Reward Hunter item list",
	},
	{
		title: "Mission picker",
		shortTitle: "Missions",
		description:
			"Tap a house to see its current rewards, your progress, and every mission in that specialization. Hunted rewards show diamond icons and a purple highlight so you know what you’re rolling for.",
		image: "/assets/projects/donsraad/donsraad-10.jpg",
		alt: "Donsraad mission picker for a house specialization",
	},
	{
		title: "Reward tracker",
		shortTitle: "Rewards",
		description:
			"Every tier you’ve earned shows up here. Houses that reach 14,000 contribution are marked as swatch obtained automatically. Press Claim after you collect in-game to keep the list tidy.",
		image: "/assets/projects/donsraad/donsraad-6.jpg",
		alt: "Donsraad reward tracker with claim actions",
	},
	{
		title: "Statistics",
		shortTitle: "Stats",
		description:
			"Each profile keeps its own mission complete counts, totals, and availability percentages so you can see which contracts are worth targeting.",
		image: "/assets/projects/donsraad/donsraad-1.jpg",
		alt: "Donsraad statistics per profile",
	},
	{
		title: "Profiles & settings",
		shortTitle: "Profiles",
		description:
			"Switch between characters freely — settings, goals, hunts, and stats are saved per profile. Back up by copying the JSON files next to the app. Tune delays, overlay, sounds, and keybinds in Settings.",
		image: "/assets/projects/donsraad/donsraad-8.jpg",
		alt: "Donsraad profiles and settings",
	},
	{
		title: "Overlay & notifications",
		shortTitle: "Overlay",
		description:
			"Optional in-game HUD for run times, stats, and mnemonic device counts. Get notified when a house goal is reached, missions are ready to run, or AutoRun queues the next cycle.",
		image: "/assets/projects/donsraad/donsraad-13.jpg",
		alt: "Donsraad overlay with run stats and notifications",
	},
	{
		title: "AutoRun",
		shortTitle: "AutoRun",
		description:
			"Turn it on and the overlay shows a green indicator. Donsraad detects when your active missions finish, claims them, and rolls the board for your next run. You get a notification and sound when the next cycle is ready.",
	},
];

export type FeatureGroup = {
	title: string;
	description: string;
	items: {
		title: string;
		body: string;
	}[];
};

export const donsraadFeatureGroups: FeatureGroup[] = [
	{
		title: "Landsraad board",
		description: "Scan, track, and aim your weekly contribution.",
		items: [
			{
				title: "House scan",
				body: "Sync houses, rewards, and contribution whenever the weekly grid changes.",
			},
			{
				title: "Manual fallback",
				body: "Pick by grid position without a scan — mission pickup only.",
			},
			{
				title: "Goals & progress",
				body: "Set per-house targets; mission claims update progress without re-scanning.",
			},
		],
	},
	{
		title: "Missions & rewards",
		description: "Choose targets and know what you are farming.",
		items: [
			{
				title: "Mission picker",
				body: "Per-house rewards, progress, and specialization missions in one panel.",
			},
			{
				title: "Reward Hunter",
				body: "Hunt specific items — diamonds on the grid when they appear.",
			},
			{
				title: "Reward tracker",
				body: "Earned tiers, auto swatch at 14k, Claim after in-game pickup.",
			},
		],
	},
	{
		title: "Automation",
		description: "Less menu time, more time in the world.",
		items: [
			{
				title: "Guild refresh",
				body: "Abandons the guild to clear actives and reroll offers until your targets land, then accepts them.",
			},
			{
				title: "AutoRun",
				body: "Claims finished missions and starts the next pick loop for you. Optionally stops when mnemonic recollections run out.",
			},
			{
				title: "Overlay",
				body: "Run timers, stats, mnemonic counter, and goal or ready notifications.",
			},
		],
	},
	{
		title: "Your data",
		description: "Multiple characters, one app folder.",
		items: [
			{
				title: "Profiles",
				body: "Separate picks, goals, hunts, and stats per character.",
			},
			{
				title: "Statistics",
				body: "Completes, totals, and availability per mission.",
			},
			{
				title: "Backup",
				body: "Copy profile and settings JSON from the app folder to save progress.",
			},
		],
	},
];
