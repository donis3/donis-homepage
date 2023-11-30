import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine tailwind classes with object support
 * @param inputs
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/* For log function to work, there must be env variable for build mode in the client side
So we need this option in next.config
env: {
	build_mode:
		process.env.NODE_ENV === "development"
			? "development"
			: "production",
},
*/

/**
 * Console.log wrapper that'll be muted in production environment
 * @param params
 */
export function log(...params: any[]) {
	if (process.env.build_mode === "development") console.log(...params);
}
