import { NextFunction, Request, Response } from 'express';

import { UserRepositoryImpl } from '../../modules/user/repositories/implementations/UserRepositoryImpl';
import AppError from '../errors/AppError';

const can = (permissionsParams: string[]) => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<NextFunction | Response | void> => {
    const { userId } = request;
    const userRepository = new UserRepositoryImpl();

    const user = await userRepository.findByIdWithRelations(userId, [
      'permissions'
    ]);
    console.log(user);
    if (!user)
      return response.status(400).json(new AppError('User does not exists'));

    const permissionExists = user.permissions
      .map(permission => permission.name)
      .some(permission => permissionsParams.includes(permission));

    if (!permissionExists) return response.status(401).end();

    return next();
  };
};

const is = (rolesParams: string[]) => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<NextFunction | Response | void> => {
    const { userId } = request;
    const userRepository = new UserRepositoryImpl();

    const user = await userRepository.findByIdWithRelations(userId, ['roles']);

    if (!user)
      return response.status(400).json(new AppError('User does not exists'));

    const rolesExists = user.roles
      .map(roles => roles.name)
      .some(roles => rolesParams.includes(roles));

    if (!rolesExists) return response.status(401).end();

    return next();
  };
};

export { can, is };
