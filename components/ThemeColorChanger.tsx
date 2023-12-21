"use client";
import React, { FC, useEffect, useState } from "react";

type ThemeColorChangerProps = {
	color?: string;
};

const ThemeColorChanger: FC<ThemeColorChangerProps> = ({
	color = "#000000",
}) => {
	const [bgColor, setBgColor] = useState(color);
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
	}, [bgColor]);
	return <></>;
};

export default ThemeColorChanger;
