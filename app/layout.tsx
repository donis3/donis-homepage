import type { Metadata } from "next";
import "./_styles/globals.css";
import { rubik } from "./_fonts/fonts";
import Navbar from "@/components/navbar/Navbar";

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
			<body className="bg-gradient-to-tr from-indigo-100 via-red-100 to-yellow-100 font-sans">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
