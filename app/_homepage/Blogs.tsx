import usePosts from "@/data/usePosts";
import Link from "next/link";
import React, { FC } from "react";

type BlogsProps = {};

const Blogs: FC<BlogsProps> = async ({}) => {
	const { getAllPostsSorted } = usePosts();
	const posts = await getAllPostsSorted(3);

	if (posts.length === 0) return <></>;

	return (
		<>
			<p className="text-primary-900 font-medium leading-tight border-b border-black/20 pb-1">
				Latest Blog Posts
			</p>
			<ul className="font-thin leading-loose mt-2">
				{posts.map((post, i) => {
					return (
						<BlogLink key={`hero_post_${i}`}>
							<Link href={`/blog/post/${post.id}`}>
								{post.title}
							</Link>
						</BlogLink>
					);
				})}
			</ul>
		</>
	);
};

export default Blogs;

function BlogLink({ children, ...props }: { children: React.ReactNode }) {
	return (
		<li
			className="whitespace-nowrap overflow-hidden text-ellipsis hover:text-white hover:translate-x-0.5 max-w-xs"
			{...props}>
			{children}
		</li>
	);
}
