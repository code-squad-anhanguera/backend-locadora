import { Router } from "express";
import { createMoviesController, getMoviesController } from "../controllers/movie.controllers";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { movieRequestSerializer } from "../serializers/movie.serializers";
import { movieAlreadyExistsMiddleware } from "../middlewares/movie/movieAlreadyExists.middleware";
import { classificationIdExistsMiddleware } from "../middlewares/movie/classificationIdExists.middleware";

export const movieRoutes = Router();

movieRoutes.get("", getMoviesController)
movieRoutes.post(
  "",
  validateSerializerMiddleware(movieRequestSerializer),
  movieAlreadyExistsMiddleware,
  classificationIdExistsMiddleware,
  createMoviesController
)