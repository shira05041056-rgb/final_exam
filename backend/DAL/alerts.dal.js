import { ObjectId } from "bson";
import { db } from "../db/db.js";
import { alertStructure } from "../services/models/alert.model.js";

const alerts = db.collection("alerts");

export async function getAllAlertsDAL() {
    const allAlerts = await alerts.find().toArray();
    return allAlerts;
}

export async function getAlertByIdDAL(id) {
    const alertFound = await alerts.findOne({ _id: new ObjectId(id) });
    return alertFound;
}

export async function createAlertDAL({ displayName, description, priority, arena, status, lon, lat }) {
    const alert = alertStructure({ displayName, description, priority, arena, status, lon, lat });
    const { insertedId } = await alerts.insertOne(alert);
    user._id = insertedId
    return alert
}

export async function deletingAlertDAL(id) {
    const deleted = await alerts.deleteOne({_id: new ObjectId(id)});
    return deleted
}


export async function updateAlertDAL(id, newData) {
    const update = await alerts.updateOne({_id: new ObjectId(id)}, {$set: newData})
    return update
}