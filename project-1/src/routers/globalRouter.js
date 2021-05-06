import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);

export default globalRouter;
