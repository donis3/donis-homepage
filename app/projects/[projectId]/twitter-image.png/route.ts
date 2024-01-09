import { ProjectImage } from "@/lib/opengraph/GenerateOg";
import { notFound } from "next/navigation";
import useProjects from "@/data/useProjects";

/**
 * Generate routes for each blog post using the data/blogs.ts
 * @returns
 */
export async function generateStaticParams() {
	const { filenames } = useProjects();

	return filenames.map((filename) => {
		return { projectId: filename };
	});
}


export async function GET(
	req: Request,
	{ params }: { params: { projectId: string } },
) {
	const { getProjectData } = useProjects();
	const projectId = params.projectId;
	const data = await getProjectData(projectId, "data");
	if (!data) return notFound();

	const coverImagePath = `public/assets/projects/${projectId}/${data.images[0]}`;

	return ProjectImage("twitter", coverImagePath);
}
