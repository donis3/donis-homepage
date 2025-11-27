import { LuGithub, LuMail, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export type SocialItem = {
	label: string;
	description: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	isActive?: boolean;
} & ({ type: "link"; href: string } | { type: "email"; email: string });

export const socials: SocialItem[] = [
	{
		type: "link",
		label: "GitHub",
		description: "Check out my GitHub profile",
		href: "https://github.com/donis3",
		icon: LuGithub,
	},
	{
		type: "email",
		label: "Email",
		description: "Send me an email",
		email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
		icon: LuMail,
		isActive: true,
	},
	{
		type: "link",
		label: "LinkedIn",
		description: "Connect with me on LinkedIn",
		href: "https://www.linkedin.com/in/donisdev",
		icon: LuLinkedin,
		isActive: false,
	},
	{
		type: "link",
		label: "Twitter",
		description: "Follow me on Twitter",
		href: "https://x.com/DonisDev",
		icon: FaXTwitter,
	},
];

export function getSocials(type?: "link" | "email"): SocialItem[] {
	if (type && ["link", "email"].includes(type)) {
		return socials.filter(
			(social) => social.type === type && social?.isActive !== false,
		);
	}
	return socials.filter((social) => social?.isActive !== false);
}

export function getSocialByLabel(label: string): SocialItem | undefined {
	return socials.find(
		(social) =>
			social.label.toLowerCase() === label.toLowerCase() &&
			social?.isActive !== false,
	);
}
