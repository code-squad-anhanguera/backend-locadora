import { Request, Response } from "express";
import { createMovieService, deleteMovieService, getMoviesService, getOneMovieService, updateMovieService } from "../services/movie.services";

export const createMoviesController = async (req: Request, res: Response) => {
  const data = await createMovieService(req.body);

  return res.status(201).json(data)
};

export const getMoviesController = async (req: Request, res: Response) => {
  const data = await getMoviesService();

  return res.status(200).json(data);
};

export const getOneMovieController = async (req: Request, res: Response) => {
  const findMovie = req.movie;

  const data = await getOneMovieService(findMovie);

  return res.status(200).json(data);
};

export const updateMovieController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const findMovie = req.movie;

  const body = req.body;

  const data = await updateMovieService(id, body, findMovie);

  return res.status(200).json(data);
};

export const deleteMovieController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteMovieService(id);

  return res.status(204).json();
};
