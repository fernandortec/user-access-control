import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';

const ensuredAuthenticated = () => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) throw new AppError('Token is missing');

    const [, token] = authHeaders.split(' ');

    try {
      verify(token, process.env.SECRET_JWT);

      return next();
    } catch (err) {
      return response.status(401).end();
    }
  };
};

export { ensuredAuthenticated };
