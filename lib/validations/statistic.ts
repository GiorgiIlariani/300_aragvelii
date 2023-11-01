import * as z from 'zod'

export const StatisticValidation = z.object({
    match: z.string(),
    kills: z.string(),
    damage: z.string(),
    survivalTime: z.string(),
})