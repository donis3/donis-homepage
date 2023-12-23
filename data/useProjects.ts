import getDirFilenames from "@/lib/getDirFilenames";
import { ProjectType } from "./ProjectType";

export default function useProjects() {
	const filenames = getDirFilenames("./data/projects/", false, ["readme", "_example"]);

	async function getProjectData(
		filename: string,
		key: "data" | "metadata",
	): Promise<ProjectType> {
		//Lazy load the mdx file for the project
		if (!filenames.includes(filename)) throw new Error();
		const file = await import("@/data/projects/" + filename + ".mdx");
		if (file[key]) return file[key];
		else {
			throw new Error();
		}
	}

	async function getAllData(): Promise<ProjectType[]> {
		return Promise.all(
			filenames.map(async (filename) => {
				return getProjectData(filename, "data");
			}),
		);
	}

	async function getAllProjectsSorted() {
		const projects = await getAllData();

		return projects.sort((a, b) => {
			return a.year > b.year ? -1 : 1;
		});
	}

	function getImages(projectData: ProjectType) {
		if (projectData && projectData.images.length > 0) {
			return projectData.images.map(
				(src) => `/assets/projects/${projectData.id}/${src}`,
			);
		} else {
			return null;
		}
	}

	return {
		filenames,
		getProjectData,
		getAllData,
		getAllProjectsSorted,
		getImages,
	};
}
