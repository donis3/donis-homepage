import { cn } from "@/lib/utilities";
import Blob from "./Blob";
import Fade from "@/components/awesome-reveal/Fade";
import Link, { LinkProps } from "next/link";

export default function Hero() {
	return (
		<section className="w-full bg-gradient-to-b from-primary-400 to-primary-100  relative pt-[var(--navbar-h)] text-muted-800 pb-20 to-90%">
			<div className="grid gap-2 md:gap-10  grid-flow-row md:grid-cols-12 py-4 px-4 md:py-20 md:px-10 container mx-auto ">
				<div className="min-h-[30px] md:col-span-7 lg:col-span-5 lg:col-start-3 flex flex-col justify-center items-center md:items-start">
					<Fade delay={400} duration={1000} triggerOnce>
						<h1 className="text-4xl font-bold mb-2">Deniz Özkan</h1>
					</Fade>
					<Fade delay={1000} duration={2000} triggerOnce>
						<p className="max-w-sm text-lg">
							An aspiring fullstack developer, computer enthusiast
							and a lifelong learner. Please browse the other
							sections to learn more
							{process.env.NEXT_PUBLIC_DEV_GITHUB && (
								<>
									{" "}
									or visit my{" "}
									<Link
										href={
											process.env.NEXT_PUBLIC_DEV_GITHUB
										}
										target="_blank"
										className="underline">
										github
									</Link>{" "}
									profile.
								</>
							)}
						</p>
						<div className=" py-4 mt-10 flex justify-center gap-4 ">
							<HeroLink href={"/projects"} variation="accent">
								Projects
							</HeroLink>
							<HeroLink href={"/about"} variation="outline">
								About Deniz
							</HeroLink>
						</div>
					</Fade>
				</div>
				<div className="  min-h-[30px] order-first md:order-last flex justify-center items-start  md:col-span-5 ">
					<Blob duration={10000} />
				</div>
			</div>
		</section>
	);
}

interface ButtonProps extends LinkProps {
	//Custom Props Here
	variation: "accent" | "outline";
	children: React.ReactNode;
}

function HeroLink({
	variation = "accent",
	children,

	href,
	...props
}: ButtonProps) {
	return (
		<Link
			className={cn(
				" px-4 py-2 rounded-md  select-none text-xl font-medium  transition-colors duration-500",
				variation === "accent" &&
					"bg-accent-300 active:bg-accent-200 hover:bg-accent-500",
				variation === "outline" &&
					"border border-primary-700 hover:bg-primary-300 active:bg-primary-200",
			)}
			href={href}
			draggable={false}
			{...props}>
			{children}
		</Link>
	);
}
