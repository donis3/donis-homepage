import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function sleep(s: number) {
	return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
