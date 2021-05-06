import express from "express";
import {
  page1Controller,
  page2Controller,
  page3Controller,
} from "../controllers/pageController";

const pageRouter = express.Router();

pageRouter.get("/page1", page1Controller);
pageRouter.get("/page2", page2Controller);
pageRouter.get("/page3", page3Controller);

export default pageRouter;
