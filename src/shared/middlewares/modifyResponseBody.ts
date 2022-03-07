import { NextFunction, Request, Response } from 'express';

import AppError from '../errors/AppError';

const modifyResponseBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const oldSend = res.send;
  res.send = data => {
    if (data instanceof AppError) {
      res.statusCode = 400;
    }
    res.send = oldSend;
    return res.send(data);
  };
  next();
};

export { modifyResponseBody };
