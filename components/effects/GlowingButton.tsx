import { cn } from "@/lib/utilities";
import React, { FC } from "react";
import { FaHome } from "react-icons/fa";
type GlowingButtonProps = {
	children: React.ReactNode;
	className?: string;
	variant?: "purple" | "red" | "blue";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const GlowingButton: FC<GlowingButtonProps> = ({
	children,
	className,
	variant = "purple",
	...props
}) => {
	return (
		<button
			className="relative inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
			{...props}>
			<span
				className={cn(
					"absolute inset-[-1000%] animate-[spin_2s_linear_infinite]",
					variant === "purple" &&
						"bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
					variant === "red" &&
						"bg-[conic-gradient(from_90deg_at_50%_50%,#D80032_0%,#3D0C11_50%,#C63D2F_100%)]",
					variant === "blue" &&
						"bg-[conic-gradient(from_90deg_at_50%_50%,#80B3FF_0%,#B6FFFA_50%,#687EFF_100%)]",
				)}
			/>
			<span
				className={cn(
					"inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full  px-3 py-1 text-sm font-medium  backdrop-blur-3xl  transition-color duration-500",
					className,
				)}>
				{children}
			</span>
		</button>
	);
};

export default GlowingButton;
