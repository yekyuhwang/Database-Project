import express from "express";
import { mainController } from "../controller/globalController";
import dbConnect from "../middleware/dbConnect";

const globalRouter = express.Router();

globalRouter.get("/", dbConnect, mainController);

export default globalRouter;
