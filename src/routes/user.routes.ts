import { Router } from "express";
import { createUserController, getUsersController } from "../controllers/user.controllers";

export const userRoutes = Router();

userRoutes.get("", getUsersController)
userRoutes.post("", createUserController)
