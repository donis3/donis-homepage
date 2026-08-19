"use client";

import { usePathname } from "next/navigation";
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
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
	const pathname = usePathname();
	const [nav, setNav] = useState({ pathname, open: false });
	const open = nav.pathname === pathname ? nav.open : false;
	const setIsOpen = useCallback(
		(isOpen: boolean) => setNav({ pathname, open: isOpen }),
		[pathname],
	);

	return (
		<navbarContext.Provider
			value={{
				isOpen: open,
				setIsOpen,
			}}
		>
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
