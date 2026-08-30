import z from "zod/v4";

export const changelogItemSchema = z.object({
	title: z.string().optional(),
	body: z.string().min(1, { error: "Changelog item cannot be empty" }),
});

export const changelogEntrySchema = z.object({
	version: z.string().min(1, { error: "Version cannot be empty" }),
	date: z.coerce.date().optional(),
	items: z.array(changelogItemSchema).min(1),
});

export const changelogSchema = z.array(changelogEntrySchema);

export type ChangelogItem = z.infer<typeof changelogItemSchema>;
export type ChangelogEntry = z.infer<typeof changelogEntrySchema>;
