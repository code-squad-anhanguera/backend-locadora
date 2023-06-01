import { Router } from "express";

import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { userAlreadyExistsMiddleware } from "../middlewares/user/userAlreadyExists.middleware";

import { userRequestSerializer } from "../serializers/user.serializers";

import { createUserController, getUsersController } from "../controllers/user.controllers";

export const userRoutes = Router();

userRoutes.get("", getUsersController);
userRoutes.post(
  "",
  validateSerializerMiddleware(userRequestSerializer),
  userAlreadyExistsMiddleware,
  createUserController
);
