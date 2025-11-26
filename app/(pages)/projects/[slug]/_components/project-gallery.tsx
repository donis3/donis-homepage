"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProductGalleryProps = {
	images: { src: string; alt: string }[];
	className?: string;
};

export default function ProjectGallery({
	images,
	className,
}: ProductGalleryProps) {
	const [index, setIndex] = useState(-1);

	if (images.length === 0) {
		return null;
	}

	return (
		<div
			className={cn(
				"mx-auto flex max-w-2xl flex-col items-center gap-4",
				className,
			)}
		>
			<h3 className="text-center text-2xl font-bold text-foreground/75">
				Galeri
			</h3>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{images.map((image, idx) => (
					<div key={idx} className="overflow-hidden rounded-lg">
						<Image
							src={image.src}
							alt={image.alt}
							className="h-56 md:h-48  w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
							onClick={() => setIndex(idx)}
							width={400}
							height={300}
						/>
					</div>
				))}
			</div>
			<Lightbox
				open={index >= 0}
				close={() => setIndex(-1)}
				index={index}
				slides={images.map((image) => ({
					src: image.src,
					alt: image.alt,
				}))}
				plugins={[Counter]}
				counter={{ container: { style: { top: 0, bottom: "unset" } } }}
			/>
		</div>
	);
}
