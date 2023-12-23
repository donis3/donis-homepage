import Link from "next/link";
import React, { FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type PaginationProps = {
	page: number;
	pageMax: number;
	previousUrl: string | null;
	nextUrl: string | null;
};

const Pagination: FC<PaginationProps> = ({
	page,
	pageMax,
	previousUrl,
	nextUrl,
}) => {
	if (pageMax === 0) {
		return <></>;
	}
	return (
		<>
			{previousUrl ? (
				<Link
					href={previousUrl}
					className="p-2 bg-slate-300 rounded-md hover:bg-slate-300 border border-zinc-400">
					<FaArrowLeft />
				</Link>
			) : (
				<button
					type="button"
					className="p-2 bg-slate-300 rounded-md hover:bg-slate-300 border border-zinc-400 disabled:opacity-50"
					disabled>
					<FaArrowLeft />
				</button>
			)}

			<span className="p-2 font-medium text-primary-100">
				{page.toString()}/{pageMax.toString()}
			</span>
			{nextUrl ? (
				<Link
					href={nextUrl}
					className="p-2 bg-slate-300 rounded-md hover:bg-slate-300 border border-zinc-400">
					<FaArrowRight />
				</Link>
			) : (
				<button
					type="button"
					className="p-2 bg-slate-300 rounded-md hover:bg-slate-300 border border-zinc-400 disabled:opacity-50"
					disabled>
					<FaArrowRight />
				</button>
			)}
		</>
	);
};

export default Pagination;
