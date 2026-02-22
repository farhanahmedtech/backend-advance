import express, { Router } from "express"
import { signup } from "../controllers/auth.controllers"

const authRouter = express.Router()

authRouter.post("/signup", signup)

export default authRouter