import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Schema for blog collection, consistent with Decap CMS structure
	schema: z.object({
		title: z.string().max(60, "Maximize SEO with a shorter title!"),
		description: z.string().max(160, "Meta descriptions should be catchy and brief."),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional().default("/placeholder.jpg"),
		category: z.string().optional().default("Tecnologia"),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };
