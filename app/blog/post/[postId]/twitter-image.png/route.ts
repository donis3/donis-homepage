import { BlogImage } from "@/lib/opengraph/GenerateOg";
import usePosts from "@/data/usePosts";
import { notFound } from "next/navigation";
import { PostType } from "@/data/PostType";

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
	//Load metadata for this post
	if (!params.postId) return notFound();
	const { getPostData } = usePosts();
	const data = (await getPostData(params.postId, "details")) as PostType;
	if (!data) return notFound();

	return BlogImage(data.description ?? data.title, "twitter");
}
