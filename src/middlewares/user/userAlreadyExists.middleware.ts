import { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";

export const userAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: user.email
    }
  });

  if (findUser) {
    return res.status(409).json({ message: "User already exists" });
  };

  next();
};
