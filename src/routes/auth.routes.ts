import { Router } from "express";

import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { validateLoginMiddleware } from "../middlewares/auth/validateLogin.middleware";

import { userLoginSerializer } from "../serializers/user.serializers";

import { authController } from "../controllers/auth.controllers";

export const authRoutes = Router();

authRoutes.post(
  "",
  validateSerializerMiddleware(userLoginSerializer),
  validateLoginMiddleware,
  authController
);
