import { errorHendler } from "./errorHendler.js";


export function validate(schema, body) {
    const res = schema.safeParse(body)
    if (!res.success){
        throw errorHendler(res.error.issues[0]?.message, 400)
    }
    return res.data
    
}
