import Divider from "@/components/dividers/Divider";
import { cn } from "@/lib/utilities";

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	divider?: "wave" | "waves";
	dividerClass?: string;
	dividerFillClass?: string;
	dividerFlip?: boolean;
};

export default function Section({
	children,
	className,
	divider,
	dividerClass,
	dividerFillClass,
	dividerFlip,
	...props
}: SectionProps) {
	return (
		<section
			className={cn(
				"relative w-full min-h-[400px] py-14 px-[10vw]",
				className,
			)}
			{...props}>
			{/* If there is a divider, wrap the children with a div to apply z-index */}
			{!divider ? (
				children
			) : (
				<div className="relative z-10">{children}</div>
			)}

			{/* Render the divider if requested */}
			{divider === "wave" && (
				<Divider.wave
					fillClass={dividerFillClass}
					flip={dividerFlip}
					className={dividerClass}
				/>
			)}
			{divider === "waves" && (
				<Divider.waves
					fillClass={dividerFillClass}
					flip={dividerFlip}
					className={dividerClass}
				/>
			)}
		</section>
	);
}
