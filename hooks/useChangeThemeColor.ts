"use client";

import { useEffect } from "react";

export default function useChangeThemeColor({
	color = "#000000",
}: {
	color: string;
}) {
	useEffect(() => {
		if (document) {
			let body = document.querySelector("body");
			let meta = document.querySelector('meta[name="theme-color"]');

			//Change meta theme-color
			if (meta) {
				meta.setAttribute("content", color);
			}
			//Change body bg
			if (body) {
				body.style.backgroundColor = color;
			}
		}
	}, []);
}
