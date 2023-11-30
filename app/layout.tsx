import type { Metadata } from "next";
import "./styles/globals.css";

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
		<html lang="en">
			<body className="bg-gradient-to-tr from-indigo-100 via-red-100 to-yellow-100">
				{children}
			</body>
		</html>
	);
}
