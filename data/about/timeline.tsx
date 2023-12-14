import { FaChild, FaGraduationCap } from "react-icons/fa";

const timeline = [
	{
		date: new Date("2023-06-01"),
		dateText: "January 2023",
		event: "Started at unikim",
		details: "Started working at my family company",
		color: null,
	},
	{
		date: new Date("2013-02-01"),
		dateText: "February 2013",
		event: "Graduated Anadolu University",
		details: "I worked hard (lol) and graduated with highest honors.",
		icon: <FaGraduationCap />,
		color: '#E3651D',
	},
	{
		date: new Date("2015-02-01"),
		dateText: "February 2015",
		event: "Graduated Anadolu University",
		details: "I worked hard (lol) and graduated with highest honors.",
		icon: <FaGraduationCap />,
		color: '#E3651D',
	},
	{
		date: new Date("2014-02-01"),
		dateText: "February 2014",
		event: "Graduated Anadolu University",
		details: "I worked hard (lol) and graduated with highest honors.",
		icon: <FaGraduationCap />,
		color: '#E3651D',
	},
    {
		date: new Date("1987-05-21"),
		dateText: "May 1987",
		event: "Genesis",
		details: "I was born in Istanbul/Turkey on a warm spring morning ",
		icon: <FaChild />,
		color: '#7071E8',
	},
];

export { timeline };
