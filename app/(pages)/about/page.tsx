import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-white">
			<div className="max-w-3xl p-8">
				<h1 className="mb-6 text-4xl font-bold text-gray-900">About Us</h1>
				<p className="mb-4 text-lg text-gray-700">
					Welcome to our application! We are dedicated to providing the
					best experience for our users. Our team is passionate about
					building innovative solutions that make a difference.
				</p>
				<p className="mb-4 text-lg text-gray-700">
					Our mission is to create a platform that is both user-friendly
					and efficient. We believe in continuous improvement and are
					always looking for ways to enhance our services.
				</p>
				<p className="text-lg text-gray-700">
					Thank you for being a part of our journey. We look forward to
					serving you and growing together!
				</p>
			</div>
		</div>
	);
}
