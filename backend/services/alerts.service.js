import { createAlertDAL, deletingAlertDAL, getAlertByIdDAL, getAllAlertsDAL, updateAlertDAL } from "../DAL/alerts.dal.js";
import { errorHendler } from "./utils/errorHendler.js";
import { validate } from "./utils/validate.js";
import { alertScheme } from "./validations/alert.validation.js";

export async function createAlert(body) {
    const validAlert = validate(alertScheme, body);
    
    const alert = await createAlertDAL(validAlert);
    return alert;
}

export async function getAllAlerts() {
    return await getAllAlertsDAL();
}

export async function getAlertById(id) {
    const res = await getAlertByIdDAL(id);
    if (!res) throw errorHendler("alert not defind", 404);
    return res;
}
export async function deleteAlertById(id) {
    const res = await deletingAlertDAL(id);
    if (!res) throw errorHendler("alert not defind", 404);
    return res;
}
export async function updateAlert(id, newData) {
    const res = await updateAlertDAL(id, newData);
    if (!res) throw errorHendler("alert not defind", 404);
    return res
}
