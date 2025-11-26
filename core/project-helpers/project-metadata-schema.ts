import z from "zod/v4";

/* Sample Front Matter:
title: VibeVenue - Event Kiosk Software
description: A comprehensive company website showcasing VibeVenue's web-based kiosk software for events and venues. Features interactive kiosks with games, AI photobooths, and more. Built with Next.js 16, Tailwind CSS 4, Drizzle ORM, SQLite, Auth.js, Google OAuth, and AWS SES.
keywords: event kiosk, venue software, web kiosk, AI photobooth, interactive games, Next.js, Tailwind CSS, Drizzle ORM, SQLite, Auth.js, Google OAuth, AWS SES
author: Deniz
date: 2025-11-26
*/

export const projectMetadataSchema = z.object({
	title: z.string().optional(),
	description: z.string().default(""),
	keywords: z
		.string()
		.transform((str) => str.split(",").map((kw) => kw.trim()))
		.optional(),
	author: z.string().default("Deniz Özkan"),
	date: z.coerce.date().default(new Date()),
});


export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;