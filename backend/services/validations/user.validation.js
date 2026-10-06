import { z } from "zod";

const userScheme = z.object({
        username: z.string().min(1, "הזן שם"),
        password: z.string().min(8, "הכנס סיסמה שמכילה לפחות 8 תווים"),
        email: z.email("הזן מייל תקין"),
        role: z.enum(["arena_user", "general_user", "admin"], "הזן דרגה תקינה"),
        assignedArena: z.enum(["North" , "South", "Center", "All"], "הזן איזור תקין"),
})




export {userScheme}