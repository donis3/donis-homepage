import Image from "next/image";
import MailButton from "./_components/mail-button";
import { getSocials } from "@/core/socials";

export default function ContactPage() {
	const socials = getSocials("link");
    
	return (
		<div className="bg-background text-foreground flex min-h-screen flex-1 flex-col items-center justify-center p-4 pt-(--navbar-height) pb-12">
			<Image
				src="/assets/images/donis-lg.jpg"
				alt="Donis"
				width={128}
				height={128}
				className="my-4 size-32 rounded-full border-4 border-cyan-800 object-cover shadow-lg md:size-48"
			/>
			<h1 className="mb-8 text-center text-4xl font-bold">Contact Me</h1>
			<p className="text-muted-foreground mb-8 max-w-md text-center text-base md:text-lg">
				I&apos;d love to hear from you! Whether you have a question,
				comment, or just want to say hello, feel free to reach out.
			</p>
			<div className="flex w-full max-w-md flex-col space-y-4">
				{socials
					.filter((social) => social.type !== "email")
					.map((social) => (
						<a
							key={social.label}
							href={social.href}
							className="border-border hover:bg-accent hover:text-accent-foreground flex items-center space-x-2 rounded-lg border p-4 transition-colors"
							target={social.type === "link" ? "_blank" : undefined}
							rel={
								social.type === "link"
									? "noopener noreferrer"
									: undefined
							}
						>
							<social.icon className="h-6 w-6" />
							<div>
								<div className="font-semibold">{social.label}</div>
								<div className="text-muted-foreground text-sm">
									{social.description}
								</div>
							</div>
						</a>
					))}
				<MailButton />
			</div>
		</div>
	);
}
