import Carousel, { CarouselItem } from "@/components/carousel/Carousel";
import React, { FC } from "react";
import GlowingButton from "@/components/effects/GlowingButton";
import { cn } from "@/lib/utilities";
import Fade from "@/components/awesome-reveal/Fade";
import Link from "next/link";
import { ProjectType } from "@/data/ProjectType";
import useProjects from "@/data/useProjects";

type ProjectSliderProps = {};

const ProjectSlider: FC<ProjectSliderProps> = async () => {
	const { getAllProjectsSorted } = useProjects();
	const projects = await getAllProjectsSorted();

	if (!projects.length) {
		return (
			<div>
				<h2 className="font-medium text-3xl mb-2">Projects</h2>
				<p className="font-normal text-base leading-tight opacity-70">
					There currently are no projects to show. Check back soon!
				</p>
			</div>
		);
	}

	return (
		<div>
			<Fade cascade damping={0.3} triggerOnce>
				<Link href={"/projects"}>
					<h2 className="font-medium text-3xl mb-4">Projects</h2>
				</Link>
				<p className="font-normal text-base leading-tight opacity-70 pb-4">
					Some of the projects I've worked on. Visit to my{" "}
					<Link
						href={process.env.NEXT_PUBLIC_DEV_GITHUB ?? ""}
						className="underline"
						target="_blank">
						github profile
					</Link>{" "}
					to view more.
				</p>

				<Carousel buttonTheme="dark" fadeClass="text-primary-200">
					{projects.map((project) => {
						return <ProjectItem key={project.id} data={project} />;
					})}
				</Carousel>
			</Fade>
		</div>
	);
};

export default ProjectSlider;

type ProjectItemProps = {
	data?: ProjectType;
};

const ProjectItem: FC<ProjectItemProps> = ({ data }) => {
	const { getImages } = useProjects();
	if (!data) return <></>;
	const images = getImages(data);
	const coverImageUrl =
		images && images.length > 0
			? images[0]
			: "/assets/projects/project-placeholder.jpg";

	return (
		<CarouselItem
			className={cn(
				"bg-gradient-to-br from-zinc-100 to-slate-300 rounded-lg shadow-md w-[300px] md:w-[450px] text-primary-100",
			)}>
			<div className=" w-full h-full flex flex-col justify-between">
				<Link href={`/projects/${data.id}`}>
					<div
						className=" overflow-hidden rounded-t-lg h-32 w-full bg-cover bg-center "
						style={{
							backgroundImage: `url('${coverImageUrl}')`,
						}}></div>
				</Link>
				<div className="p-4 overflow-hidden no-scrollbar h-full w-full flex-1  flex flex-col justify-between">
					<div className="flex-1 ">
						<div className="flex flex-row gap-2 items-center justify-between">
							<h4 className="mb-2 text-xl font-medium leading-tight flex-1 overflow-hidden w-full whitespace-nowrap text-ellipsis pr-2">
								{data.title}
							</h4>
							<span className="text-sm text-primary-300">
								{data.year}
							</span>
						</div>
						<p className="my-8 text-base">{data.subtitle}</p>
						{data.tech.length > 0 && (
							<>
								<h6 className="border-b border-zinc-400 text-sm mt-4 opacity-60 ">
									Tech
								</h6>
								<ul className="py-2 text-sm font-light flex flex-wrap items-center gap-2 font-mono opacity-60">
									{data.tech.map((item, i) => (
										<li key={`${data.id}_tech_${i}`}>
											{item}
										</li>
									))}
								</ul>
							</>
						)}
					</div>
					<div className="flex flex-wrap items-center justify-center mt-4 gap-2">
						<Link href={`/projects/${data.id}`}>
							<GlowingButton
								className="from-muted-300 to-muted-100 bg-gradient-to-tr text-white hover:to-muted-200 py-4"
								variant="blue">
								View Details
							</GlowingButton>
						</Link>
						{data.link && (
							<Link
								href={data.link}
								target="_blank"
								className="p-3 rounded-full font-medium text-primary border border-primary hover:bg-primary-900">
								Visit Project
							</Link>
						)}
						{data.repo && (
							<Link
								href={data.repo}
								target="_blank"
								className="p-3 rounded-full font-medium text-purple-950 border border-purple-800 hover:bg-purple-100">
								Github Repo
							</Link>
						)}
					</div>
				</div>
			</div>
		</CarouselItem>
	);
};
