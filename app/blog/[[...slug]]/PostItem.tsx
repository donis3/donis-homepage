import { cn } from "@/lib/utilities";
import Link from "next/link";
import React, { FC } from "react";
import style from "./PostItem.module.css";
import { FaHourglassEnd } from "react-icons/fa";
import DateString from "@/components/DateString";
import { PostType } from "@/data/PostType";

type PostItemProps = {
	data: PostType;
};

const PostItem: FC<PostItemProps> = ({ data }) => {
	return (
		<div className="bg-slate-100 w-full rounded-md shadow-md flex flex-col gap-4 group md:flex-row group border border-slate-200">
			<div className="overflow-hidden w-full h-48 rounded-t-md md:w-1/3 lg:w-1/4 md:h-full md:rounded-none md:rounded-l-md">
				<Link href={`/blog/post/${data.id}`}>
					<div
						className="w-full h-full bg-cover bg-center hover:scale-105 transition-all duration-700"
						style={{
							boxShadow: "inset black 0px 0px 10px -3px",
							backgroundImage: data.cover
								? `url('/assets/posts/${data.id}/${data.cover}')`
								: `url('/assets/posts/blog-placeholder.jpg')`,
							backgroundSize: "cover",
						}}></div>
				</Link>
			</div>
			<div className="flex-1 p4 flex flex-col justify-center p-4 md:w-2/3 lg:w-3/4">
				<h3 className="font-semibold text-xl flex flex-row items-center justify-between w-full overflow-hidden border-b">
					{data.title}
				</h3>
				<div className="flex flex-row justify-between font-light text-zinc-800 text-xs mt-1">
					<span className="inline-flex items-center gap-1">
						<FaHourglassEnd className="text-zinc-500" />{" "}
						{data.readingTime
							? data.readingTime.text
							: "Unknown read duration."}
					</span>
					<span>
						<DateString date={data.date} initEmpty />
					</span>
				</div>
				<p className="font-normal text-lg leading-snug tracking-tight mt-4">
					{data.description ? (
						data.description
					) : (
						<span className="text-base italic text-gray-500">
							Read full article for details...
						</span>
					)}
				</p>
				<div className="mt-6 flex flex-wrap gap-4 items-center justify-center md:justify-end">
					<BlogButton href={`/blog/post/${data.id}`} />
				</div>
			</div>
		</div>
	);
};

export default PostItem;

const BlogButton: FC<{ href: string }> = ({ href }) => {
	return (
		<Link
			href={href}
			className={cn(
				"p-2 rounded-md font-medium text-base inline-flex items-center gap-2 transition-colors duration-500  text-primary hover:bg-zinc-200",
				style.arrowRightAnimated,
			)}>
			Read Full Article
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.81569 3.19887L13.8159 7.51989C14.0614 7.78505 14.0614 8.21495 13.8159 8.48011L9.81569 12.8011C9.57022 13.0663 9.17223 13.0663 8.92676 12.8011C8.68129 12.536 8.68129 12.1061 8.92676 11.8409L11.8539 8.67898H3V7.32102H11.8539L8.92676 4.1591C8.68129 3.89394 8.68129 3.46403 8.92676 3.19887C9.17223 2.93371 9.57022 2.93371 9.81569 3.19887Z"
					fill="black"
				/>
				<path
					className={style.path}
					id="circle-path"
					d="M0.5 8C0.5 12.1411 3.85781 15.5 8 15.5M0.5 8C0.5 3.8589 3.85781 0.5 8 0.5M0.5 8C0.5 3.8562 3.85758 0.5 8 0.5M0.5 8C0.5 12.1438 3.85758 15.5 8 15.5M8 15.5C12.1422 15.5 15.5 12.1411 15.5 8M8 15.5C12.1424 15.5 15.5 12.1438 15.5 8M8 0.5C12.1422 0.5 15.5 3.8589 15.5 8M8 0.5C12.1424 0.5 15.5 3.8562 15.5 8"
					stroke="#000"
					strokeWidth="1"
					fill="transparent"
				/>
			</svg>
		</Link>
	);
};
