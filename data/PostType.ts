export type PostType = {
	id: string;
	title: string;
	date: Date;
	link?: { href: string; text: string };
	cover?: string;
	description?: string;
	readingTime?: {
		text: string;
		minutes: number;
		time: number;
		words: number;
	};
};

export type PostMetaDataType = {
	title: string;
	description: string;
}