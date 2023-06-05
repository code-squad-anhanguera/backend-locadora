import { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors";

export const validateMovieIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id) {
    throw new AppError("Id is missing", 400)
  }

  const findMovie = await prisma.movie.findUnique({ where: { id } });

  if (!findMovie) {
    throw new AppError("Movie not found", 404)
  }

  req.movie = findMovie;

  next();
};
