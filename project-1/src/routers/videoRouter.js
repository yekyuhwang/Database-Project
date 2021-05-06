import express from "express";
import videoController from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/view", videoController.viewController);
videoRouter.get("/uploads", videoController.uploadsController);
videoRouter.get("/videoEdit", videoController.videoEditController);

export default videoRouter;
