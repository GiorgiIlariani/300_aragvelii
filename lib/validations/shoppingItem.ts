import * as z from 'zod'

export const shoppingItemValidation = z.object({
    category: z.string().refine(value => value.trim() !== '', {
        message: 'Category is required and cannot be empty.',
    }),
    images:  z.array(z.string().url()).nonempty({
        message: 'Please provide at least one valid image URL.',
    }),
    title: z.string().refine(value => value.trim() !== '', {
        message: 'Title is required and cannot be empty.',
    }),
    price: z.string().refine(value => /^\d+(\.\d{1,2})?$/.test(value), {
        message: 'Price must be a valid numerical value with up to two decimal places.',
    }),
    description: z.string().refine(value => value.trim() !== '', {
        message: 'Description is required and cannot be empty.',
    }),
    isOutOfStock: z.string().refine(value => ['In Stock', 'Is Out Of Stock'].includes(value), {
        message: 'isOutOfStock must be either "In Stock" or "Is Out Of Stock".',
    }),
});
