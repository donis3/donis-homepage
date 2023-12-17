import blogs from "@/data/blogs";
import React, { FC } from "react";

/**
 * Generate routes for each blog post in data/blog dir
 * @returns
 */
export async function generateStaticParams() {
	const result = blogs.map((blogPost) => {
		return { postId: blogPost.id };
	});

	return result;
}

type PostPageProps = {
	params: { postId: string };
};

const PostPage: FC<PostPageProps> = ({ params }) => {
	return <div>Single blog post: {params.postId}</div>;
};

export default PostPage;
