/*
    Adding a new blog post:
    1. Prepare the blog post as an mdx file and put it in @/data/blog/{blogId}.mdx
    2. Put the cover image and any other image file into @/public/assets/blog/{blogId}/{imageName}
    3. Create an entry in the below array of blog post items

    Example Entry:
    {
		id: "test1", // Id of the blog. No spaces or special chars. Must be same as mdx filename in data/blog 
		date: new Date("2018-05-21"), //Date object that'll be used for sorting
		readDuration: 10, // Reading duration in minutes
		title: "How to achieve something something",
        cover: 'test1_cover.jpg', //optional. Will default to placeholder
		description: short text that'll be displayed in blogs page //optional
	},
*/

import { BlogType } from "./BlogType";

const blogs: BlogType[] = [
	{
		id: "test",
		date: new Date("2018-05-21"),
		readDuration: 10,
		title: "How to achieve something something",
		cover: "test1_cover.jpg",
		description: "Eiusmod occaecat aliquip minim aute dolor.",
		link: { href: "http://www.google.com", text: "Read at Dev.to" },
	},
];

export default blogs;

//Settings
const postCount = blogs.length;
const postPerPage = parseInt(process.env.BLOG_POST_PER_PAGE ?? "2");
const postPageCount = Math.ceil(postCount / postPerPage) ?? 1;

export const blogStats = {
	count: postCount,
	perPage: postPerPage,
	totalPages: postPageCount,
};
