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

export function median(param: number[]) {
	if (param.length === 0) return 0;

	const total = param.reduce((previous, current, i) => {
		return previous + current;
	}, 0);

	return total / param.length;
}

/**
 * Generate a new color shade using the input color and magnitude
 * @param hexColor 6 letter hex color code ex: #ffcc00 or ffcc00
 * @param magnitude positive numbers will generate a lighter shade whereas negative ones will result in darker ones
 * @returns calculated new hex color code including # ex: #cc00cc
 */
export function colorSHade(hexColor: string, magnitude: number) {
	hexColor = hexColor.replace(`#`, ``);
	if (hexColor.length === 6) {
		const decimalColor = parseInt(hexColor, 16);

		let r = (decimalColor >> 16) + magnitude;
		r > 255 && (r = 255);
		r < 0 && (r = 0);
		let g = (decimalColor & 0x0000ff) + magnitude;
		g > 255 && (g = 255);
		g < 0 && (g = 0);
		let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
		b > 255 && (b = 255);
		b < 0 && (b = 0);

		return `#${(g | (b << 8) | (r << 16)).toString(16).padEnd(6, "0")}`;
	} else {
		return hexColor;
	}
}
