import type { Metadata, Viewport } from "next";
import "./_styles/globals.css";
import { rubik } from "./_fonts/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ImageModal from "@/components/img-modal/ImageModal";
import ImageModalProvider from "@/components/img-modal/ImageContext";
import { defaultMetaData } from "./config";

export const metadata: Metadata = {
	title: {
		template: "%s | Donis.dev",
		default: "Deniz Özkan | Donis.dev",
	},
	description:
		"Blog and Portfolio for Deniz Özkan, an aspiring fullstack web developer.",
	...defaultMetaData,
};

export const viewport: Viewport = {
	//Default theme color
	themeColor: "#172b46",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={rubik.variable}>
			<ImageModalProvider>
				<body
					className="font-sans dark scroll-smooth"
					style={{ backgroundColor: "#172b46" }}>
					<Navbar />
					<ImageModal />
					<div className="flex flex-col justify-between min-h-dscreen w-full overflow-x-hidden">
						<main className="flex-1 flex flex-col justify-between">
							{children}
						</main>
						<Footer />
					</div>
				</body>
			</ImageModalProvider>
		</html>
	);
}
