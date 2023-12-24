import Section from "@/app/_homepage/Section";
import { getItems } from "@/lib/arrayfuncs";
import { Metadata, Viewport } from "next";
import React, { FC } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import usePosts from "@/data/usePosts";
import { PostType } from "@/data/PostType";
import ThemeColorChanger from "@/components/ThemeColorChanger";

type BlogsPageProps = {
	params: { slug?: string[] };
};

export const viewport: Viewport = {
	//Default theme color
	themeColor: "#99131e",
};

/**
 * Custom metadata generation for the page
 * @param param0
 * @returns
 */
export async function generateMetadata({
	params,
}: BlogsPageProps): Promise<Metadata> {
	const pageNumber = getPageNumber(params);
	return {
		title:
			pageNumber > 1
				? `Developer Blog Page ${pageNumber}`
				: "Developer Blog",
		description: "I write about tech stuff and web development adventures.",
	};
}

/**
 * Blogs Page component. Display all blog posts available with pagination
 * @param param0
 * @returns
 */
const BlogsPage: FC<BlogsPageProps> = async ({ params }) => {
	const pageNumber = getPageNumber(params);
	const { stats, getAllData } = usePosts();
	const postsArray = await getAllData();

	const posts = getItems<PostType>({
		inputArray: postsArray,
		page: pageNumber,
		perPage: stats.perPage,
		sort: "DESC",
	});

	const nextUrl =
		pageNumber < stats.pageCount ? `/blog/${pageNumber + 1}` : null;
	const previousUrl = pageNumber > 1 ? `/blog/${pageNumber - 1}` : null;

	
	return (
		<>
			<ThemeColorChanger color="#99131e" />
			<section className="w-full bg-gradient-to-b from-accent-300 to-accent-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
				<div className="container mx-auto p-4 mt-10">
					<h1 className="text-4xl font-bold tracking-tight  ">
						Dev Blog
					</h1>
					<p className="py-2 leading-relaxed max-w-sm">
						I try to create short guides and blog posts for novice
						developers like me. I enjoy sharing my experience
						learning about new tech.
					</p>
				</div>
			</section>
			<Section
				divider="wave"
				dividerFillClass="fill-accent-100"
				className="bg-zinc-200 pb-20"
				dividerFlip={true}>
				<div className="grid grid-cols-1 gap-x-4 gap-y-16">
					{posts.length > 0 ? (
						posts.map((postItem) => {
							return (
								<PostItem data={postItem} key={postItem.id} />
							);
						})
					) : (
						<p>There are no posts yet! Check back soon</p>
					)}
				</div>
				<div className="w-full  p-2 flex justify-center mt-10">
					<div className="flex items-center gap-2">
						<Pagination
							nextUrl={nextUrl}
							previousUrl={previousUrl}
							page={pageNumber}
							pageMax={stats.pageCount}
						/>
					</div>
				</div>
			</Section>
		</>
	);
};

export default BlogsPage;

//===============// Helper Functions

/**
 * Extract the current page number from page params or return 1
 * @param params
 * @returns
 */
function getPageNumber(params: BlogsPageProps["params"]): number {
	if (params?.slug && params.slug.length > 0) {
		return parseInt(params.slug[0]);
	}
	return 1;
}

//===============// Static Site Generation

/**
 * Generate a static route for each page number. ex: blog/2 blog/3 etc...
 * @returns
 */
export async function generateStaticParams() {
	const { stats } = usePosts();
	const result: { slug: string[] }[] = [];
	for (let i = 1; i <= stats.pageCount; i++) {
		result.push({ slug: [i.toString()] });
	}
	// for baseurl/blog to work, we must provide an empty object with slug: undefined
	return [{ slug: undefined }, ...result];
}
