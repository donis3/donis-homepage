import fs from "fs";
import { ImageResponse } from "next/og";
import { join } from "path";

const cwd = join(process.cwd(), "lib", "opengraph");

function loadFile(relPath: string): Buffer {
	return fs.readFileSync(join(cwd, relPath));
}

export default async function GenerateOg(text: string) {
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					fontFamily: "font-serif",
					fontSize: 50,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				About Acme {text}
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "font-serif",
					data: loadFile("DMSerifDisplay-Regular.ttf"),
					weight: 400,
					style: "normal",
				},
			],
		},
	);
}
