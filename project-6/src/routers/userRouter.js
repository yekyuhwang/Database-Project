import express from "express";
import { joinController, loginController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/join", joinController);
userRouter.get("/login", loginController);

export default userRouter;
