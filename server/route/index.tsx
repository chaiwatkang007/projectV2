import { Router } from "express"
import userRoute from "./users.route"
import authRoute from "./auth.route"
import tempRoute from "./temp.route"
import logRoute from "./log.route"
import clientRoute from "./client.route"
import ParacetamolssRoute from "./paracetamolss.route"


const baseRouter: Router = Router()

baseRouter.use("/api/user", userRoute)
baseRouter.use("/api/auth", authRoute)
baseRouter.use("/api/temp", tempRoute)
baseRouter.use("/api/log", logRoute)
baseRouter.use("/api/client", clientRoute)
baseRouter.use("/api/para", ParacetamolssRoute)


export default baseRouter