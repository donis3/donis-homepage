export type BlogType = {
	id: string;
	title: string;
	date: Date;
	readDuration: number;
	link?: {href: string, text: string};
	cover?: string;
	description?: string;
};
