import Fade from "@/components/awesome-reveal/Fade";
import Section from "./_homepage/Section";
import Slide from "@/components/awesome-reveal/Slide";
import Bounce from "@/components/awesome-reveal/Bounce";
import Blob from "./_homepage/Blob";
import Hero from "./_homepage/Hero";

export default function Home() {
	return (
		<div className="flex flex-col justify-between min-h-dscreen w-full overflow-x-hidden">
			<main className="flex-1">
				<Hero />

				<Section
					className="bg-primary-200 text-light"
					divider="wave"
					dividerFillClass="fill-primary-100">
					<Fade cascade damping={0.4} duration={2000} triggerOnce>
						<h2 className="font-medium text-lg mb-2">
							Im section 1
						</h2>

						<p className="font-normal text-base leading-tight ">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. A temporibus quis deserunt vel vero odit illum
							doloribus amet magni dolore nulla cum ab architecto
							nemo neque, commodi nisi soluta quo!
						</p>
					</Fade>
				</Section>
				<Section
					className="bg-primary-400"
					divider="wave"
					dividerFillClass="fill-primary-200">
					<Slide>
						<h2 className="font-medium text-lg mb-2">
							Im section 2
						</h2>
						<p className="font-normal text-base leading-tight">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. A temporibus quis deserunt vel vero odit illum
							doloribus amet magni dolore nulla cum ab architecto
							nemo neque, commodi nisi soluta quo!
						</p>
					</Slide>
				</Section>
				<Section
					className="bg-muted-300"
					divider="waves"
					dividerFillClass="fill-primary-400"
					dividerFlip>
					<Bounce>
						<h2 className="font-medium text-lg mb-2">
							Im section 3
						</h2>
						<p className="font-normal text-base leading-tight">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. A temporibus quis deserunt vel vero odit illum
							doloribus amet magni dolore nulla cum ab architecto
							nemo neque, commodi nisi soluta quo!
						</p>
					</Bounce>
				</Section>
			</main>
			<footer className="bg-slate-700/80 text-white p-4 text-sm font-light">
				©2023 Deniz
			</footer>
		</div>
	);
}
