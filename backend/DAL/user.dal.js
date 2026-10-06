import { ObjectId } from "bson";
import { db } from "../db/db.js";
import { userStructure } from "../services/models/user.model.js";

const users = db.collection("users");

export async function getAllUsersDAL() {
    const allUsers = await users.find().toArray();
    return allUsers;
}

export async function getUserByIdDAL(id) {
    const userFound = await users.findOne({ _id: new ObjectId(id) });
    return userFound;
}

export async function getUserByEmailDAL(email) {
    const userFound = await users.findOne({ email: email });
    return userFound;
}

export async function createUserDAL({ username, password, email, role, assignedArena }) {
    const user = userStructure({ username, password, email, role, assignedArena });
    const { insertedId } = await users.insertOne(user);
    user._id = insertedId
    return user
}

export async function deletingUserDAL(id) {
    const deleted = await users.deleteOne({_id: new ObjectId(id)});
    return deleted
}


export async function updateUserDAL(id, newData) {
    const update = await users.updateOne({_id: new ObjectId(id)}, {$set: newData})
    return update
}