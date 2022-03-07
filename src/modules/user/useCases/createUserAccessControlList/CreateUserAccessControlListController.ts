import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserAccessControlListUseCase } from './createUserAccessControlListUseCase';

class CreateUserAccessControlListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, roles, permissions } = request.body;

    const createUserAccessControlListUseCase = container.resolve(
      CreateUserAccessControlListUseCase
    );

    const user =
      await createUserAccessControlListUseCase.createUserAccessControlList({
        permissions,
        roles,
        userId
      });

    return response.json(user);
  }
}

export { CreateUserAccessControlListController };
