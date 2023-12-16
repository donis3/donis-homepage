import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export type ScrollData = {
	directionY: "up" | "down" | null;
	directionX: "right" | "left" | null;
	y: number;
	x: number;
	speedX: number;
	speedY: number;
	atBottom: boolean;
	atTop: boolean;
};

export type ScrollOptions = {
	updateInterval?: number;
	target?: React.RefObject<HTMLElement>;
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

/**
 * Detect if scroll position is at the bottom of given element
 * @param element element ex: document or a div
 * @returns {boolean}
 */
const isScrollBottom = (element: HTMLElement) => {
	if (!element) return false;

	if (
		Math.ceil(element.clientHeight + element.scrollTop) >=
		element.scrollHeight
	) {
		return true;
	}
	return false;
};

/**
 * Detect if element is scrolled to the top
 * @param element
 * @returns
 */
const isScrollTop = (element: HTMLElement) => {
	if (!element) return false;

	if (element.scrollTop <= 1) {
		return true;
	}
	return false;
};

/**
 *
 * @param callback
 * @param options
 * @returns
 */
export default function useScrollHandler(
	callback: (data: ScrollData) => void,
	options?: ScrollOptions,
) {
	const path = usePathname();
	const TICK = options?.updateInterval ?? 20; //How many milliseconds needs to pass between 2 scroll events for the data to update.
	const internalData = useRef({ lastUpdate: Date.now(), lastY: 0, lastX: 0 });
	const scrollData = useRef<ScrollData>({
		directionX: null,
		directionY: null,
		y: 0,
		x: 0,
		speedX: 0,
		speedY: 0,
		atBottom: false,
		atTop: true,
	});

	// Effect must run on each path change because component doesn't dismount when path changes 
	useEffect(() => {
		if (!window) return;
		//Make sure we have a target
		const target = options?.target?.current
			? options.target.current
			: window.document.documentElement;
		const listenToWindow = options?.target === undefined;

		//Save initial coords on first render
		internalData.current.lastY = scrollData.current.y = target.scrollTop;
		internalData.current.lastX = scrollData.current.x = target.scrollLeft;

		//Call callback with initial state
		callback(scrollData.current);
		scrollData.current.atBottom = isScrollBottom(target);
		scrollData.current.atTop = isScrollTop(target);

		const onScroll = () => {
			//Special Cases: TOP and BOTTOM must update every scroll and fire the callback if value changes
			const isAtBottom = isScrollBottom(target);
			const isAtTop = isScrollTop(target);
			if (scrollData.current.atBottom !== isAtBottom) {
				scrollData.current.atBottom = isAtBottom;

				return callback(scrollData.current);
			}
			if (scrollData.current.atTop !== isAtTop) {
				scrollData.current.atTop = isAtTop;
				return callback(scrollData.current);
			}

			//Limit updates per TICK milliseconds
			if (Date.now() - internalData.current.lastUpdate < TICK) return;

			//Calc delta time
			const deltaT = Date.now() - internalData.current.lastUpdate;
			//Update last update timestamp
			internalData.current.lastUpdate = Date.now();

			//Get movement delta
			const deltaY = target.scrollTop - internalData.current.lastY; //If negative direction is up
			const deltaX = target.scrollLeft - internalData.current.lastX; //If negative, direction is left

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
			internalData.current.lastY = scrollData.current.y =
				target.scrollTop;
			internalData.current.lastX = scrollData.current.x =
				target.scrollLeft;

			//Call callback with current data
			callback(scrollData.current);
		};

		if (listenToWindow) {
			window.addEventListener("scroll", onScroll);
		} else {
			target.addEventListener("scroll", onScroll);
		}

		return () => {
			if (listenToWindow) {
				window.removeEventListener("scroll", onScroll);
			} else {
				target.removeEventListener("scroll", onScroll);
			}
		};
	}, [path]);

	return scrollData;
}
