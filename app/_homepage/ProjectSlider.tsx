import Carousel, { CarouselItem } from "@/components/carousel/Carousel";
import React, { FC } from "react";
import GlowingButton from "@/components/effects/GlowingButton";
import { cn } from "@/lib/utilities";
import Fade from "@/components/awesome-reveal/Fade";

type ProjectSliderProps = {};

const ProjectSlider: FC<ProjectSliderProps> = () => {
	return (
		<div>
			<Fade cascade damping={0.3} triggerOnce>
				<h2 className="font-medium text-3xl mb-2">Projects</h2>
				<p className="font-normal text-base leading-tight opacity-70">
					Some of the projects I've been working on.
				</p>

				<Carousel buttonTheme="dark" fadeClass="text-primary-200">
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
				</Carousel>
			</Fade>
		</div>
	);
};

export default ProjectSlider;

type ProjectItemProps = {};

const ProjectItem: FC<ProjectItemProps> = () => {
	return (
		<CarouselItem
			className={cn(
				"bg-gradient-to-br from-zinc-100 to-slate-300 rounded-lg shadow-md w-[300px] md:w-[450px] text-primary-100",
			)}>
			<div
				className=" overflow-hidden rounded-t-lg h-32 w-full bg-cover bg-center"
				style={{
					backgroundImage:
						"url('./assets/projects/costotus/cover.jpg')",
				}}></div>
			<div className="p-4 overflow-x-hidden overflow-y-auto no-scrollbar h-auto w-full">
				<div className="flex flex-row gap-2 items-center justify-between">
					<h4 className="mb-2 text-xl font-medium leading-tight flex-1">
						Project Title
					</h4>
					<span className="text-sm text-primary-300">2018</span>
				</div>
				<p className="my-8 text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Natus, architecto doloremque saepe possimus dolores autem
					ipsam illo esse voluptates error non, ab optio consequuntur
					dicta animi sit? Itaque, porro sequi.
				</p>
				<h6 className="border-b border-zinc-400 text-sm mt-4 opacity-60 ">
					Tech
				</h6>
				<ul className="py-2 text-sm font-light flex flex-wrap items-center gap-2 font-mono opacity-60">
					<li>PHP</li>
					<li>JQuery</li>
				</ul>
				<div className="flex justify-center mt-4">
					<GlowingButton
						className="from-muted-300 to-muted-100 bg-gradient-to-tr text-white hover:to-muted-200 py-4"
						variant="blue">
						View Details
					</GlowingButton>
				</div>
			</div>
		</CarouselItem>
	);
};
