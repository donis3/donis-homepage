import {
	FaCanadianMapleLeaf,
	FaChild,
	FaCode,
	FaMoneyBillAlt,
	FaVial,
} from "react-icons/fa";

import { BsCpu, BsFillTriangleFill } from "react-icons/bs";
import { FaMobileScreenButton } from "react-icons/fa6";

const timeline = [
    {
		date: new Date("2025-11-01"),
		dateText: "2023 - Now",
		event: "VibeVenue - Co-Founder & CTO",
		details: "Developing kiosk games and Ai experiences for social events!",
		icon: <FaMobileScreenButton />,
		color: "#ab10b0",
	},
	{
		date: new Date("2023-09-01"),
		dateText: "2023-2025",
		event: "Computer Programming 🎓",
		details: "Associate Degree - Anadolu University",
		icon: <BsCpu />,
		color: "#2D3250",
	},
	{
		date: new Date("2007-09-01"),
		dateText: "2007-2013",
		event: "Business Administration 🎓",
		details: "Bachelor's Degree - Anadolu University",
		icon: <FaMoneyBillAlt />,
		color: "#6A9C89",
	},
	{
		date: new Date("2004-09-01"),
		dateText: "2004 (Incomplete)",
		event: "Chemistry",
		details: "Completed 62 credits - Yıldız Technical University",
		icon: <FaVial />,
		color: "#7A316F",
	},
	{
		date: new Date("2007-05-01"),
		dateText: "2006 (Incomplete)",
		event: "Computer Science",
		details:
			"Attended 2 semesters - University of Ontario Institute of Technology (UOIT)",
		icon: <FaCanadianMapleLeaf />,
		color: "#cc0000",
	},
	{
		date: new Date("2017-09-01"),
		dateText: "2017-2023",
		event: "Web Design and Development 🎓",
		details: "Associate Degree - Anadolu University",
		icon: <FaCode />,
		color: undefined,
	},
	{
		date: new Date("2008-10-01"),
		dateText: "2008 - Now",
		event: "IT Specialist and Web Developer",
		details: "Unikim Fertilizers",
		icon: <BsFillTriangleFill />,
		color: "#0766AD",
	},

	{
		date: new Date("1987-05-21"),
		dateText: "May 1987",
		event: "Genesis",
		details: "I was born in Istanbul/Turkey on a warm spring morning ",
		icon: <FaChild />,
		color: "#219C90",
	},
];

export type TimelineItem = (typeof timeline)[number];

export { timeline };
