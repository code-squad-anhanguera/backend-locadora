import { Request, Response } from "express";
import { createMovieService, getMoviesService } from "../services/movie.services";

export const getMoviesController = async (req: Request, res: Response) => {
  const data = await getMoviesService();

  return res.status(200).json(data);
}

export const createMoviesController = async (req: Request, res: Response) => {
  const data = await createMovieService(req.body);

  if (!data) return res.status(401).json({ message: "Movie already created" })

  return res.status(201).json(data)
}