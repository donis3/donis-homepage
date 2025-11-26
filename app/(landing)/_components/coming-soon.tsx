import Image from "next/image";

export default function ComingSoon() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="text-center">
				<Image
					src="/assets/common/logo-light.png"
					alt="App Logo"
					width={300}
					height={150}
					className="mx-auto mb-8"
				/>
				<h1 className="text-6xl font-bold text-gray-800">Coming Soon</h1>
				<p className="mt-4 text-xl text-gray-600">
					We&apos;re working hard to bring you something amazing. Stay
					tuned!
				</p>
			</div>
		</div>
	);
}
