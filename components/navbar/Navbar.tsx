"use client";
import { median } from "@/lib/utilities";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
	const headerRef = useRef<HTMLDivElement>(null);
	const yOffsetRef = useRef(0); // last y position
	const lastMovementDeltasRef = useRef<number[]>([0]); //Save last 10 y position changes in an array

	useEffect(() => {
		//Get initial y
		if (window) yOffsetRef.current = window.scrollY;

		//Handle scroll
		const handleScroll = () => {
			//Get movement change
			const delta = window.scrollY - yOffsetRef.current;
			//Save current y pos
			yOffsetRef.current = window.scrollY;
			//Update latest movements array
			if (delta !== 0) {
				const arrLength = lastMovementDeltasRef.current.unshift(delta);
				if (arrLength >= 10) {
					//Keep the array at 10
					lastMovementDeltasRef.current =
						lastMovementDeltasRef.current.slice(0, 10);
				}
			}

			const isScrollingUp = median(lastMovementDeltasRef.current) < -2;
			if (isScrollingUp && headerRef.current) {
				//Show navbar scrolling up
				headerRef.current.style.transform = "translate(0, 0)";
			} else if (
				!isScrollingUp &&
				headerRef.current &&
				yOffsetRef.current > 400
			) {
				//Hide navbar scrolling down & at least 400px down
				headerRef.current.style.transform = "translate(0, -100px)";
			}

			//Handle navbar background visibility
			if (window.scrollY > 10 && headerRef.current) {
				headerRef.current.classList.toggle("bg-muted-300", true);
				headerRef.current.classList.toggle("bg-transparent", false);
				headerRef.current.classList.toggle("text-white/70", false);
			} else if (window.scrollY <= 10 && headerRef.current) {
				headerRef.current.classList.toggle("bg-muted", false);
				headerRef.current.classList.toggle("bg-transparent", true);
				headerRef.current.classList.toggle("text-white/70", true);
			}
		};

		//Run once on load
		handleScroll();

		//Add listener
		document.addEventListener("scroll", handleScroll);

		//Remove listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
