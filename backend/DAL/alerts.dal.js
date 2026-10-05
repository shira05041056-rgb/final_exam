import { ObjectId } from "bson";
import { db } from "../db/db.js";
import { alertStructure } from "../services/utils/alert.model.js";

const alerts = db.collection("alerts");

export async function getAllAlertsDAL() {
    const allAlerts = await alerts.find().toArray();
    return allAlerts;
}

export async function getAlertByIdDAL(id) {
    const alertFound = await alerts.findOne({ _id: ObjectId(id) });
    return alertFound;
}

export async function createAlertDAL({ displayname, description, priority, arena, status, lon, lat }) {
    const user = alertStructure({ displayname, description, priority, arena, status, lon, lat });
    const { insertedId } = await alerts.insertOne(user);
    user._id = insertedId
    return user
}

export async function deletingAlertDAL(id) {
    const deleted = await alerts.deleteOne({_id: ObjectId(id)});
    return deleted
}


export async function updateAlertDAL(id) {
    const update = await alerts.updateOne({_id: ObjectId(id)})
    return update
}