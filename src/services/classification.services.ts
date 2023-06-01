import { prisma } from "../lib/prisma";

export const createClassificationService = async (name: string) => {
  const createdClassification = await prisma.classification.create({
    data: {
      name
    }
  });

  return createdClassification;
};
