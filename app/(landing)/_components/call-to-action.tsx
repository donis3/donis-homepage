import Link from "next/link";
import { LuMail, LuMessageCircle } from "react-icons/lu";

export default function CallToAction() {
	return (
		<section className="px-4 py-16">
			<div className="container mx-auto text-center">
				<h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
					Let&apos;s Work Together
				</h2>
				<p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
					Have a project in mind? I&apos;d love to hear about it and
					discuss how we can bring your ideas to life.
				</p>

				<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Link
						href={"/contact"}
						className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
					>
						<LuMail className="h-4 w-4" />
						Get In Touch
					</Link>
					<Link
						href="/about"
						className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors"
					>
						<LuMessageCircle className="h-4 w-4" />
						Learn More About Me
					</Link>
				</div>
			</div>
		</section>
	);
}
