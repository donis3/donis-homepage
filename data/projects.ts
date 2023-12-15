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
	{
		id: "test1",
		title: "Test 1",
		year: 2020,
		subtitle: "A nice test application",
		tech: ["Next.js 14", "SPA"],
		images: [],
		repo: "https://github.com/donis3/dony-react18-simple-starter",
		link: "https://www.costotus.com",
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
		subtitle:
			"Voluptate eiusmod non velit nisi qui laborum sunt excepteur ipsum fugiat ad ipsum cillum. Sint excepteur consequat quis deserunt sint sit cillum fugiat consequat aute veniam tempor tempor. Dolor velit cillum non amet nulla consectetur laboris elit. Excepteur in aute velit mollit adipisicing adipisicing pariatur Lorem minim reprehenderit nulla anim nulla ex. Irure aliqua aliqua cupidatat Lorem cillum deserunt minim. Magna esse incididunt pariatur tempor officia labore ipsum aliquip.",
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
