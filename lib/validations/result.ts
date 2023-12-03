import * as z from 'zod'

export const resultsValidation = z.object({
    image: z.string(),
    title: z.string().min(5),
    content: z.string().min(10),
    date: z.string(),
});
