import getDirFilenames from "@/lib/getDirFilenames";
import { PostType, PostMetaDataType } from "@/data/PostType";

export default function usePosts() {
	const filenames = getDirFilenames("./data/posts/", false, [
		"readme",
		"_example",
	]);

	//Settings
	const postCount = filenames.length;
	const postPerPage = parseInt(process.env.BLOG_POST_PER_PAGE ?? "2");
	const postPageCount = Math.ceil(postCount / postPerPage) ?? 1;

	async function getPostData(
		filename: string,
		key: "details" | "metadata",
	): Promise<PostMetaDataType | PostType> {
		//Lazy load the mdx file for the project
		try {
			if (!filenames.includes(filename)) {
				throw new Error(`${filename} is not a valid post file.`);
			}
			const file = await import("@/data/posts/" + filename + ".mdx");

			if (file[key]) {
				if (key === "metadata") return file.metadata;

				//if details are requested Combine with readingTime plugin
				return {
					...file.details,
					readingTime: file.readingTime ?? {
						text: "",
						minutes: 0,
						time: 0,
						words: 0,
					},
				};
			} else {
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
			if (key === "metadata") {
				return {
					title: "Undefined Title",
					description: "Undefined Description",
				} as PostMetaDataType;
			} else {
				return {
					id: "undefined_id", //Must be the same as filename!
					title: "Undefined Title",
					date: new Date(),
					description: "Undefined Description",
				} as PostType;
			}
		}
	}

	async function getAllData(): Promise<PostType[]> {
		return Promise.all(
			filenames.map(async (filename) => {
				return getPostData(filename, "details") as Promise<PostType>;
			}),
		);
	}

	async function getAllPostsSorted(limit?: number) {
		const posts = await getAllData();

		const sorted = posts.sort((a, b) => {
			// return a.date.getTime() - b.date.getTime();
			return b.date.getTime() - a.date.getTime();
		});

		if (!limit) return sorted;

		return sorted.slice(0, limit);
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
