import { NextFunction, Request, Response } from "express";

export const validationErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
  } else {
    next(err);
  }
};
