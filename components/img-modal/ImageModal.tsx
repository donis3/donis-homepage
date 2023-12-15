"use client";
import React, { FC, useEffect, useRef } from "react";
import { useImageModal } from "./ImageContext";
import { FaTimes } from "react-icons/fa";

const ImageModal: FC = () => {
	const figRef = useRef<HTMLDivElement>(null);
	const { image, setImage } = useImageModal();

	function closeModal() {
		setImage(null);
	}

	useEffect(() => {
		if (image) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [image]);

	/**On Mount and on Dismount Key listeners */
	useEffect(() => {
		//Handler for clicking outside the image area
		const handleClickOutside = (event: MouseEvent) => {
			if (
				figRef.current &&
				!figRef.current.contains(event.target as Node)
			) {
				return closeModal();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		//Handle escape keypress
		const onEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				return closeModal();
			}
		};
		window.addEventListener("keydown", onEscape);

		// On dismount
		return () => {
			//Cleanup
			window.removeEventListener("keydown", onEscape);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	if (!image || !image.imageUrl) {
		return <></>;
	}

	return (
		<div className="fixed p-3 inset-0 bg-black z-[100] bg-opacity-50 backdrop-blur-sm w-screen h-dscreen overflow-hidden no-scrollbar text-white flex justify-center items-center">
			<figure
				ref={figRef}
				className="select-none px-2 pb-2 pt-1 h-auto bg-white text-black rounded-md max-w-full overflow-hidden max-h-[80dvh] flex flex-col">
				<div className="flex justify-end">
					<button
						type="button"
						className="p-2 text-black text-lg rounded-md "
						onClick={closeModal}>
						<FaTimes />
					</button>
				</div>
				<div className="w-full flex-1 overflow-x-hidden overflow-y-auto">
					<img
						src={image.imageUrl}
						alt={image.title ?? "An image"}
						className="w-auto object-fill"
					/>
					{image.title && (
						<figcaption className="pt-2 font-medium text-sm text-zinc-800 max-h-[10vh] text-ellipsis overflow-hidden">
							{image.title}
						</figcaption>
					)}
				</div>
			</figure>
		</div>
	);
};

export default ImageModal;
