import { prisma } from "../lib/prisma";

export const getUsersService = async () => {
  const users = await prisma.user.findMany();

  return users
};

export const createUserService = async (data: any) => {
  const findUser = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if (findUser) {
    return false
  }

  const createdUser = await prisma.user.create({
    data
  })

  return createdUser
}