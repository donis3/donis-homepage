import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiBootstrap,
	SiCsharp,
	SiCss3,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGithub,
	SiJavascript,
	SiLaravel,
	SiMicrosoftexcel,
	SiMicrosoftword,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNpm,
	SiPhp,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiUnity,
	SiVercel,
	SiVisualstudio,
	SiVisualstudiocode,
} from "react-icons/si";

const skills = [
	{
		category: "Programming Languages",
		items: [
			{
				name: "JavaScript",
				level: 80,
				color: "f7df1e",
				icon: <SiJavascript />,
			},
			{
				name: "TypeScript",
				level: 40,
				color: "3178c6",
				icon: <SiTypescript />,
			},
			{
				name: "php",
				level: 50,
				color: "4f5b93",
				icon: <SiPhp />,
			},
			{
				name: "C#",
				level: 20,
				color: "783bd2",
				icon: <SiCsharp />,
			},
		],
	},
	{
		category: "Frameworks & Libraries",
		items: [
			{
				name: "React",
				level: 80,
				color: "00d8ff",
				icon: <SiReact />,
			},
			{
				name: "Next.Js",
				level: 75,
				color: "ffffff",
				icon: <SiNextdotjs />,
			},
			{
				name: "Express.js",
				level: 50,
				color: "ff9500",
				icon: <SiExpress />,
			},
			{
				name: "Laravel",
				level: 20,
				color: "f55247",
				icon: <SiLaravel />,
			},
		],
	},
	{
		category: "Databases & Backends",
		items: [
			{
				name: "MySQL",
				level: 75,
				color: "00758f",
				icon: <SiMysql />,
			},
			{
				name: "Mongo db",
				level: 50,
				color: "589636",
				icon: <SiMongodb />,
			},
			{
				name: "Firebase",
				level: 50,
				color: "ff9500",
				icon: <SiFirebase />,
			},
		],
	},
	{
		category: "Styling",
		items: [
			{
				name: "Tailwind Css",
				level: 75,
				color: "6DB9EF",
				icon: <SiTailwindcss />,
			},
			{
				name: "CSS",
				level: 60,
				color: "3876BF",
				icon: <SiCss3 />,
			},
			{
				name: "Sass",
				level: 30,
				color: "BB9CC0",
				icon: <SiSass />,
			},
			{
				name: "Bootstrap",
				level: 30,
				color: "7B66FF",
				icon: <SiBootstrap />,
			},
		],
	},
	{
		category: "Platforms & IDE's",
		items: [
			{
				name: "VSCode",
				level: 90,
				color: "0766AD",
				icon: <SiVisualstudiocode />,
			},
			{
				name: "Visual Studio",
				level: 30,
				color: "C683D7",
				icon: <SiVisualstudio />,
			},
			{
				name: "Unity",
				level: 40,
				color: "ffffff",
				icon: <SiUnity />,
			},
		],
	},
	{
		category: "Deployment Tools",
		items: [
			{
				name: "GitHub",
				level: 50,
				color: "6e5494",
				icon: <SiGithub />,
			},
			{
				name: "Docker",
				level: 30,
				color: "0db7ed",
				icon: <SiDocker />,
			},
			{
				name: "Npm",
				level: 50,
				color: "F05941",
				icon: <SiNpm />,
			},
			{
				name: "Vercel",
				level: 50,
				color: "ffffff",
				icon: <SiVercel />,
			},
		],
	},
	{
		category: "Other Tools",
		items: [
			{
				name: "Adobe Photoshop",
				level: 40,
				color: "001B79",
				icon: <SiAdobephotoshop />,
			},
			{
				name: "Adobe Illustrator",
				level: 30,
				color: "FF6C22",
				icon: <SiAdobeillustrator />,
			},
			{
				name: "MS Excel",
				level: 80,
				color: "508D69",
				icon: <SiMicrosoftexcel />,
			},
			{
				name: "MS Word",
				level: 50,
				color: "265073",
				icon: <SiMicrosoftword />,
			},
		],
	},
];

export default skills;
