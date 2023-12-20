"use client";
import { cn } from "@/lib/utilities";
import React, { FC, useEffect, useRef, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

type CarouselProps = {
	children: React.ReactNode;
	/**
	 * Color the right/left buttons underneath
	 */
	buttonTheme?: "dark" | "light";
	/**
	 * Match the background color of your carousel for a fade-out effect.
	 * requires a text color. Ex: text-red-400
	 */
	fadeClass?: string;
};

/**
 * Carousel Component
 */
const Carousel: FC<CarouselProps> = ({
	children,
	buttonTheme = "light",
	fadeClass,
}) => {
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
		<div
			className={cn(
				"relative z-0 ",
				fadeClass && "w-[calc(100%+60px)]  ml-[-30px]  ",
			)}>
			{/* If a fade class provided, show edge faders */}
			{fadeClass && (
				<>
					{/* Left Edge */}
					<div
						className={cn(
							"top-0 left-0 h-full w-[30px] absolute from-current  to-transparent bg-gradient-to-r z-20 pointer-events-none",
							fadeClass,
						)}></div>
					{/* Right Edge */}
					<div
						className={cn(
							"top-0 right-0 h-full w-[30px]  absolute to-current  from-transparent bg-gradient-to-r z-20 pointer-events-none ",
							fadeClass,
						)}></div>
				</>
			)}
			<div
				ref={ref}
				className={cn(
					"grid auto-cols-max grid-flow-col items-stretch justify-items-stretch gap-8 overflow-x-scroll  snap-y mt-5 transition-transform duration-500",
					" select-none snap-x snap-mandatory",
					"no-scrollbar",
					fadeClass && "px-[30px] ",
				)}>
				{children}
			</div>
			<div className="flex flex-row justify-center gap-3 mt-4 items-center">
				<button
					type="button"
					aria-label="Scroll back to previous"
					className={cn(
						"p-2 ",
						buttonTheme === "dark" &&
							"text-white/50 hover:text-white",
						buttonTheme === "light" &&
							"text-primary-100/20 hover:text-primary-100",
					)}
					onClick={scrollLeft}>
					<CiCircleChevLeft className="h-10 w-10" />
				</button>

				<button
					type="button"
					aria-label="Scroll to Next"
					className={cn(
						"p-2 ",
						buttonTheme === "dark" &&
							"text-white/50 hover:text-white",
						buttonTheme === "light" &&
							"text-primary-100/20 hover:text-primary-100",
					)}
					onClick={scrollRight}>
					<CiCircleChevRight className="h-10 w-10" />
				</button>
			</div>
		</div>
	);
};

type CarouselItemProps = {
	children: React.ReactNode;
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

const CarouselItem: FC<CarouselItemProps> = ({ children, ...props }) => {
	return (
		<div
			{...props}
			className={cn(
				"transition-all snap-always snap-center duration-300 overflow-x-auto max-w-[320px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]",
				props.className,
			)}>
			{children}
		</div>
	);
};

export { CarouselItem };

export default Carousel;
