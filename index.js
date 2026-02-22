import express from "express"
import dbConnect from "./config/db.js"
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js"
dotenv.config()
const app = express()

let port=process.env.PORT || 1000

app.use("/api", authRouter)

app.listen(port, () => {
  dbConnect()
})