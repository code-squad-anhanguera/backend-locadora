import { iMovieRequest } from "../interfaces/movies.interface";
import { prisma } from "../lib/prisma";

export const getMoviesService = async () => {
  const movies = await prisma.movie.findMany();

  return movies
}

export const createMovieService = async ({ name, description, studio, classificationId, genre }: iMovieRequest) => {
  const createMovie = await prisma.movie.create({
    data: {
      name,
      description,
      studio,
      classificationId,
      genre
    }
  });

  return createMovie;
};
