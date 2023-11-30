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
			<body>{children}</body>
		</html>
	);
}
