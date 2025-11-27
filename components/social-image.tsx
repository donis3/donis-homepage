import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";

type ImageOptions = {
	width: number;
	height: number;
	imagePath: string;
	title?: string;
	summary?: string;
};

export async function generateSocialImage({
	width,
	height,
	imagePath,
	title,
	summary,
}: ImageOptions) {
	const data = {
		title: title || "Donis.Dev Project Showcase",
		summary: summary
			? summary
			: "Discover the latest projects and innovations from Donis.Dev",
	};

	const mimeType = "image/jpeg";

	const bgImage = await readFile(imagePath);
	const bgImageDataUrl = `data:${mimeType};base64,${bgImage.toString("base64")}`;

	// Actual NEWS IMAGE
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					fontSize: 128,
					color: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					position: "relative",
				}}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={bgImageDataUrl}
					alt=""
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						//backgroundColor: "rgba(0, 0, 0, 0.7)",
						background:
							"linear-gradient(180deg,rgba(51, 51, 51, 0.1) 0%, rgba(0, 0, 0, 0.9) 51%)",
					}}
				/>

				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: 80,
					}}
				>
					<div
						style={{
							fontSize: 60,
							lineHeight: 1,
							display: "block",
							fontWeight: 600,
							textAlign: "center",
							maxWidth: "90%",
							color: "#E2852E",
						}}
					>
						{data.title}
					</div>
					<div
						style={{
							fontSize: 36,

							lineHeight: 1.3,
							display: "flex",
							fontWeight: 600,
							textAlign: "center",
							maxWidth: "90%",
							opacity: 0.8,
						}}
					>
						<p>
							{data.summary.slice(0, 200)}
							{data.summary.length > 200 ? "..." : ""}
						</p>
					</div>
				</div>
			</div>
		),
		// ImageResponse options
		{
			width: width,
			height: height,
		},
	);
}
