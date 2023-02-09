import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        publishDate: z.string().transform((value) => new Date(value)),
        author: z.string(),
    })
});

export const collections = {
    posts: blogCollection,
}