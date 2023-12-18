"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import Slide from "../awesome-reveal/Slide";

const MoveTop: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const show = useIsInViewport(ref);
	function moveToTop() {
		if (!document.documentElement) return;
		document.documentElement.scrollTo({ top: 50, behavior: "smooth" });
	}

	return (
		<div className="absolute -top-10 right-2" ref={ref}>
			{show && (
				<Slide direction="right" delay={500} duration={200}>
					<button
						type="button"
						onClick={moveToTop}
						className="flex flex-row gap-1 items-center text-xs bg-white border px-1 rounded-md h-8 shadow-md font-medium text-primary-100 opacity-50 hover:opacity-100 ">
						<GoMoveToTop />
						Move To Top
					</button>
				</Slide>
			)}
		</div>
	);
};

export default MoveTop;

function useIsInViewport(ref: React.RefObject<HTMLDivElement>) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			typeof document !== "undefined" &&
			ref.current !== null
		) {
			const observer = new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting),
			);

			observer.observe(ref.current);

			return () => {
				if (observer) observer.disconnect();
			};
		}
	}, [ref]);

	return isIntersecting;
}
