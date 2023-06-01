import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

export const validateSerializerMiddleware = (seriazer: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validate = await seriazer.validate(req.body, {
      abortEarly: true,
      stripUnknown: true,
    });

    req.validatedBody = validate;

    next();
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  };
};
