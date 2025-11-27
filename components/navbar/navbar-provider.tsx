"use client";

import { usePathname } from "next/navigation";
import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useEffectEvent,
	useState,
} from "react";

type NavbarCtx = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

const navbarContext = createContext<NavbarCtx>({
	isOpen: false,
	setIsOpen: () => {},
});

export default function NavbarProvider({ children }: PropsWithChildren) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const closeNavbar = useEffectEvent(() => {
		setOpen(false);
	});

	useEffect(() => {
		closeNavbar();
	}, [pathname]);

	return (
		<navbarContext.Provider value={{ isOpen: open, setIsOpen: setOpen }}>
			{children}
		</navbarContext.Provider>
	);
}

export function useNavbarContext(): NavbarCtx {
	const navbarCtx = useContext(navbarContext);
	if (!navbarCtx) {
		throw new Error("useNavbarContext must be used within a NavbarProvider");
	}
	return navbarCtx;
}
