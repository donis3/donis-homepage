"use client";
import useScrollDir, { ScrollData } from "@/hooks/useScrollDir";
import { median } from "@/lib/utilities";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
	useScrollDir(navbarScrollHandler);
	const headerRef = useRef<HTMLDivElement>(null);

	function navbarScrollHandler(data: ScrollData) {
		// Validate header is loaded
		if (!headerRef.current) return;

		//Handle hide / show depending on direction
		if (data.directionY === "down" && data.y > 400) {
			//Hide navbar if we are at least 400px away from the top and going down
			headerRef.current.style.transform = "translate(0, -100px)";
		} else if (data.directionY === "up") {
			//Show navbar when moving up
			headerRef.current.style.transform = "translate(0, 0)";
		}
		//Handle background color visibility
		if (data.y > 50) {
			headerRef.current.classList.toggle("bg-muted-300", true);
			headerRef.current.classList.toggle("bg-transparent", false);
			headerRef.current.classList.toggle("text-white/70", false);
		} else if (data.y <= 50) {
			headerRef.current.classList.toggle("bg-muted", false);
			headerRef.current.classList.toggle("bg-transparent", true);
			headerRef.current.classList.toggle("text-white/70", true);
		}
	}

	return (
		<header
			className=" bg-transparent text-white/70 fixed top-0 left-0 w-full h-[var(--navbar-h)] flex items-center justify-center z-50 transition-all duration-300"
			ref={headerRef}>
			<div className="container flex flex-wrap items-center justify-between  p-4 overflow-x-auto">
				<figure className="text-xl font-bold">Donis3.com</figure>
				<nav className="font-normal text-base flex-1 flex flex-row justify-end gap-4 whitespace-nowrap">
					<Link href="/">About Me</Link>
					<Link href="/">Blog</Link>
					<Link href="/">Contact</Link>
				</nav>
			</div>
		</header>
	);
}
