import express from "express";
import routerHome from "./homepage.routes.js"

const routes = express.Router()

routes.use("/home", routerHome);


export default routes;