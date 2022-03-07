import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRolePermissionUseCase } from './CreateRolePermissionUseCase';

class CreateRolePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { roleId } = request.params;
    const { permissions } = request.body;
    const createRolePermissionUseCase = container.resolve(
      CreateRolePermissionUseCase
    );

    const role = await createRolePermissionUseCase.createRolePermission({
      permissions,
      roleId
    });

    return response.json(role);
  }
}
export { CreateRolePermissionController };
