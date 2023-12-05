import Section from "./_homepage/Section";
import Slide from "@/components/awesome-reveal/Slide";
import Hero from "./_homepage/Hero";
import Skills from "./_homepage/Skills";
import ProjectSlider from "./_homepage/ProjectSlider";

export default function Home() {
	return (
		<div className="flex flex-col justify-between min-h-dscreen w-full overflow-x-hidden">
			<main className="flex-1">
				<Hero />
				<Section
					className="bg-primary-800 bg-repeat"
					divider="wave"
					dividerFillClass="fill-primary-100"
					dividerFlip>
					<Skills />
				</Section>
				<Section
					className="bg-primary-200 text-light"
					divider="wave"
					dividerFillClass="fill-primary-800">
					<ProjectSlider />
				</Section>
				<Section
					className="bg-light-400"
					divider="wave"
					dividerFillClass="fill-primary-200"
					dividerFlip>
					<Slide>
						<h2 className="font-medium text-lg mb-2">Contact Me</h2>
						<p className="font-normal text-base leading-tight">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. A temporibus quis deserunt vel vero odit illum
							doloribus amet magni dolore nulla cum ab architecto
							nemo neque, commodi nisi soluta quo!
						</p>
					</Slide>
				</Section>
			</main>
			<footer className="bg-slate-700/80 text-white p-4 text-sm font-light">
				{/* Color Showcase */}
				<div className="py-3">
					<h3>Colors</h3>
					<div className="grid grid-cols-5 gap-4">
						<div className="bg-primary text-white p-4">Primary</div>
						<div className="bg-secondary-600 text-white p-4">
							Secondary-600
						</div>
						<div className="bg-accent text-white p-4">Accent</div>
						<div className="bg-light-300 text-black p-4">
							Light-300
						</div>
						<div className="bg-muted text-black p-4">muted</div>
					</div>
				</div>
				©2023 Deniz
			</footer>
		</div>
	);
}
