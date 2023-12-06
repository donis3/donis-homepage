const fs = require("fs");

export default function getDirFilenames(
	directory: string,
	includeExtension = true,
): string[] {
	try {
		if (!fs.lstatSync(directory).isDirectory())
			throw new Error("Invalid Directory");
		const fileList: string[] = fs.readdirSync(directory);
		if (fileList.length === 0) throw new Error("No files available");

		if (includeExtension) return fileList;

		return fileList.map((item: string) => {
			return item.split(".")[0];
		});
	} catch (error) {
		console.log(error);
		return [];
	}
}
