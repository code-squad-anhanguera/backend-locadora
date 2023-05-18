import { Router } from "express";
import { createUserController, getUsersController } from "../controllers/user.controllers";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { userRequestSerializer } from "../serializers/user.serializers";
import { userAlreadyExistsMiddleware } from "../middlewares/user/userAlreadyExists.middleware";

export const userRoutes = Router();

userRoutes.get("", getUsersController)
userRoutes.post("", validateSerializerMiddleware(userRequestSerializer), userAlreadyExistsMiddleware, createUserController)
