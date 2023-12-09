import React, { FC } from "react";
import Section from "../_homepage/Section";
import Timeline from "./Timeline";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
	return (
		<>
			<section className="w-full bg-gradient-to-b from-primary-400 to-primary-100  relative pt-[var(--navbar-h)] text-muted-800 pb-20 to-90%">
				<div className="grid grid-cols-1 md:grid-cols-2  container mx-auto mt-8">
					<div className="flex justify-center items-center px-4 py-8">
						<img
							src="/assets/don-hero.jpg"
							alt="deniz image"
							className="rotate-6 border-4 border-white rounded-lg w-2/4 md:w-3/4 shadow-md"
						/>
					</div>
					<div className="p-4 md:order-first text-lg ">
						<h1 className="text-4xl font-bold tracking-tight">
							Hello, Im Deniz
						</h1>
						<p className="py-2 leading-relaxed font-normal">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odit, odio ducimus pariatur deserunt dolor
							ullam tenetur facere aperiam nemo voluptatem et
							voluptatum. Impedit est labore obcaecati eius
							molestiae fuga. Sit?
						</p>
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
