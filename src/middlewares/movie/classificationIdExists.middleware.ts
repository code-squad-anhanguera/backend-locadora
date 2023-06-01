import { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors";

export const classificationIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { classificationId } = req.body;

  const findClassification = await prisma.classification.findUnique({
    where: {
      id: classificationId
    }
  });

  if (!findClassification) {
    throw new AppError("This classification does not exists", 404)
  };

  next();
};
