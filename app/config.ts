import { Metadata } from "next";

// export const defaultMetaData: Metadata = {
// 	icons: {
// 		icon: "/icons/favicon-16x16.png",
// 		shortcut: "/icons/favicon-32x32.png",
// 		apple: "/icons/apple-touch-icon.png",
// 	},
// };

export const defaultMetaData: Metadata = {
	icons: {
		icon: [
			{
				url: "/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/icons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/icons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/icons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],

		apple: [
			{
				url: "/icons/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},

	applicationName: "donis.dev",
	referrer: "origin-when-cross-origin",
	keywords: ["Developer", "Donis", "Deniz"],
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};