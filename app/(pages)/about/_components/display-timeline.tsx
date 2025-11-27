import { timeline, type TimelineItem } from "@/core/timeline";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa";

export default function DisplayTimeline() {
	//Reverse sort. Newest date first
	const sorted = timeline.sort((a, b) => b.date.getTime() - a.date.getTime());

	return (
		<ol className="border-accent relative mx-auto flex w-full max-w-sm md:dark:bg-muted/20 md:bg-muted/40 rounded-lg rounded-l-none list-none flex-col gap-4 border-s-4 border-dotted">
			{/* Display timeline events */}
			{sorted.map((item, index) => {
				return <TimelineItem key={`timeline_${index}`} data={item} />;
			})}
		</ol>
	);
}

type TimelineItemProps = {
	className?: string;
	data?: TimelineItem;
};
/**
 * Timeline Item that expects a data object with icon, color, date, dateText, event, details
 * @param param0
 * @returns
 */
const TimelineItem: FC<TimelineItemProps> = ({ className, data }) => {
	if (!data) return <></>;

	return (
		<li className="ms-4">
			<div
				className={cn(
					"absolute -start-3.5 h-6 w-6 rounded-full p-1 text-white/75",
					className,
				)}
				style={{
					backgroundColor: data.color ? data.color : "#750E21",
				}}
			>
				{data.icon ? data.icon : <FaStar />}
			</div>
			<time className="mb-1 text-sm leading-none font-normal text-muted-foreground/60">
				{data.dateText}
			</time>
			<h3 className="text-lg font-semibold text-foreground">{data.event}</h3>
			<p className="mb-4 text-sm font-normal text-muted-foreground dark:text-muted-foreground/60">{data.details}</p>
		</li>
	);
};
