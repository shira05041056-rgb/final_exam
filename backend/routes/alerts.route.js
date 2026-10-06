import express from "express"
import { createAlertCtrl, getAllAlertsCtrl, getAlertByIdCtrl, deletingAlertCtrl, updateAlertCtrl } from "../controllers/alerts.controller.js";




const router = express.Router()


router.get("/", getAllAlertsCtrl)

router.get("/:id", getAlertByIdCtrl)

router.post("/", createAlertCtrl)

router.delete("/:id", deletingAlertCtrl)

router.put("/:id", updateAlertCtrl)

export default router