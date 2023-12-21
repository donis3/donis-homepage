import React, { FC } from "react";
import Section from "../_homepage/Section";
import Timeline from "./Timeline";
import Link from "next/link";
import {  FaFilePdf } from "react-icons/fa";
import Social from "./Social";
import ThemeColorChanger from "@/components/ThemeColorChanger";
import { Viewport } from "next";

export const viewport: Viewport = {
	//Default theme color
	themeColor: "#172b46",
};
const page: FC = () => {
	return (
		<>
			<ThemeColorChanger color="#172b46" />
			<section className="w-full bg-gradient-to-b from-primary-400 to-primary-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
				<div className="grid grid-cols-1 md:grid-cols-2  container mx-auto mt-8">
					<div className="flex justify-center items-center mt-0 md:items-start md:mt-4 lg:mt-0 lg:items-center px-4 py-8 ">
						<img
							src="/assets/don-hero.jpg"
							alt="deniz image"
							className="rotate-6 border-4 border-white rounded-lg w-2/4 md:w-3/4 shadow-md max-w-[400px]"
						/>
					</div>
					<div className="p-4 md:order-first text-lg ">
						<h1 className="text-4xl font-bold tracking-tight">
							Hello, Im Deniz
						</h1>
						<p className="py-2 leading-relaxed font-normal">
							I've been a tech and computer enthusiast since my
							childhood. My coding journey began when I discovered
							HTML while trying to design an email template at the
							age of 13. I've developed many projects after I
							discovered PHP and MySQL back in early 2000's. For
							the past few years, I've been learning Typescript,
							React and Tailwind and trying to keep up with
							industry standards.
						</p>
						<p className="py-2 leading-relaxed font-normal">
							I enjoy learning both fundamental computer science
							and new technologies.
						</p>
						<div className="mt-4">
							<Link
								href={"./documents/deniz_ozkan_resume.pdf"}
								target="_blank"
								className="font-bold bg-zinc-50 text-primary p-3 rounded-md inline-flex items-center flex-row gap-3 hover:bg-zinc-200">
								<FaFilePdf />
								<span>Download Resume</span>
							</Link>
						</div>
						<div className="border-t border-primary-500/50 mt-10 py-4">
							<Social />
						</div>
					</div>
				</div>
			</section>
			<Section
				divider="wave"
				dividerFillClass="fill-primary-100"
				className="bg-zinc-200">
				<Timeline />
			</Section>
		</>
	);
};

export default page;
