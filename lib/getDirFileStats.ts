import path from "path";
import getDirFilenames from "./getDirFilenames";

const fs = require("fs");

type FileDetails = {
	path: string;
	filename: string;
	extension: string;
	lastModified: Date;
};

export default function getDirFileStats(
	directory: string,
	blacklist?: string[],
) {
	const filenames = getDirFilenames(directory, true, blacklist);

	if (!filenames || filenames.length === 0) return [];

	const result: FileDetails[] = [];

	//Get stats for each file
	filenames.forEach((filename) => {
		try {
			//Get filename and extension
			const filenameParts = filename.split(".");
			const extension = filenameParts[filenameParts.length - 1];
			const fileBaseName = filenameParts
				.slice(0, filenameParts.length - 1)
				.join(".");

			//Read file stats
			const filePath = path.resolve(directory, filename);
			const stats = fs.statSync(filePath);

			//push data to result
			result.push({
				path: filePath,
				filename: fileBaseName,
				extension: extension,
				lastModified: new Date(stats.mtime),
			});
		} catch (error) {
			return;
		}
	});
	return result;
}
