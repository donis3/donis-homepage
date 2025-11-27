"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import useSound from "use-sound";
import { useIsClient } from "usehooks-ts";
import { Spinner } from "../ui/spinner";

export function ThemeToggle({ className }: { className?: string }) {
	const { setTheme, themes, theme } = useTheme();
	const isClient = useIsClient();

	const [playLight] = useSound("/assets/sfx/switch-on.mp3", {
		id: "theme-toggle-sound",
		volume: 0.5,
		interrupt: true,
		soundEnabled: isClient,
	});
	const [playDark] = useSound("/assets/sfx/switch-off.mp3", {
		id: "theme-toggle-sound",
		volume: 0.5,
		interrupt: true,
		soundEnabled: isClient,
	});

	const onChange = useCallback(async () => {
		if (!theme || !isClient) return;
		const currentIndex = themes.indexOf(theme);
		const nextIndex = currentIndex < themes.length - 1 ? currentIndex + 1 : 0;
		const nextTheme = themes[nextIndex];
		setTheme(nextTheme);
		if (nextTheme === "dark") {
			playDark();
		} else {
			playLight();
		}
	}, [theme, isClient, themes, setTheme, playDark, playLight]);

	return (
		<Button
			variant={"ghost-light"}
			type="button"
			onClick={onChange}
			disabled={!isClient}
			className={cn("size-auto p-1! [&>svg]:size-5!", className)}
		>
			{isClient ? (
				<>
					{theme === "system" && <SunMoonIcon />}
					{theme === "light" && <SunIcon />}
					{theme === "dark" && <MoonIcon />}
				</>
			) : (
				<Spinner />
			)}
		</Button>
	);
}
