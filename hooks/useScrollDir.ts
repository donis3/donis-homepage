"use client";

import { useEffect, useRef } from "react";

export type ScrollData = {
	directionY: "up" | "down" | null;
	directionX: "right" | "left" | null;
	y: number;
	x: number;
	speedX: number;
	speedY: number;
};

/**
 * Calculate speed in pixels / second
 * @param time delta time in milliseconds
 * @param distance distance taken during that time
 * @returns
 */
const calcSpeed = (time: number, distance: number) => {
	if (!distance || !time) return 0;

	// distance taken in given time * convert the time to seconds
	return (distance / time) * (1000 / time);
};

export default function useScrollDir(callback: (data: ScrollData) => void) {
	const TICK = 20; //How many milliseconds between each check Note: higher than 20-30ms may cause missing updates
	const internalData = useRef({ lastUpdate: Date.now(), lastY: 0, lastX: 0 });
	const scrollData = useRef<ScrollData>({
		directionX: null,
		directionY: null,
		y: 0,
		x: 0,
		speedX: 0,
		speedY: 0,
	});

	useEffect(() => {
		//Save initial coords on first render
		internalData.current.lastY = scrollData.current.y = window.scrollY;
		internalData.current.lastX = scrollData.current.x = window.scrollX;
		//Call callback with initial state
		callback(scrollData.current);

		const onScroll = () => {
			//Limit updates per TICK milliseconds
			if (Date.now() - internalData.current.lastUpdate < TICK) return;
			//Calc delta time
			const deltaT = Date.now() - internalData.current.lastUpdate;
			//Update last update timestamp
			internalData.current.lastUpdate = Date.now();

			const deltaY = window.scrollY - internalData.current.lastY; //If negative direction is up
			const deltaX = window.scrollX - internalData.current.lastX; //If negative, direction is left

			//Update speeds
			scrollData.current.speedX = calcSpeed(deltaT, deltaX);
			scrollData.current.speedY = calcSpeed(deltaT, deltaY);

			//Update X direction
			if (deltaX > 0) {
				scrollData.current.directionX = "right";
			} else if (deltaX < 0) {
				scrollData.current.directionX = "left";
			} else {
				scrollData.current.directionX = null;
			}

			//Update Y direction
			if (deltaY > 0) {
				scrollData.current.directionY = "down";
			} else if (deltaY < 0) {
				scrollData.current.directionY = "up";
			} else {
				scrollData.current.directionY = null;
			}

			//Update trackers
			internalData.current.lastY = scrollData.current.y = window.scrollY;
			internalData.current.lastX = scrollData.current.x = window.scrollX;

			//Call callback with current data
			callback(scrollData.current);
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return scrollData;
}
