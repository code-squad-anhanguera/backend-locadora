import { Router } from "express";

import { verifyTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAdmUserMiddleware } from "../middlewares/validateAdmUser.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { movieAlreadyExistsMiddleware } from "../middlewares/movie/movieAlreadyExists.middleware";
import { classificationIdExistsMiddleware } from "../middlewares/movie/classificationIdExists.middleware";
import { validateMovieIdMiddleware } from "../middlewares/movie/validateMovieId.middleware";

import { movieRequestSerializer, movieUpdateSerializer } from "../serializers/movie.serializers";

import { createMoviesController, deleteMovieController, getMoviesController, getOneMovieController, updateMovieController } from "../controllers/movie.controllers";

export const movieRoutes = Router();

movieRoutes.post(
  "",
  verifyTokenMiddleware,
  validateAdmUserMiddleware,
  validateSerializerMiddleware(movieRequestSerializer),
  movieAlreadyExistsMiddleware,
  classificationIdExistsMiddleware,
  createMoviesController
);
movieRoutes.get("", getMoviesController);
movieRoutes.get(
  "/:id",
  verifyTokenMiddleware,
  validateMovieIdMiddleware,
  getOneMovieController
);
movieRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  validateAdmUserMiddleware,
  validateSerializerMiddleware(movieUpdateSerializer),
  validateMovieIdMiddleware,
  updateMovieController
);
movieRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  validateAdmUserMiddleware,
  validateMovieIdMiddleware,
  deleteMovieController
);
