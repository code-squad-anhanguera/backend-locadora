import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Missing auth token" });
  };

  const authToken = authHeader.split(" ")[1];

  return jwt.verify(
    authToken,
    process.env.SECRET_KEY!,
    (error, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Missing auth token" });
      };

      req.user = {
        id: decoded.sub,
        email: decoded.email,
        isAdm: decoded.isAdm
      }

      next()
    }
  )
};
