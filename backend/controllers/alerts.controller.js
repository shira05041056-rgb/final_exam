import { createAlert, getAlertById, getAllAlerts, deleteAlertById, updateAlert } from "../services/alerts.service.js";




export async function createAlertCtrl(req, res) {
    const alert = req.body;
    const validAlert = await createAlert(alert);
    res.status(201).json({
        success: true,
        message: validAlert
    });
}

export async function getAllAlertsCtrl(req, res) {
    const alerts = await getAllAlerts();
    res.json(alerts);
}

export async function getAlertByIdCtrl(req, res) {
    const { id } = req.params;
    const alert = await getAlertById(id);
    res.json(alert);
}
export async function deletingAlertCtrl(req, res) {
    const { id } = req.params;
    const alert = await deleteAlertById(id);
    res.json(alert);
}


export async function updateAlertCtrl(req, res) {
    const { id } = req.params;
    const newData = req.body;
    const alert = await updateAlert(id, newData);
    res.json(alert);
}


