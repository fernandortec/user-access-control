import { NextFunction, Request, Response } from 'express';

import AppError from '../errors/AppError';

const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  _next: NextFunction
): Response => {
  if (err instanceof AppError) {
    return response.status(400).json(err);
  }
  console.log(err);
  return response.status(500).send(`Internal server error: ${err.message}`);
};

export { errorHandler };
