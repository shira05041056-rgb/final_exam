import { z } from "zod";

const alertScheme = z.object({
        displayName: z.string().min(1, "הזן שם התראה"),
        description: z.string().min(1, "הזן תיאור התראה"),
        priority: z.enum(["Low" , "Medium", "High", "Critical"], "הזן רמת דחיפות"),
        arena: z.enum(["North" , "South", "Center"], "הזן איזור התראה"),
        status: z.enum(["Active" , "Handled"], "הזן סטטוס"),
        lon: z.number().min(1, "הזן נקודת אורך"),
        lat: z.number().min(1, "הזן נקודת רוחב")
})


export {alertScheme}