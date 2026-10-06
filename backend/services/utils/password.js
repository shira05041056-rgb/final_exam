import bcrypt from "bcrypt"

export async function passwordHash(password){
    const hashPass = await bcrypt.hash(password, 10)
    return hashPass
}

export async function comparePass(password, hashPass){
    const goodPass = await bcrypt.compare(password, hashPass)
    return goodPass
}