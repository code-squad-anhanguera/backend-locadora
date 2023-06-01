import { Request, Response } from "express";
import { authService } from "../services/auth.services";

export const authController = async (req: Request, res: Response) => {
  const email = req.body.email;

  const token = await authService(email);

  return res.status(200).json(token);
};
