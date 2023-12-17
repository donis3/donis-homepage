import Carousel, { CarouselItem } from "@/components/carousel/Carousel";
import { cn, colorSHade } from "@/lib/utilities";
import React, { FC } from "react";
import skills from "@/data/texts/skills";
import Fade from "@/components/awesome-reveal/Fade";

type SkillsProps = {};

const Skills: FC<SkillsProps> = ({}) => {
	return (
		<div>
			<Fade delay={300} triggerOnce>
				<h2 className="font-medium text-3xl mb-2">My Skills</h2>
				<p className="font-normal text-base leading-tight">
					I am currently focused on fullstack web development using
					Next.JS/React but I have past experience with many other
					stacks and technologies. I enjoy learning new languages and
					frameworks.
				</p>
				<Carousel buttonTheme="light" fadeClass="text-primary-800">
					{skills.map((skillCategory, i) => {
						return (
							<Skill
								title={skillCategory.category}
								key={"cat_" + i}>
								<Fade cascade damping={0.2} triggerOnce>
									{skillCategory.items.map((item, j) => {
										if (!item) return <></>;
										return (
											<SkillItem
												key={"skill_" + i + "_" + j}
												color={item.color}
												level={item.level}
												icon={item.icon}>
												{item.name}
											</SkillItem>
										);
									})}
								</Fade>
							</Skill>
						);
					})}
				</Carousel>
			</Fade>
		</div>
	);
};

export default Skills;

type SkillProps = {
	title: string;
	children: React.ReactNode;
};

const Skill: FC<SkillProps> = ({ children, title }) => {
	return (
		<CarouselItem className="bg-white/20 rounded-md hover:bg-white/40  font-mono  text-secondary-100 w-72">
			<h4 className="font-medium text-lg mb-2 whitespace-normal  px-4 py-1 border-b border-white/20 rounded-t-md ">
				{title}
			</h4>
			<ul className="p-4 flex flex-col gap-2">{children}</ul>
		</CarouselItem>
	);
};

type SkillItemProps = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	color?: string;
	level?: number;
};

const SkillItem: FC<SkillItemProps> = ({
	children,
	icon,
	level = 0,
	color,
}) => {
	//Color Validations
	if (!color) color = "#ffffff";
	if (color.charAt(0) !== "#") color = "#" + color;
	if (color.length < 7) color = color.padEnd(7, "0");
	else if (color.length > 7) color = color.slice(0, 7);
	//Generate lighter color for contrast
	const lighterColor = colorSHade(color, 50);

	//render
	return (
		<li className="relative z-10 group">
			<div className="relative z-20 flex flex-row gap-2 items-center  rounded-sm py-2 px-3 w-full">
				<span className="text-xl text-black opacity-40 group-hover:opacity-70 transition-opacity">
					{icon}
				</span>
				<span className="font-medium">{children}</span>
			</div>
			<div className="top-0 left-0 h-full absolute z-10 bg-white/30 w-full rounded-md overflow-hidden">
				<div
					className="w-full h-full transition-all duration-1000"
					style={{
						width: `${level}%`,
						backgroundColor: lighterColor,
					}}></div>
			</div>
		</li>
	);
};
