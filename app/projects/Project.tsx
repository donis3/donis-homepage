import { ProjectType } from "@/data/ProjectType";
import { getProjectImages } from "@/data/projects";
import Link from "next/link";
import React, { FC } from "react";
import { FaCalendar } from "react-icons/fa";

type ProjectProps = {
	data?: ProjectType;
};

const Project: FC<ProjectProps> = ({ data }) => {
	if (!data) return <></>;
	const images = getProjectImages(data.id);

	return (
		<div className="bg-slate-100 w-full rounded-md shadow-md flex flex-col gap-4 group md:flex-row group">
			<div className="overflow-hidden w-full h-48 rounded-t-md md:w-1/3 lg:w-1/4 md:h-full md:rounded-none md:rounded-l-md">
				<div
					className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-all duration-700"
					style={{
						boxShadow: "inset black 0px 0px 10px -3px",
						backgroundImage: `url(${
							images
								? images[0]
								: "/assets/projects/project-placeholder.jpg"
						})`,
						backgroundSize: "cover",
					}}></div>
			</div>
			<div className="flex-1 p4 flex flex-col justify-center  gap-2 p-4 md:w-2/3 lg:w-3/4">
				<h3 className="font-semibold text-xl flex flex-row items-center justify-between w-full overflow-hidden">
					<span className="w-3/4 text-ellipsis whitespace-nowrap overflow-hidden">
						{data.title}
					</span>
					<span className="text-xs font-medium text-zinc-600 w-1/4 text-right">
						{data.year}
					</span>
				</h3>
				<p className="font-normal text-lg leading-snug tracking-tight">
					{data.subtitle}
				</p>
				<ul className="flex flex-row gap-2 text-sm tracking-tighter font-light text-zinc-600 border-t w-full pt-2 mt-2">
					{data.tech.map((item, i) => (
						<li key={`${data.id}_tech_${i}`}>{item}</li>
					))}
				</ul>

				<Link
					href={"/"}
					className="p-2 rounded-md bg-primary text-white font-medium text-base mt-6 place-self-center md:place-self-start">
					View Details
				</Link>
			</div>
		</div>
	);
};

export default Project;
