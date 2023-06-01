import { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors";

export const movieAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  const findMovie = await prisma.movie.findUnique({
    where: {
      name
    }
  });

  if (findMovie) {
    throw new AppError("This movie already exists", 409);
  };

  next();
};
