import { Router } from "express";

import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { validateAdmUserMiddleware } from "../middlewares/validateAdmUser.middleware";
import { classificationAlreadyExistsMiddleware } from "../middlewares/classification/classificationAlreadyExists.middleware";

import { classificationRequestSerializer } from "../serializers/classification.serializers";

import { createClassificationController } from "../controllers/classification.controllers";
import { verifyTokenMiddleware } from "../middlewares/validateToken.middleware";

export const classificationRoutes = Router();

classificationRoutes.get("");
classificationRoutes.post(
  "",
  verifyTokenMiddleware,
  validateAdmUserMiddleware,
  validateSerializerMiddleware(classificationRequestSerializer),
  classificationAlreadyExistsMiddleware,
  createClassificationController
);
