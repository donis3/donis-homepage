"use client";
import { LuCode, LuServer, LuSettings, LuClock } from "react-icons/lu";
import { motion } from "motion/react";

const aboutItems = [
	{
		title: "15+ Years Experience",
		description:
			"Been coding for over 15 years, building a strong foundation in software development and problem-solving.",
		icon: LuClock,
	},
	{
		title: "Fullstack Web Development",
		description:
			"Extensive experience in fullstack web development, from responsive frontends to scalable backend systems.",
		icon: LuCode,
	},
	{
		title: "DevOps & Infrastructure",
		description:
			"Hands-on experience with DevOps, maintaining VPS servers, DNS settings, and cloud infrastructure.",
		icon: LuServer,
	},
	{
		title: "Modern Tech Stack",
		description:
			"Passionate about staying current with cutting-edge technologies and best practices in web development.",
		icon: LuSettings,
	},
];

export default function About() {
	return (
		<section className="bg-muted/50 px-4 py-16">
			<div className="container mx-auto max-w-3xl">
				<div className="mb-12 text-center">
					<h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
						About Deniz
					</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl">
						Passionate about creating digital experiences that matter.
						With expertise in modern web technologies, I bring ideas to
						life through clean code and thoughtful design.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					{aboutItems.map((item, index) => (
						<motion.div
							key={item.title}
							className="text-center"
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								ease: "easeOut"
							}}
						>
							<div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
								<item.icon className="text-primary h-6 w-6" />
							</div>
							<h3 className="text-foreground mb-2 text-xl font-semibold">
								{item.title}
							</h3>
							<p className="text-muted-foreground">{item.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
