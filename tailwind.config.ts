import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1d3557",
					100: "#060b12",
					200: "#0c1623",
					300: "#122035",
					400: "#172b46",
					500: "#1d3557",
					600: "#315a93",
					700: "#4e7fc4",
					800: "#89aad8",
					900: "#c4d4eb",
				},
				accent: {
					DEFAULT: "#e63946",
					100: "#33060a",
					200: "#660d14",
					300: "#99131e",
					400: "#cb1928",
					500: "#e63946",
					600: "#eb5f6b",
					700: "#f08790",
					800: "#f5afb5",
					900: "#fad7da",
				},
				light: {
					DEFAULT: "#f1faee",
					100: "#234c16",
					200: "#47982c",
					300: "#75ce57",
					400: "#b4e4a3",
					500: "#f1faee",
					600: "#f5fbf2",
					700: "#f7fcf6",
					800: "#fafdf9",
					900: "#fcfefc",
				},
				muted: {
					DEFAULT: "#a8dadc",
					100: "#163637",
					200: "#2c6d6f",
					300: "#42a3a6",
					400: "#70c3c6",
					500: "#a8dadc",
					600: "#b9e2e3",
					700: "#cae9ea",
					800: "#dcf0f1",
					900: "#edf8f8",
				},
				secondary: {
					DEFAULT: "#457b9d",
					100: "#0e181f",
					200: "#1b313e",
					300: "#29495e",
					400: "#37627d",
					500: "#457b9d",
					600: "#6097b9",
					700: "#88b1cb",
					800: "#b0cbdc",
					900: "#d7e5ee",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				"text-gradient": "text-gradient 1.5s linear infinite",
				"text-gradient-slow": "text-gradient 5s linear infinite",
			},
			keyframes: {
				"text-gradient": {
					to: {
						backgroundPosition: "200% center",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
