import { NextFunction, Request, Response } from "express";
import { httpException } from "../interfaces/httpException";

export function errorMiddleware(
  error: httpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status: number = error.status ?? 500;
  const message: string = error.message ?? "Internal server error";

  res.status(status).json({
    status,
    message,
  });
}
