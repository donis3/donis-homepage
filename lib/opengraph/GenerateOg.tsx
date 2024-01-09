import { ImageResponse } from "next/og";
import { fontSize, getImg, readFile, loadImageFrom } from "./og-helpers";
import { readFileSync } from "fs";
import path, { join } from "path";
import { cwd } from "process";

export async function BlogImage(
	text: string,
	target: "opengraph" | "twitter" = "opengraph",
) {
	const width = target === "opengraph" ? 1200 : 800;
	const height = target === "opengraph" ? 630 : 418;
	const bg = "open-graph-new-blog-post.png";

	//Lower size for twitter cards
	const calculatedFontSize =
		target === "opengraph" ? fontSize(text) : fontSize(text) / 2;

	return new ImageResponse(
		(
			<div style={{ display: "flex" }}>
				<img src={getImg(bg)} alt="" width={width} height={height} />
				<div
					style={{
						position: "absolute",
						top: "40%",
						left: "0%",
						width: "100%",
						height: "50%",
						padding: "4rem",
						paddingBottom: "4rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#ffffff",
					}}>
					<div
						style={{
							fontFamily: "Raleway",
							fontSize: `${calculatedFontSize}rem`,
							lineHeight: "1",
							wordBreak: "break-word",
						}}>
						{text}
					</div>
				</div>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			width,
			height,
			fonts: [
				{
					name: "Raleway",
					data: readFile("Raleway-Regular.ttf"),
					weight: 400,
					style: "normal",
				},
			],
		},
	);
}

export function ProjectImage(
	target: "opengraph" | "twitter" = "opengraph",
	imgPath: string,
) {
	const width = target === "opengraph" ? 1200 : 800;
	const height = target === "opengraph" ? 630 : 418;
	const bg = "open-graph-new-project.png";

	// const img = readFileSync(join(cwd(), ...imgPath));
	// const newImg = `data:image/jpeg;base64,${img.toString("base64")}`;

	const coverImage = loadImageFrom(imgPath);
	const projectMaskImage = getImg(bg);

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					width: width + "px",
					height: height + "px",
				}}>
				<img
					src={coverImage}
					alt=""
					width={width}
					height={height}
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						width: "100%",
						height: "100%",
					}}
				/>
				<img
					src={projectMaskImage}
					alt=""
					width={width}
					height={height}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			width,
			height,
			fonts: [
				{
					name: "Raleway",
					data: readFile("Raleway-Medium.ttf"),
					weight: 400,
					style: "normal",
				},
			],
		},
	);
}
