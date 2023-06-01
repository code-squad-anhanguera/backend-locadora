import { Request, Response, NextFunction } from "express";

export const validateAdmUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user.isAdm) {
    return res.status(403).json({ message: "You cannot access this resource" })
  }

  next();
};
