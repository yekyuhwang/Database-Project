import express from "express";
import {
  homeController,
  loginController,
  joinusController,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeController);
globalRouter.get("/login", loginController);
globalRouter.get("/joinus", joinusController);

export default globalRouter;
