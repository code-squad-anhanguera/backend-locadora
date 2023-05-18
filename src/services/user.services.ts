import { prisma } from "../lib/prisma";
import { userResponseListSerializer, userResponseSerializer } from "../serializers/user.serializers";

export const getUsersService = async () => {
  const users = await prisma.user.findMany();

  const validatedUsers = userResponseListSerializer.validate(users, {
    stripUnknown: true
  })

  return validatedUsers
};

export const createUserService = async (data: any) => {
  const createdUser = await prisma.user.create({
    data
  })

  const validatedUser = userResponseSerializer.validate(createdUser, {
    stripUnknown: true
  })

  return validatedUser
}