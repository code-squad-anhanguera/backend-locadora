import { Router } from "express";
import { createMoviesController, getMoviesController } from "../controllers/movie.controllers";

export const movieRoutes = Router();

movieRoutes.get("", getMoviesController)
movieRoutes.post("", createMoviesController)