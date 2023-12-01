import { cn } from "@/lib/utilities";
import Blob from "./Blob";
import Fade from "@/components/awesome-reveal/Fade";

export default function Hero() {
	return (
		<section className="w-full bg-gradient-to-b from-primary-400 to-primary-100  relative pt-[var(--navbar-h)] text-muted-800 pb-20 to-90%">
			<div className="grid gap-2 md:gap-10  grid-flow-row md:grid-cols-12 py-4 px-4 md:py-20 md:px-10 container mx-auto ">
				<div className="min-h-[30px] md:col-span-7 lg:col-span-5 lg:col-start-3 flex flex-col justify-center items-center md:items-start">
					<Fade delay={400}  duration={1000} triggerOnce>
						<h1 className="text-3xl font-bold mb-2">Deniz Özkan</h1>
					</Fade>
					<Fade delay={1000} duration={3000} triggerOnce>
						<p className="max-w-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Explicabo, incidunt totam? Quam alias, debitis
							provident vero, dolorem rerum fugit minus quo dolor
							pariatur eveniet aperiam, illum voluptatibus
							consequatur ipsam itaque.
						</p>
						<div className=" py-4 mt-10 flex justify-center gap-4">
							<HeroButton variation="accent">Action</HeroButton>
							<HeroButton variation="outline">Action</HeroButton>
						</div>
					</Fade>
				</div>
				<div className="  min-h-[30px] order-first md:order-last flex justify-center items-start  md:col-span-5 ">
					<Blob />
				</div>
			</div>
		</section>
	);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	//Custom Props Here
	variation: "accent" | "outline";
}

function HeroButton({
	variation = "accent",
	children,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				" px-4 py-2 rounded-md  select-none text-lg font-medium  transition-colors duration-500",
				variation === "accent" &&
					"bg-accent active:bg-accent-200 hover:bg-accent-300",
				variation === "outline" &&
					"border border-primary-700 hover:bg-primary-300 active:bg-primary-200",
				className,
			)}
			type="button"
			draggable={false}
			{...props}>
			{children}
		</button>
	);
}
