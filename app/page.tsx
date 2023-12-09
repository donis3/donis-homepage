import Section from "./_homepage/Section";

import Hero from "./_homepage/Hero";
import Skills from "./_homepage/Skills";
import ProjectSlider from "./_homepage/ProjectSlider";
import Contact from "./_homepage/Contact";

export default function Home() {
	return (
		<>
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
				id="contact_form"
				className="bg-light-400 px-2"
				divider="wave"
				dividerFillClass="fill-primary-200"
				dividerFlip>
				<Contact />
			</Section>
		</>
	);
}
