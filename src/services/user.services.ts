import { hash } from "bcryptjs";
import { iUserRequest } from "../interfaces/user.interface";
import { prisma } from "../lib/prisma";
import { userResponseListSerializer, userResponseSerializer } from "../serializers/user.serializers";

export const getUsersService = async () => {
  const users = await prisma.user.findMany();

  const validatedUsers = userResponseListSerializer.validate(users, {
    stripUnknown: true
  });

  return validatedUsers;
};

export const createUserService = async ({ name, surname, email, password, isAdm }: iUserRequest) => {
  const encryptedPassword = await hash(password, 10);

  const createdUser = await prisma.user.create({
    data: {
      name,
      surname,
      email,
      password: encryptedPassword,
      isAdm
    }
  });

  const validatedUser = userResponseSerializer.validate(createdUser, {
    stripUnknown: true
  });

  return validatedUser;
};
