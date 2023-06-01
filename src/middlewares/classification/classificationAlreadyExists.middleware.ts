import { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";

export const classificationAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  const findClassification = await prisma.classification.findFirst({
    where: {
      name
    }
  });

  if (findClassification) {
    return res.status(409).json({ message: "This classification already exists" });
  };

  next();
};
