import { Request, Response, NextFunction } from "express";
import { compare } from "bcryptjs";
import { prisma } from "../../lib/prisma";

export const validateLoginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!findUser) {
    return res.status(401).json({ message: "Invalid email or password" });
  };

  const comparePassword = await compare(password, findUser.password);

  if (!comparePassword) {
    return res.status(401).json({ message: "Invalid email or password" })
  };

  next();
};
