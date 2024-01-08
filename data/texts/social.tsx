import {
	FaDev,
	FaEnvelope,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

const social = [
	{
		id: "email",
		text: [
			process.env.NEXT_PUBLIC_DEV_MAIL_USER,
			process.env.NEXT_PUBLIC_DEV_MAIL_PROVIDER,
		].join("@"),
		icon: <FaEnvelope />,
		data:
			"mailto:" +
			[
				process.env.NEXT_PUBLIC_DEV_MAIL_USER,
				process.env.NEXT_PUBLIC_DEV_MAIL_PROVIDER,
			].join("@"),
	},
	{
		id: "x",
		text: "Twitter",
		icon: <FaTwitter />,
		data: process.env.NEXT_PUBLIC_DEV_x,
	},
	{
		id: "linkedin",
		text: "LinkedIn",
		icon: <FaLinkedin />,
		data: process.env.NEXT_PUBLIC_DEV_LINKEDIN,
	},
	{
		id: "instagram",
		text: "Instagram",
		icon: <FaInstagram />,
		data: process.env.NEXT_PUBLIC_DEV_INSTAGRAM,
	},
	// {
	// 	id: "facebook",
	// 	text: "Facebook",
	// 	icon: <FaFacebook />,
	// 	data: process.env.NEXT_PUBLIC_DEV_FACEBOOK,
	// },
	{
		id: "github",
		text: "GitHub",
		icon: <FaGithub />,
		data: process.env.NEXT_PUBLIC_DEV_GITHUB,
	},
	{
		id: "devto",
		text: "Dev.to",
		icon: <FaDev />,
		data: process.env.NEXT_PUBLIC_DEV_DEVTO,
	},
];

export { social };
