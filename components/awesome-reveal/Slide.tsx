"use client";
import {
	Slide as Revealer,
	SlideProps as RevealProps,
} from "react-awesome-reveal";

/* https://react-awesome-reveal.morello.dev/guides/revealing-effects
Change the name of imported component and its props to get other effects. */

type BasicProps = {
	children: React.ReactNode;
};

/** Wrapper for fade */
export default function Slide(args: BasicProps & RevealProps) {
	const { children, ...props } = args;
	return <Revealer {...props}>{children}</Revealer>;
}
