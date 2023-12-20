import { cn } from "@/lib/utilities";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import { FaArrowLeft, FaExternalLinkSquareAlt } from "react-icons/fa";
import styles from "./Post.module.css";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import BackButton from "@/components/BackButton";
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

type PostPageProps = {
	params: { postId: string };
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
	const { getPostData } = usePosts();
	const data = await getPostData(params.postId, "data");
	if (!data) return notFound();

	const BlogMdx = dynamic(() => import("@/data/posts/" + data.id + ".mdx"));

	const coverImage = data.cover
		? `url('/assets/posts/${data.id}/${data.cover}')`
		: `url('/assets/posts/blog-placeholder.jpg')`;

	return (
		<>
			<section className="w-full relative pt-[var(--navbar-h)] text-muted-800 ">
				<div
					className="container px-4 py-4 mx-auto bg-red-400 min-h-[200px] md:min-h-[300px] bg-center bg-cover rounded-none md:rounded-t-md mt-10 flex flex-col justify-end gap-6 md:gap-4"
					style={{ backgroundImage: coverImage }}>
					<div className="flex flex-row items-end justify-between">
						<div>
							<BackButton className="inline-flex items-center gap-2 py-1 px-2 rounded-lg  text-sm font-medium bg-light-200/10 hover:bg-light-200/30">
								<FaArrowLeft />
								Back
							</BackButton>
						</div>
						<div className="">
							{data.link && (
								<Link
									target="_blank"
									href={data.link.href}
									className="shadow-md p-2 rounded-md font-medium text-base inline-flex items-center gap-2 transition-colors duration-500 bg-zinc-800 hover:bg-zinc-950 opacity-75 hover:opacity-100">
									{data.link.text}
									<FaExternalLinkSquareAlt />
								</Link>
							)}
						</div>
					</div>

					<h1
						className={cn(
							"text-4xl font-bold tracking-tight text-center md:text-start text-white w-full mt-2",
							styles.blogTitle,
						)}>
						{data.title}
					</h1>
				</div>
			</section>
			<section className="container mx-auto text-zinc-800 bg-zinc-100 rounded-none md:rounded-b-md py-8 ">
				<article className="prose p-4 w-full h-full">
					<BlogMdx />
				</article>
			</section>
			<div className="flex justify-center container mx-auto my-10">
				<BackButton className="flex items-center gap-2 py-2 px-4 rounded-lg border border-zinc-100/50  text-lg font-medium text-zinc-300 hover:text-zinc-100 hover:border-zinc-100">
					<FaArrowLeft />
					Back
				</BackButton>
			</div>
		</>
	);
};

export default PostPage;

/**
 * Load metadata for each blog post by importing directly their metadata
 * @param param0
 * @returns
 */
export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const postId = params.postId;
	const { getPostData } = usePosts();
	//Lazy load the mdx file for the project
	try {
		const metadata = await getPostData(postId, "metadata");
		return metadata;
	} catch (error) {
		//Err
		console.log("Unable to fetch metadata for blog: " + postId);
		return {
			title: "Blog Page",
			description: "Blog Desc",
		};
	}
}