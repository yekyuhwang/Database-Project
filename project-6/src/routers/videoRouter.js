import express from "express";
import {
  showController,
  uploadController,
  editController,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/show", showController);
videoRouter.get("/upload", uploadController);
videoRouter.get("/edit", editController);

export default videoRouter;
