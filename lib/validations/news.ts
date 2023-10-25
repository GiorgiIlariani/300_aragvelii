import * as z from 'zod'

export const NewsValidation = z.object({
    images: z.array(z.string().url()).nonempty(),
    title: z.string().min(5),
    content: z.string().min(10),
    url: z.string().url(),
});
