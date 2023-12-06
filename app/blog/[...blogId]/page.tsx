import { Metadata } from "next";
import React, { FC } from "react";
import dynamic from "next/dynamic";
import getDirFilenames from "@/lib/getDirFilenames";

/**
 * Generate routes for each blog post in data/blog dir
 * @returns
 */
export async function generateStaticParams() {
	const filenames = getDirFilenames("./data/blog/", false);

	const result = filenames.map((filename) => {
		return { blogId: [filename] };
	});

	return result;
}

/**
 * Load metadata for each blog post by importing directly their metadata
 * @param param0
 * @returns
 */
export async function generateMetadata({
	params,
}: blogItemProps): Promise<Metadata> {
	const blogId = params.blogId[0];
	try {
		const file = await import("../../../data/blog/" + blogId + ".mdx");
		return file.metadata;
	} catch (error) {
		//Err
		console.log("Unable to fetch metadata for " + blogId);
		return {
			title: "Blog Page",
			description: "Blog Desc",
		};
	}
}

type blogItemProps = {
	params: { blogId: string[] };
};

/**
 * Render the blog post
 * @param param0
 * @returns
 */
const page: FC<blogItemProps> = ({ params }) => {
	//Load blog mdx file as a component
	const blogId = params.blogId[0];
	const BlogPost = dynamic(
		() => import("../../../data/blog/" + blogId + ".mdx"),
	);

	return (
		<div>
			<BlogPost />
		</div>
	);
};

export default page;
