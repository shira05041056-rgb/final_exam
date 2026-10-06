import JWT from "jsonwebtoken"

export function generateToken(data){
    const token = JWT.sign(data, process.env.SECRET_KEY_TOKEN, { expiresIn: '1h' } )
    return token
}


export function verifyToken(token){
    const data = JWT.verify(token, process.env.SECRET_KEY_TOKEN)
    return data
}

