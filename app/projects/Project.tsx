import { ProjectType } from "@/data/ProjectType";
import useProjects from "@/data/useProjects";
import { cn } from "@/lib/utilities";
import Link from "next/link";
import React, { FC } from "react";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";

type ProjectProps = {
	data?: ProjectType;
};

const Project: FC<ProjectProps> = ({ data }) => {
	const { getImages } = useProjects();
	if (!data) return <></>;
	const images = getImages(data);

	return (
		<div className="bg-slate-100 w-full rounded-md shadow-md flex flex-col gap-4 group md:flex-row group border border-slate-200">
			<div className="overflow-hidden w-full h-48 rounded-t-md md:flex-1  md:w-1/3 lg:w-1/4 md:h-full md:rounded-none md:rounded-l-md relative">
				<Link href={`/projects/${data.id}`} className="">
					<div
						className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-all duration-700"
						style={{
							boxShadow: "inset black 0px 0px 10px -3px",
							backgroundImage: `url('${
								images
									? images[0]
									: "/assets/projects/project-placeholder.jpg"
							}')`,
							backgroundSize: "cover",
						}}></div>
				</Link>
			</div>
			<div className=" p4 flex flex-col justify-center  gap-2 p-4  md:w-2/3 lg:w-3/4">
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
				{data.tech.length > 0 && (
					<ul className="flex flex-row gap-2 text-sm tracking-tighter font-light text-zinc-600 border-t w-full pt-2 mt-2">
						{data.tech.map((item, i) => (
							<li key={`${data.id}_tech_${i}`}>{item}</li>
						))}
					</ul>
				)}
				<div className="mt-6 flex flex-wrap gap-4 items-center justify-center md:justify-start">
					<ProjectLink href={`/projects/${data.id}`}>
						<FaInfoCircle />
						View Details
					</ProjectLink>

					{data?.repo && (
						<ProjectLink
							href={data.repo}
							outline
							target="_blank"
							className="border-purple-400 text-purple-900 hover:bg-purple-100">
							<FaGithub />
							Github Repo
						</ProjectLink>
					)}
					{data?.link && (
						<ProjectLink
							href={data.link}
							outline
							target="_blank"
							className="border-teal-700 text-teal-900 hover:bg-emerald-100">
							<FaGlobe />
							Visit Project
						</ProjectLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;

function ProjectLink({
	href,
	className,
	children,
	outline,
	target,
}: {
	href: string;
	className?: string;
	children: React.ReactNode;
	outline?: boolean;
	target?: string;
}) {
	return (
		<Link
			href={href}
			target={target}
			className={cn(
				"p-2 rounded-md font-medium text-base inline-flex items-center gap-2 transition-colors duration-500 ",
				outline
					? "border border-primary-500 text-primary-500 hover:bg-primary-900"
					: "bg-primary-500 text-white hover:bg-primary-600 ",
				className,
			)}>
			{children}
		</Link>
	);
}
