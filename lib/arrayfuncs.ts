function getPage<T>(inputArray: T[], pageNumber: number, perPage: number) {
	const itemCount = inputArray.length;
	//Mathematical Validations
	if (inputArray.length <= 1) return inputArray;
	if (perPage < 1) perPage = 1;
	const numberOfPages = Math.ceil(itemCount / perPage);
	if (pageNumber > numberOfPages) pageNumber = numberOfPages;

	//Calculate the indices for the requested page
	const startingIndex = (pageNumber - 1) * perPage;

	//This index is excluded from the results when used with slice. So if you want 2. element of an array to be the last one, slice at 0,2
	const endIndex =
		pageNumber * perPage >= itemCount ? itemCount : pageNumber * perPage;

	//return array
	return inputArray.slice(startingIndex, endIndex);
}

type getItemsOptions<T> = {
	/**
	 * Source array that wants to be sliced for the requested page number
	 */
	inputArray?: T[];
	/**
	 * Sort will only work if array objects have a property 'date' with a Date type
	 */
	sort?: "ASC" | "DESC";
	/**
	 * Requested page number
	 */
	page?: number;
	/**
	 * Array items per page
	 */
	perPage?: number;
};
/**
 * Paginate inside an array
 * @param params
 * @returns
 */
export function getItems<T>(params?: getItemsOptions<T>) {
	const { sort = "ASC", page = 1, perPage = 2, inputArray } = params ?? {};
	if (!inputArray) return [];

	//1 Sort by date if date property exists
	const result = inputArray.sort((a, b) => {
		if (
			typeof a === "object" &&
			a &&
			"date" in a &&
			a.date instanceof Date &&
			typeof b === "object" &&
			b &&
			"date" in b &&
			b.date instanceof Date
		) {
			if (sort === "ASC") {
				return a.date.getTime() - b.date.getTime();
			} else {
				return b.date.getTime() - a.date.getTime();
			}
		} else {
			return 1;
		}
	});

	return getPage<T>(result, page, perPage);
}
