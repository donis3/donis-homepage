"use client";
import useScrollHandler, { ScrollData } from "@/hooks/useScrollHandler";
import Link from "next/link";
import { useRef } from "react";
import { menuItems } from "@/data/texts/shared";

export default function Navbar() {
	useScrollHandler(handleScroll, {
		updateInterval: 100,
	});
	const headerRef = useRef<HTMLDivElement>(null);

	//Navbar Behavior
	const navbarActions = {
		showBg: () => {
			if (!headerRef.current) return;
			headerRef.current.classList.toggle("bg-muted-300", true);
			headerRef.current.classList.toggle("shadow-md", true);
			headerRef.current.classList.toggle("bg-transparent", false);
			headerRef.current.classList.toggle("text-white/70", false);
		},
		hideBg: () => {
			if (!headerRef.current) return;
			headerRef.current.classList.toggle("bg-muted-300", false);
			headerRef.current.classList.toggle("shadow-md", false);
			headerRef.current.classList.toggle("bg-transparent", true);
			headerRef.current.classList.toggle("text-white/70", true);
		},
		hide: () => {
			if (!headerRef.current) return;
			headerRef.current.style.transform = "translate(0, -100px)";
		},
		show: () => {
			if (!headerRef.current) return;
			headerRef.current.style.transform = "translate(0, 0)";
		},
	};

	/**
	 * Scroll event callback
	 * @param data
	 */
	function handleScroll(data: ScrollData) {
		if (data.atTop || data.y < 10) {
			//If at top of the page, hide bg color
			navbarActions.hideBg();
		} else if (data.y >= 10 && !data.atTop) {
			//If not at the top, show a background color
			navbarActions.showBg();
		}

		if (data.y > 400 && data.directionY === "down" && !data.atTop) {
			//If scrolling down, hide the navbar
			navbarActions.hide();
		} else if (data.directionY === "up" || data.atTop) {
			//If scrolling up, show the navbar
			navbarActions.show();
		}
	}

	return (
		<header
			className=" bg-transparent text-white/70 fixed top-0 left-0 w-full h-[var(--navbar-h)] flex items-center justify-center z-50 transition-all duration-300 pt-2 md:pt-0"
			ref={headerRef}>
			<div className="container flex flex-wrap items-center justify-center md:justify-between   gap-1 md:gap-2 px-4 overflow-x-auto ">
				<Link href="/" className="active:-translate-y-0.5 py-1 px-2 md:py-2  ">
					<img
						src="/assets/donis-dev-logo.png"
						alt="Donis.dev logo"
						className="h-9 opacity-75 hover:opacity-100 transition-opacity"
					/>
				</Link>
				<nav className="font-normal text-base flex-1 flex flex-row justify-center md:justify-end gap-4 whitespace-nowrap">
					{menuItems.map((item, i) => {
						return (
							<MenuLink href={item.href} key={`menu_item_${i}`}>
								{item.text}
							</MenuLink>
						);
					})}
				</nav>
			</div>
		</header>
	);
}

function MenuLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="hover:text-white active:text-white active:-translate-y-0.5 py-2 ">
			{children}
		</Link>
	);
}
