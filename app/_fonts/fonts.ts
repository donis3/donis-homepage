import localFont from "next/font/local";

const rubik = localFont({
	src: [
		{
			path: "./rubik/Rubik-VariableFont_wght.ttf",
			weight: "300 900", // Variable font needs a range of weights. Not strictly specified
			style: "normal",
		},
		{
			path: "./rubik/Rubik-Italic-VariableFont_wght.ttf",
			weight: "300 900",
			style: "italic",
		},
	],
	variable: "--font-rubik",
	display: "swap",
});

export { rubik };
