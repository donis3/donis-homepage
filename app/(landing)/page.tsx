import About from "./_components/about";
import CallToAction from "./_components/call-to-action";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

export default function LandingPage() {
	return (
		<>
			<main className="relative z-0 flex flex-1 flex-col">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<CallToAction />
			</main>
		</>
	);
}
