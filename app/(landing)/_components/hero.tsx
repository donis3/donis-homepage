"use client";
import { getSocialByLabel } from "@/core/socials";
import {
	DownloadIcon,
	FoldersIcon,
	MouseIcon
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
	LuArrowRight
} from "react-icons/lu";

export default function Hero() {
	const githubSocial = getSocialByLabel("GitHub");
	const avatarVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, y: [0, -4, 0] },
	};

	return (
		<section className="relative z-0 flex min-h-dvh items-center justify-center px-4 py-16">
			<div className="relative z-10 container mx-auto mt-(--navbar-height) max-w-3xl text-center">
				<div className="mb-2 md:mb-8">
					<motion.div
						className="mb-4 flex justify-center"
						initial="hidden"
						animate="visible"
						variants={avatarVariants}
						transition={{
							duration: 0.6,
							ease: "easeOut",
							y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
						}}
					>
						<Image
							src="/assets/images/donis-sm.jpg"
							alt="Deniz's avatar"
							width={96}
							height={96}
							className="size-20 md:size-28 rounded-full border-2 border-white/20 object-cover shadow-lg"
						/>
					</motion.div>
					<h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
						Hi, I&apos;m{" "}
						<span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Deniz
						</span>
					</h1>
					<p className="mx-auto mb-6 max-w-2xl text-base text-gray-300 md:text-xl">
						Fullstack Developer crafting modern web applications with
						passion and precision. Specializing in React, Next.js, and
						scalable backend solutions.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 max-w-md mx-auto justify-center mb-6 items-center">
					<Link
						href="/projects"
						className="inline-flex justify-between items-center gap-2 rounded-lg bg-linear-to-r from-yellow-400 to-orange-500 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-400/25 transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 hover:shadow-xl hover:shadow-yellow-400/40"
					>
						View My Work
						<FoldersIcon className="h-4 w-4" />
					</Link>
					<Link
						href={"/about"}
						className="inline-flex items-center justify-between gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
					>
						About Me
						<LuArrowRight className="size-4" />
					</Link>
				</div>
				<div className="mt-6 flex justify-center gap-4 items-center">
					{githubSocial && githubSocial.type === "link" && (
						<a
							href={githubSocial.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-sm tracking-tight text-white/70 transition-colors hover:text-white"
						>
							<githubSocial.icon className="size-4" />
							{githubSocial.label}
						</a>
					)}
					<a
						href={"/documents/deniz_ozkan_resume.pdf"}
						target="_blank"
						rel="noopener noreferrer"
						download={true}
						className="inline-flex items-center gap-1 text-sm tracking-tight text-white/70 transition-colors hover:text-white"
					>
						<DownloadIcon className="size-4" />
						Resume
					</a>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-linear-to-b from-cyan-800 via-cyan-950 to-black/90 dark:from-cyan-700/70 dark:via-black/60 dark:to-black/90">
				<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[14px_24px]" />
			</div>
			<ScrollDownIndicator />
		</section>
	);
}

function ScrollDownIndicator() {
	"use client";
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);
	const translateY = useTransform(scrollY, [0, 100], [0, 20]);

	return (
		<motion.div
			className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
			style={{ opacity, translateY }}
			animate={{
				y: [0, -8, 0],
			}}
			transition={{
				duration: 1.5,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			onClick={() => {
				window.scrollTo({
					top: window.innerHeight,
					behavior: "smooth",
				});
			}}
		>
			<MouseIcon className="stroke-white/50" />
		</motion.div>
	);
}
