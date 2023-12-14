import { ProjectType } from "./ProjectType";

const projects: ProjectType[] = [
	{
		id: "costotus",
		title: "Culpa officia velit fugiat ullamco pariatur aute exercitation exercitation consectetur laboris. Elit nulla minim officia ullamco enim consequat aute ad cillum velit sunt ullamco cillum magna. Irure culpa ut occaecat anim sit. Dolor aute in mollit qui aute exercitation laborum amet cillum qui nulla. Veniam commodo nulla in officia.",
		year: 2020,
		subtitle: "An cost calculator for small businesses",
		tech: ["React 18", "SPA"],
		images: ["costotus_01.jpg", "costotus_02.jpg"],
	},
	{
		id: "test1",
		title: "Test 1",
		year: 2020,
		subtitle: "A nice test application",
		tech: ["Next.js 14", "SPA"],
		images: [],
	},
	{
		id: "test2",
		title: "Test 2",
		year: 2020,
		subtitle: "A nice test 2 application",
		tech: ["Next.js 14", "SPA"],
		images: ["test2_01.jpg"],
	},
	{
		id: "test3",
		title: "Test 3",
		year: 2020,
		subtitle: "A nice test 3 application",
		tech: ["Next.js 13", "SPA"],
		images: ["test3_01.jpg"],
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
