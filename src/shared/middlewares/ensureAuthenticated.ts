import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';

const ensuredAuthenticated = () => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> => {
    const authHeaders = request.headers.authorization;
    const token = authHeaders.substring(7, authHeaders.length);

    if (!token) response.status(401).send(new AppError('Token is missing'));

    try {
      verify(token, process.env.SECRET_JWT);
      const { sub: userId } = decode(token);

      request.userId = String(userId);
      return next();
    } catch (err) {
      return response.status(401).end();
    }
  };
};

export { ensuredAuthenticated };
