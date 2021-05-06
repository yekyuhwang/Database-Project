import express from "express";
import {
  loginController,
  joinusController,
  profileController,
  editController,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/login", loginController);
userRouter.get("/joinus", joinusController);
userRouter.get("/profile", profileController);
userRouter.get("/edit", editController);

export default userRouter;
