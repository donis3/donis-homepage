import { cn } from "@/lib/utilities";
import React, { FC } from "react";

type TextGradientProps = {
	children: React.ReactNode;
	variant?: "purple" | "red";
	slow?: boolean;
};

const TextGradient: FC<TextGradientProps> = ({
	children,
	variant = "purple",
	slow,
}) => {
	return (
		<span
			className={cn(
				"inline-flex  bg-gradient-to-r  bg-[200%_auto] bg-clip-text text-xl text-transparent",
				slow ? "animate-text-gradient-slow" : "animate-text-gradient",
				variant === "purple" &&
					"from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe]",
				variant === "red" &&
					"from-[#872341] via-[#22092C] to-[#BE3144]",
			)}>
			{children}
		</span>
	);
};

export default TextGradient;
