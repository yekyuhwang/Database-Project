import express from "express";
import {
  mainController,
  page1Controller,
  page2Controller,
} from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get("/", mainController);
homeRouter.get("/page1", page1Controller);
homeRouter.get("/page2", page2Controller);

export default homeRouter;
