import z from "zod/v4";

/* Sample Front Matter:
title: VibeVenue - Event Kiosk Software
description: A comprehensive company website showcasing VibeVenue's web-based kiosk software for events and venues. Features interactive kiosks with games, AI photobooths, and more. Built with Next.js 16, Tailwind CSS 4, Drizzle ORM, SQLite, Auth.js, Google OAuth, and AWS SES.
keywords: event kiosk, venue software, web kiosk, AI photobooth, interactive games, Next.js, Tailwind CSS, Drizzle ORM, SQLite, Auth.js, Google OAuth, AWS SES
author: Deniz
date: 2025-11-26
tags: [Next.js, SPA, Zustand, Dart, Mobile App]
*/

export const projectMetadataSchema = z.object({
	title: z.string().optional(),
	/* A brief description for SEO purposes (70-155 characters) */
	description: z
		.string()
		.min(70, { error: "Description must be at least 70 characters" })
		.max(155, { error: "Description cannot exceed 155 characters" }),
	/* Comma-separated keywords for SEO */
	keywords: z
		.string()
		.transform((str) => str.split(",").map((kw) => kw.trim()))
		.optional(),
	/* Author name */
	author: z.string().default("Deniz Özkan"),
	/* Publication date */
	date: z.coerce.date().default(new Date()),
	/* Tags for categorization. Keep consistent with other projects */
	tags: z.array(z.string()).default([]),
	/* Whether to feature this project on the homepage */
	isFeatured: z.coerce.boolean().default(false),
	/* Order for featured projects (lower number = higher priority) */
	featureOrder: z.coerce.number().default(100),
	/* A short description used in project listings */
	shortTitle: z.string().min(1, { error: "Short title cannot be empty" }),
	/* A short description used in project listings */
	shortDescription: z
		.string()
		.min(1, { error: "Short description cannot be empty" }),
	/* Technologies used in the project */
	techStack: z.array(z.string().trim().min(1)).default([]),
	/* URLs */
	githubUrl: z.url().optional(),
	projectUrl: z.url().optional(),
});

export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;
