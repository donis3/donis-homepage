import GlowingButton from "@/components/effects/GlowingButton";
import TextGradient from "@/components/effects/TextGradient";
import { cn } from "@/lib/utilities";
import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

type ProjectCardProps = {
	index: number;
	className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function ProjectCard({
	index,
	className,
	...props
}: ProjectCardProps) {
	return (
		<div
			key={index}
			className={cn(
				"bg-gradient-to-t from-muted-200  to-muted-100 text-white rounded-lg shadow-md max-w-xs overflow-hidden",
				className,
			)}
			{...props}>
			<div className=" overflow-hidden">
				<img
					src="./assets/projects/costotus/cover.jpg"
					alt="project cover"
					className="rounded-t-lg h-32 w-full"
				/>
			</div>
			<div className="p-4 overflow-x-hidden overflow-y-auto no-scrollbar h-auto">
				<div className="flex flex-row gap-2 items-center justify-between">
					<h4 className="mb-2 text-xl font-medium leading-tight flex-1">
						Project Title
					</h4>
					<span className="text-white/30 text-sm">2018</span>
				</div>
				<p className="my-8 text-base text-muted-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Natus, architecto doloremque saepe possimus dolores autem
					ipsam illo esse voluptates error non, ab optio consequuntur
					dicta animi sit? Itaque, porro sequi.
				</p>
				<h6 className="border-b border-muted-200 border-opacity-70 text-white/20 text-sm mt-4 ">
					Tech
				</h6>
				<ul className="py-2 text-sm font-light flex flex-wrap items-center gap-2 font-mono text-white/40">
					<li>PHP</li>
					<li>JQuery</li>
				</ul>
				<div className="flex justify-center mt-4">
					<GlowingButton
						className="bg-muted-100 text-white hover:bg-muted-200 py-4"
						variant="purple">
						View Details
					</GlowingButton>
				</div>
			</div>
		</div>
	);
}
