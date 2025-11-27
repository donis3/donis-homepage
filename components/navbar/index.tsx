"use client";

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import NavLink from "./nav-link";
import { useNavbarContext } from "./navbar-provider";
import { ThemeToggle } from "./theme-toggle";
import logo from "./logo.png";

type NavigationLink = {
	href: string;
	label: string;
};

const links: NavigationLink[] = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const { isOpen, setIsOpen } = useNavbarContext();
	const pathname = usePathname();

	return (
		<>
			<nav className="fixed top-0 z-50 flex h-(--navbar-height) w-full max-w-dvw items-center justify-center overflow-x-hidden border-b border-neutral-900/75 bg-neutral-900/75 px-2 py-3 backdrop-blur-sm md:px-4">
				<div className="flex max-w-4xl flex-1 items-center justify-between">
					<Link href="/" className="flex items-center">
						<Image
							src={logo}
							alt="Donis.Dev Logo"
							className="max-h-8 w-auto"
							loading="eager"
						/>
					</Link>
					<div className="flex items-center space-x-2 md:space-x-4">
						<ThemeToggle className="w-fit" />
						<Button
							type="button"
							variant="ghost-light"
							onClick={() => setIsOpen(true)}
							className=""
						>
							<MenuIcon />
						</Button>
					</div>
				</div>
			</nav>

			<Drawer
				open={isOpen}
				onOpenChange={setIsOpen}
				direction="left"
				autoFocus={isOpen}
			>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Donis.Dev</DrawerTitle>
						<DrawerDescription className="relative pr-8 text-xs opacity-50">
							<span>Full stack Developer</span>
						</DrawerDescription>
					</DrawerHeader>
					<div className="space-y-1 px-4 py-2">
						{links.map((link) => (
							<NavLink
								{...link}
								key={`nav-link-${link.href}`}
								currentPath={pathname}
							/>
						))}
					</div>
					<DrawerFooter
						className="flex flex-row justify-end"
						hidden
					></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
