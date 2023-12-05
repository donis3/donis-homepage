"use client";
import { useRef, useState } from "react";

import { cn } from "@/lib/utilities";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

import Flicking from "@egjs/react-flicking";

import "@egjs/react-flicking/dist/flicking.css";

type ProjectsProps = {
	children: React.ReactNode;
};

export default function Projects({ children }: ProjectsProps) {
	const ref = useRef<Flicking>(null);
	const [atEdge, setEdge] = useState<"left" | "right" | null>("left");

	const prev = async () => {
		if (!ref.current) return;
		try {
			if (ref.current.index > 0) await ref.current.prev();
			if (ref.current.index === 0) setEdge("left");
			else setEdge(null);
		} catch (e) {
			//Flicker err
		}
	};
	const next = async () => {
		if (!ref.current) return;

		try {
			if (ref.current.index < ref.current.panelCount-1)
				await ref.current.next();
			if (ref.current.index >= ref.current.panelCount - 2)
				setEdge("right");
			else setEdge(null);
		} catch (e) {
			//Flicker err
		}
	};

	return (
		<div className="w-full">
			<div className="flex items-center justify-between gap-4 py-4">
				<h3 className="flex-1 text-lg font-bold leading-snug">
					PROJECTS
				</h3>
				<button
					type="button"
					onClick={prev}
					className={cn(
						atEdge === "left" ? "opacity-25" : "opacity-100",
					)}>
					<CiCircleChevLeft className="h-10 w-10" />
				</button>
				<button
					type="button"
					onClick={next}
					className={cn(
						atEdge === "right" ? "opacity-25" : "opacity-100",
					)}>
					<CiCircleChevRight className="h-10 w-10" />
				</button>
			</div>
			<Flicking
				ref={ref}
				cameraClass="gap-10"
				align={"prev"}
				adaptive={false}
				circular={false}
				moveType="freeScroll">
				{children}
				<div></div>
			</Flicking>
		</div>
	);
}
