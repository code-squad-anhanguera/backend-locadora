import { Router } from "express";

import { verifyTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAdmUserMiddleware } from "../middlewares/validateAdmUser.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { movieAlreadyExistsMiddleware } from "../middlewares/movie/movieAlreadyExists.middleware";
import { classificationIdExistsMiddleware } from "../middlewares/movie/classificationIdExists.middleware";

import { movieRequestSerializer } from "../serializers/movie.serializers";

import { createMoviesController, getMoviesController } from "../controllers/movie.controllers";

export const movieRoutes = Router();

movieRoutes.get("", getMoviesController);
movieRoutes.post(
  "",
  verifyTokenMiddleware,
  validateAdmUserMiddleware,
  validateSerializerMiddleware(movieRequestSerializer),
  movieAlreadyExistsMiddleware,
  classificationIdExistsMiddleware,
  createMoviesController
);
