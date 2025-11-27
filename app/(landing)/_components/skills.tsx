"use client";
import {
	LuCode,
	LuDatabase,
	LuServer,
	LuCloud,
	LuMonitor,
	LuSettings,
	LuHardDrive,
	LuFileText,
	LuImage,
	LuZap,
} from "react-icons/lu";
import {
	FaReact,
	FaNodeJs,
	FaAws,
	FaUnity,
	FaUbuntu,
	FaRaspberryPi,
} from "react-icons/fa";
import {
	SiMongodb,
	SiFirebase,
	SiDrizzle,
	SiExpress,
	SiNginx,
} from "react-icons/si";
import { motion } from "motion/react";

const skillCategories = [
	{
		category: "Frontend Development",
		icon: LuCode,
		skills: [
			{
				name: "React",
				icon: FaReact,
				level: 90,
				description: "Extensive experience building modern UIs",
			},
			{
				name: "Next.js",
				icon: FaReact,
				level: 90,
				description: "Full-stack React framework expertise",
			},
		],
	},
	{
		category: "Backend Development",
		icon: LuServer,
		skills: [
			{
				name: "Node.js",
				icon: FaNodeJs,
				level: 85,
				description: "Server-side JavaScript development",
			},
			{
				name: "Express.js",
				icon: SiExpress,
				level: 50,
				description: "RESTful API development",
			},
			{
				name: "WebSockets",
				icon: LuZap,
				level: 45,
				description: "Real-time bidirectional communication",
			},
		],
	},
	{
		category: "Databases",
		icon: LuDatabase,
		skills: [
			{
				name: "SQL",
				icon: LuDatabase,
				level: 75,
				description: "Relational database design & queries",
			},
			{
				name: "Drizzle ORM",
				icon: SiDrizzle,
				level: 80,
				description: "Type-safe SQL query builder",
			},
			{
				name: "MongoDB",
				icon: SiMongodb,
				level: 50,
				description: "NoSQL document database",
			},
			{
				name: "Firebase",
				icon: SiFirebase,
				level: 50,
				description: "Backend-as-a-Service platform",
			},
		],
	},
	{
		category: "DevOps & Infrastructure",
		icon: LuCloud,
		skills: [
			{
				name: "AWS",
				icon: FaAws,
				level: 50,
				description: "Cloud services and deployment",
			},
			{
				name: "Ubuntu VPS",
				icon: FaUbuntu,
				level: 50,
				description: "Linux server administration",
			},
			{
				name: "Nginx",
				icon: SiNginx,
				level: 75,
				description: "Web server configuration",
			},
			{
				name: "DNS",
				icon: LuSettings,
				level: 70,
				description: "Nameserver configurations",
			},
		],
	},
	{
		category: "Other Technologies",
		icon: LuMonitor,
		skills: [
			{
				name: "Unity/C#",
				icon: FaUnity,
				level: 55,
				description: "Mobile game development",
			},
			{
				name: "PHP",
				icon: LuCode,
				level: 40,
				description: "Legacy web development (10+ years ago)",
			},
			{
				name: "Raspberry Pi",
				icon: FaRaspberryPi,
				level: 65,
				description: "Kiosk software development",
			},
		],
	},
	{
		category: "Tools & Software",
		icon: LuHardDrive,
		skills: [
			{
				name: "MS Office/Excel",
				icon: LuFileText,
				level: 70,
				description: "I love Excel formulas!",
			},
			{
				name: "Photoshop",
				icon: LuImage,
				level: 50,
				description: "Basic image editing",
			},
			{
				name: "Illustrator",
				icon: LuImage,
				level: 45,
				description: "Basic vector graphics",
			},
		],
	},
];

export default function Skills() {
	return (
		<section className="bg-background px-4 py-16">
			<div className="container max-w-3xl mx-auto">
				<div className="mb-12 text-center">
					<h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
						Skills & Technologies
					</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl">
						A comprehensive overview of my technical expertise across the
						full stack, from modern web development to infrastructure and
						beyond.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 justify-center ">
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.category}
							className="border-border bg-card hover:bg-accent/50 rounded-lg border p-6 transition-colors max-w-sm"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.3,
								delay: index * 0.05,
								ease: "easeOut",
							}}
						>
							<div className="mb-4 flex items-center gap-3">
								<div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
									<category.icon className="text-primary h-5 w-5" />
								</div>
								<h3 className="text-foreground font-semibold">
									{category.category}
								</h3>
							</div>

							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name} className="space-y-2">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<skill.icon className="text-muted-foreground h-4 w-4" />
												<span className="text-foreground text-sm font-medium">
													{skill.name}
												</span>
											</div>
											<span className="text-muted-foreground text-xs">
												{skill.level}%
											</span>
										</div>
										<div className="bg-muted h-2 rounded-full">
											<div
												className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
												style={{ width: `${skill.level}%` }}
											/>
										</div>
										<p className="text-muted-foreground text-xs">
											{skill.description}
										</p>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
