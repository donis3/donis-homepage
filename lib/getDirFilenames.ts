const fs = require("fs");

export default function getDirFilenames(
	directory: string,
	includeExtension = true,
	blacklist?: string[],
): string[] {
	try {
		if (!fs.lstatSync(directory).isDirectory())
			throw new Error("Invalid Directory");
		let fileList: string[] = fs.readdirSync(directory);
		if (fileList.length === 0) throw new Error("No files available");

		if (blacklist && blacklist.length > 0) {
			fileList = fileList.filter((filename) => {
				const filenameWithoutExt = filename.split(".")[0].toLowerCase();
				//search in blacklist
				if (blacklist.includes(filenameWithoutExt)) {
					return false;
				}
				return true;
			});
		}

		if (includeExtension) return fileList;

		return fileList.map((item: string) => {
			return item.split(".")[0];
		});
	} catch (error) {
		console.log(error);
		return [];
	}
}
