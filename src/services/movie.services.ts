import { prisma } from "../lib/prisma";

export const getMoviesService = async () => {
  const movies = await prisma.movie.findMany();

  return movies
}

export const createMovieService = async (data: any) => {
  const findMovie = await prisma.movie.findUnique({
    where: {
      name: data.name
    }
  })

  if (findMovie) {
    return false
  }

  const createMovie = await prisma.movie.create({
    data
  })

  return createMovie
}