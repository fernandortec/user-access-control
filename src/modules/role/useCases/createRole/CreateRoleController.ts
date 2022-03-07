import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRoleUseCase } from './CreateRoleUseCase';

class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createRoleUseCase = container.resolve(CreateRoleUseCase);

    const role = await createRoleUseCase.createRole({ description, name });

    return response.send(role);
  }
}
export { CreateRoleController };
