import { cn } from "@/lib/utilities";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa";
import { timeline } from "@/data/texts/timeline";

type TimelineProps = {};

const Timeline: FC<TimelineProps> = ({}) => {
	//Reverse sort. Newest date first
	const sorted = timeline.sort((a, b) => b.date.getTime() - a.date.getTime());

	return (
		<ol className="relative border-s-4 border-accent list-none flex flex-col gap-4 w-full max-w-lg mx-auto border-dotted">
			{/* Display timeline events */}
			{sorted.map((item, index) => {
				return <TimelineItem key={`timeline_${index}`} data={item} />;
			})}
		</ol>
	);
};

export default Timeline;

type TimelineItemProps = {
	className?: string;
	data?: (typeof timeline)[0];
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
					"absolute h-6 w-6 -start-3.5 p-1 rounded-full text-white/75 ",
					className,
				)}
				style={{
					backgroundColor: data.color ? data.color : "#750E21",
				}}>
				{data.icon ? data.icon : <FaStar />}
			</div>
			<time className="mb-1 text-sm font-normal leading-none text-zinc-500">
				{data.dateText}
			</time>
			<h3 className="text-lg font-semibold ">{data.event}</h3>
			<p className="mb-4 font-normal text-sm">{data.details}</p>
		</li>
	);
};
