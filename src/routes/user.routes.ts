import { Router } from "express";
import { createUserController, getUsersController } from "../controllers/user.controllers";

export const userRoutes = Router();

userRoutes.get("", getUsersController)
userRoutes.get("/:id", () => { })
userRoutes.get("/profile", () => { })
userRoutes.post("", createUserController)
userRoutes.patch("/:id", () => { })
userRoutes.delete("/:id", () => { })
