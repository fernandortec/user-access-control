import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePermissionUseCase } from './CreatePermissionUseCase';

class CreatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, name } = request.body;

    const createPermissionUseCase = container.resolve(CreatePermissionUseCase);

    const permission = await createPermissionUseCase.createPermission({
      description,
      name
    });

    return response.json(permission);
  }
}

export { CreatePermissionController };
