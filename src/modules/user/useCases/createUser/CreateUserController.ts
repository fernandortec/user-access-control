import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.createUser({ password, username });

    return response.json(user);
  }
}
export { CreateUserController };
