import { Request, Response } from "express";
import { createUserService, getUsersService } from "../services/user.services";

export const getUsersController = async (req: Request, res: Response) => {
  const data = await getUsersService();

  return res.status(200).json(data);
};

export const createUserController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body);

  if (!data) return res.status(400).json({ message: "User already exists" })

  return res.status(201).json(data)
}