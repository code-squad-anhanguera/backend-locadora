import { Request, Response } from "express";

import { createClassificationService } from "../services/classification.services";

export const createClassificationController = async (req: Request, res: Response) => {
  const { name } = req.body;

  console.log(name)

  const data = await createClassificationService(name);

  return res.status(201).json(data);
};
