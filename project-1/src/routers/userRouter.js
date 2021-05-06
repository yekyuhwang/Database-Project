import express from "express";
import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/login", userController.loginController);
userRouter.get("/joinus", userController.joinusController);
userRouter.get("/profile", userController.profileController);
userRouter.get("/userEdit", userController.userEditController);

export default userRouter;
