"use client";

import { createContext, useContext, useState } from "react";
import { ImageType } from "./ImageType";

export type ImageContextType = {
	image: ImageType | null;
	setImage: (image: ImageType | null) => void;
};

const ImageContext = createContext<ImageContextType | null>(null);

function ImageModalProvider({ children }: { children: React.ReactNode }) {
	const [image, setImage] = useState<ImageType | null>(null);

	return (
		<ImageContext.Provider value={{ image, setImage }}>
			{children}
		</ImageContext.Provider>
	);
}

export function useImageModal() {
	return useContext(ImageContext) as ImageContextType;
}

export default ImageModalProvider;
