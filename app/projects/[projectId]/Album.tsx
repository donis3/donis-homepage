"use client";
import Carousel, { CarouselItem } from "@/components/carousel/Carousel";
import { useImageModal } from "@/components/img-modal/ImageContext";
import React, { FC } from "react";

type AlbumProps = {
	projectId: string;
	images?: string[];
	caption?: string;
};

const Album: FC<AlbumProps> = ({ projectId, images, caption }) => {
	const { setImage } = useImageModal();
	//Max char length for captions
	if (caption && caption.length > 50) {
		caption = caption.slice(0, 50) + "...";
	}

	function onImageClick(url: string, text?: string) {
		setImage({
			imageUrl: url,
			title: `${caption} ${caption && " - "} ${text} `,
		});
	}

	if (!images || images.length === 0) {
		return <></>;
	}
	return (
		<>
			<Carousel buttonTheme="light" fadeClass="text-slate-100">
				{images.map((url, i) => {
					return (
						<CarouselItem
							key={`${projectId}_image_${i}`}
							className="w-max">
							<div className="overflow-hidden rounded-lg border border-primary">
								<img
									src={`/assets/projects/${projectId}/${url}`}
									alt={`${projectId} project image`}
									className=" h-48 object-fill w-auto cursor-pointer hover:scale-105 transition-all duration-500"
									onClick={() =>
										onImageClick(
											`/assets/projects/${projectId}/${url}`,
											`Image ${i + 1}/${images.length}`,
										)
									}
								/>
							</div>
						</CarouselItem>
					);
				})}
			</Carousel>
		</>
	);
};

export default Album;
