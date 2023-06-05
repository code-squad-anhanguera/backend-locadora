import { Movie } from "@prisma/client";
import { AppError } from "../errors";
import { iMovieRequest, iMovieUpdate } from "../interfaces/movies.interface";
import { prisma } from "../lib/prisma";

export const createMovieService = async (data: iMovieRequest) => {
  const createMovie = await prisma.movie.create({
    data
  });

  return createMovie;
};

export const getMoviesService = async () => {
  const movies = await prisma.movie.findMany();

  return movies
};

export const getOneMovieService = async (findMovie: Movie) => {
  return findMovie;
};

export const updateMovieService = async (id: string, data: iMovieUpdate, findMovie: Movie) => {
  const formatedData = {
    name: data.name ?? findMovie.name,
    description: data.description ?? findMovie.description,
    studio: data.studio ?? findMovie.studio,
    classificationId: data.classificationId ?? findMovie.classificationId,
    genre: data.genre ?? findMovie.genre
  }

  const updatedMovie = await prisma.movie.update({
    where: {
      id
    },
    data: {
      ...formatedData
    }
  });

  return updatedMovie;
};

export const deleteMovieService = async (id: string) => {
  await prisma.movie.delete({ where: { id } })
};
