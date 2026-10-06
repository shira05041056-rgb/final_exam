
import { createUserDAL, deletingUserDAL, getAllUsersDAL, getUserByEmailDAL, getUserByIdDAL, updateUserDAL } from "../DAL/user.dal.js";
import { errorHendler } from "./utils/errorHendler.js";
import { generateToken } from "./utils/generateTokn.js";
import { comparePass } from "./utils/password.js";
import { validate } from "./utils/validate.js";
import { userScheme } from "./validations/user.validation.js";

export async function createUser(body) {
    const validUser = validate(userScheme, body);
    const user = await getUserByEmailDAL(validUser);
    if (user) throw errorHendler("משתמש עם מייל זה כבר קיים במערכת", 401);
    const newUser = await createUserDAL(validUser);
    return newUser;
}

export async function login(body) {    
    const user = await getUserByEmailDAL(body.email);
    if (!user) throw errorHendler("האימייל או הסיסמה אינם נכונים.", 401);
    const token = generateToken(user)
    const goodPass = await comparePass(body.password, user.password);
    if (!goodPass) throw errorHendler("האימייל או הסיסמה אינם נכונים.", 401);
    delete user.password
    return token;
}

export async function getAllUsers() {
    return await getAllUsersDAL();
}

export async function getUserById(id) {
    const res = await getUserByIdDAL(id);
    if (!res) throw errorHendler("User not defind", 404);
    return res;
}
export async function deleteUserById(id) {
    const res = await deletingUserDAL(id);
    if (!res) throw errorHendler("User not defind", 404);
    return res;
}
export async function updateUser(id, newData) {
    const res = await updateUserDAL(id, newData);
    if (!res) throw errorHendler("User not defind", 404);
    return res;
}
