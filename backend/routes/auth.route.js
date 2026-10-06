import express from "express"
import {createUserCtrl, deletingUserCtrl, getAllUsersCtrl, getUserByIdCtrl, loginCtrl, updateUserCtrl} from "../controllers/auth.controller.js"



const router = express.Router()


router.post("/login", loginCtrl)

router.get("/me", getUserByIdCtrl)

router.post("/register", createUserCtrl)

router.delete("/users/:id", deletingUserCtrl)

router.get("/users", getAllUsersCtrl)

export default router