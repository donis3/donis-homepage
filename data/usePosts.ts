import getDirFilenames from "@/lib/getDirFilenames";
import { PostType } from "@/data/PostType";

export default function usePosts() {
	const filenames = getDirFilenames("./data/posts/", false, ["readme", "_example"]);

	//Settings
	const postCount = filenames.length;
	const postPerPage = parseInt(process.env.BLOG_POST_PER_PAGE ?? "2");
	const postPageCount = Math.ceil(postCount / postPerPage) ?? 1;

	async function getPostData(filename: string, key: "data" | "metadata") {
		//Lazy load the mdx file for the project
		try {
			if (!filenames.includes(filename)) {
				throw new Error(`${filename} is not a valid post file.`);
			}
			const file = await import("@/data/posts/" + filename + ".mdx");

			if (file[key]) return file[key];
			else {
				throw new Error(
					`Unable to find ${key} in file ${filename}.mdx`,
				);
			}
		} catch (error) {
			//Err
			if (typeof error === "object" && error && "message" in error) {
				console.log(error.message);
			}
			//Return default if not found
			return undefined;
		}
	}

	async function getAllData(): Promise<PostType[]> {
		return Promise.all(
			filenames.map(async (filename) => {
				return getPostData(filename, "data");
			}),
		);
	}

	async function getAllPostsSorted() {
		const posts = await getAllData();

		return posts.sort((a, b) => {
			return a.date.getTime() - b.date.getTime();
		});
	}

	return {
		filenames,
		getPostData,
		getAllData,
		getAllPostsSorted,
		stats: {
			count: postCount,
			pageCount: postPageCount,
			perPage: postPerPage,
		},
	};
}
