import { createUser, deleteUserById, getAllUsers, getUserById, login, updateUser } from "../services/auth.service.js";
import { passwordHash } from "../services/utils/password.js";




export async function createUserCtrl(req, res) {
    const user = req.body;
    const hashPass = await passwordHash(user.password)
    user.password = hashPass
    const validUser = await createUser(user);
    res.status(201).json({
        success: true,
        message: validUser
    });
}

export async function loginCtrl(req, res) {
    const body = req.body;
    const validUser = await login(body);
    res.status(201).json({
        success: true,
        message: validUser
    });
}

export async function getAllUsersCtrl(req, res) {
    const users = await getAllUsers();
    res.json(users);
}

export async function getUserByIdCtrl(req, res) {
    const { id } = req.params;
    const user = await getUserById(id);
    res.json(user);
}
export async function deletingUserCtrl(req, res) {
    const { id } = req.params;
    const user = await deleteUserById(id);
    res.json(user);
}


export async function updateUserCtrl(req, res) {
    const { id } = req.params;
    const newData = req.body;
    const user = await updateUser(id, newData);
    res.json(user);
}


