import Image from "next/image";
import Link from "next/link";

export default function ComingSoonPage() {
	return (
		<div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-gray-100">
			<div className="text-center">
				<Image
					src="/assets/common/logo-light.png"
					alt="App Logo"
					width={300}
					height={150}
					className="mx-auto mb-8"
				/>
			</div>
			<nav className="text-center">
				<Link
					href={"/projects"}
					className="text-xl font-semibold text-blue-600 hover:underline"
				>
					Go to Projects Page
				</Link>
			</nav>
		</div>
	);
}
