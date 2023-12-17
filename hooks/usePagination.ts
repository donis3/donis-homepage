"use client";

import { useState } from "react";

type paginationProps = {
	data: any[];
	perPage: number;
};

export default function usePagination({ data, perPage }: paginationProps) {
	const [pdata, setpdata] = useState<{
		currentPage: number;
		size: number;
	}>({ currentPage: 1, size: perPage });

	const totalPages = Math.ceil(data.length / pdata.size);

	const startIndex = pdata.currentPage
		? (pdata.currentPage - 1) * pdata.size
		: 0;
	const endIndex = startIndex + pdata.size;
	const currentData = data.slice(startIndex, endIndex);

	return {
		currentPage: pdata.currentPage,
		size: pdata.size,
		totalPages,
		index: {
			start: startIndex,
			end: endIndex,
		},
		pagination: {
			currentData,
			goTo: (p: number) => {
				if (p > 0 && p <= totalPages)
					setpdata({ ...pdata, currentPage: p });
			},
			prev: () => {
				if (!pdata.currentPage) return;
				if (pdata.currentPage > 1)
					return setpdata({
						...pdata,
						currentPage: pdata.currentPage - 1,
					});
			},
			next: () => {
				if (typeof pdata.currentPage !== "number") {
					return;
				}
				if (pdata.currentPage >= totalPages) return;
				return setpdata({
					...pdata,
					currentPage: pdata.currentPage + 1,
				});
			},
			isNextAvailable: () => {
				if (pdata.currentPage >= totalPages) return false;
				return true;
			},
			isPrevAvailable: () => {
				if (pdata.currentPage <= 1) return false;
				return true;
			},
			changeSize: (newSize: number) => {
				if (newSize <= 0 || newSize > 100) return;
				//Get the first row index of currently displayed page
				let minIndex = (pdata.currentPage - 1) * pdata.size;
				//Calculate which page we must be on to display the first row again.
				//For ex: If size is 5 and we are at page 3, first row is the 11th item.
				//If we change size to 10, we would need to be on 2. page

				const minNewPage = Math.ceil((minIndex + 1) / newSize);

				return setpdata({
					currentPage: minNewPage > 0 ? minNewPage : 1,
					size: newSize,
				});
			},
		},
	};
}
