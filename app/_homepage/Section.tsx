import Divider from "@/components/dividers/Divider";
import { cn } from "@/lib/utilities";

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	divider?: "wave" | "waves" | "waves2";
	dividerClass?: string;
	dividerFillClass?: string;
	dividerFlip?: boolean;
	fillColors?: string[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Section({
	children,
	className,
	divider,
	dividerClass,
	dividerFillClass,
	dividerFlip,
	fillColors,
	...props
}: SectionProps) {
	return (
		<section
			className={cn(
				"relative w-full min-h-[400px] py-24 px-4 md:px-[10vw] flex-1",
				className,
			)}
			{...props}>
			{/* If there is a divider, wrap the children with a div to apply z-index */}
			{/* {!divider ? (
				children
			) : (
				<div className="relative z-10">{children}</div>
			)} */}
			<div className="relative z-10 container mx-auto">{children}</div>

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

			{divider === "waves2" && (
				<Divider.waves2
					fillClass={dividerFillClass}
					flip={dividerFlip}
					className={dividerClass}
					fillColors={fillColors}
				/>
			)}
		</section>
	);
}
