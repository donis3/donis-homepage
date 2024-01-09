import { join } from "path";
import fs from "fs";

/**
 * Get an appropriate font size for given text length
 * @param text
 * @returns
 */
function fontSize(text: string) {
	const len = text.length;
	if (len < 50) return 6;
	if (len < 100) return 5;
	if (len < 200) return 4;
	if (len < 300) return 3;
	return 2;
}

const cwd = join(process.cwd(), "lib", "opengraph");

function readFile(pathToFile: string): Buffer {
	return fs.readFileSync(join(process.cwd(), "lib", "opengraph", pathToFile));
}

function getImg(
	pathToImage: string = "og-bg.png",
	mime: "image/png" | "image/jpeg" = "image/png",
): string {
	const data = readFile(pathToImage).toString("base64");
	return `data:${mime};base64,${data}`;
}

function loadImageFrom(pathFromRoot: string) {
	const mime =
		pathFromRoot.split(".").pop() === "png" ? "image/png" : "image/jpeg";
	const img = fs.readFileSync(
		join(process.cwd(), ...pathFromRoot.split("/")),
	);
	return `data:${mime};base64,${img.toString("base64")}`;
}

export { getImg, readFile, fontSize, loadImageFrom };
