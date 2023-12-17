import { ProjectType } from "./ProjectType";

const projects: ProjectType[] = [
	{
		id: "costotus",
		title: "Culpa officia velit fugiat ullamco pariatur aute exercitation exercitation consectetur laboris. Elit nulla minim officia ullamco enim consequat aute ad cillum velit sunt ullamco cillum magna. Irure culpa ut occaecat anim sit. Dolor aute in mollit qui aute exercitation laborum amet cillum qui nulla. Veniam commodo nulla in officia.",
		year: 2020,
		subtitle: "An cost calculator for small businesses",
		tech: ["React 18", "SPA"],
		images: ["costotus_01.jpg", "costotus_02.jpg"],
		link: "https://www.costotus.com",
	},
];

const getProjectImages = (projectId: string) => {
	const target = projects.find((item) => item.id === projectId);
	if (target && target.images.length > 0) {
		return target.images.map(
			(src) => `/assets/projects/${projectId}/${src}`,
		);
	} else {
		return null;
	}
};

export { projects, getProjectImages };
