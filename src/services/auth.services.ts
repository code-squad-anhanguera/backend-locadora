import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export const authService = async (email: string) => {
  const findUser = await prisma.user.findUnique({
    where: {
      email
    }
  });

  const token = jwt.sign(
    {
      email: findUser?.email,
      isAdm: findUser?.isAdm
    },
    process.env.SECRET_KEY!,
    { expiresIn: "7 days", subject: findUser?.id }
  );

  return { token };
};
