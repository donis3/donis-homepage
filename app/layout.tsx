import type { Metadata } from "next";
import "./_styles/globals.css";
import { rubik } from "./_fonts/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ImageModal from "@/components/img-modal/ImageModal";
import ImageModalProvider from "@/components/img-modal/ImageContext";

export const metadata: Metadata = {
	title: "Donis3.com - Dony the Dev",
	description: "A developers personal website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={rubik.variable}>
			<ImageModalProvider>
				<body className="bg-primary-100 font-sans dark scroll-smooth">
					<Navbar />
					<ImageModal />
					<div className="flex flex-col justify-between min-h-dscreen w-full overflow-x-hidden">
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</body>
			</ImageModalProvider>
		</html>
	);
}
