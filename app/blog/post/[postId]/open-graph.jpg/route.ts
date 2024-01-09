import GenerateOg from "@/lib/opengraph/GenerateOg";
import usePosts from "@/data/usePosts";


/**
 * Generate routes for each blog post using the data/blogs.ts
 * @returns
 */
export async function generateStaticParams() {
	const { filenames } = usePosts();
	const result = filenames.map((filename) => {
		return { postId: filename };
	});

	return result;
}
export async function GET(
	req: Request,
	{ params }: { params: { postId: string } },
) {
	return GenerateOg(params.postId);
}
