"use client";
import { cn } from "@/lib/utilities";
import React, { FC, useEffect, useRef, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaChevronCircleLeft } from "react-icons/fa";

type CarouselProps = {
	children: React.ReactNode;
};

const Carousel: FC<CarouselProps> = ({ children }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState<number>(100);

	//Get the first child width from the carousel after mount.
	useEffect(() => {
		if (!ref.current) return;
		if (ref.current.firstElementChild) {
			setItemWidth(ref.current.firstElementChild.clientWidth);
		}
	}, []);

	/**
	 * Scroll the carousel towards right by itemWidth pixels
	 * @returns
	 */
	function scrollRight() {
		if (!ref.current) return;

		ref.current.scroll({
			behavior: "smooth",
			left: ref.current.scrollLeft + itemWidth,
		});
	}

	/**
	 * Scroll the carousel towards left by itemWidth pixels
	 * @returns
	 */
	function scrollLeft() {
		if (!ref.current) return;
		ref.current.scroll({
			behavior: "smooth",
			left: ref.current.scrollLeft - itemWidth,
		});
	}

	return (
		<div className="relative">
			<div
				ref={ref}
				className={cn(
					"grid auto-cols-min grid-flow-col gap-8 overflow-x-scroll  snap-y mt-5 transition-transform duration-500",
					"touch-pan-x select-none snap-x snap-mandatory",
					"no-scrollbar",
				)}>
				{children}
			</div>
			<div className="flex flex-row justify-center gap-3 mt-4 items-center">
				<button
					type="button"
					className="p-2 text-primary-100/20 hover:text-primary-100"
					onClick={scrollLeft}>
					<CiCircleChevLeft className="h-10 w-10" />
				</button>

				<button
					type="button"
					className="p-2 text-primary-100/20 hover:text-primary-100"
					onClick={scrollRight}>
					<CiCircleChevRight className="h-10 w-10" />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
