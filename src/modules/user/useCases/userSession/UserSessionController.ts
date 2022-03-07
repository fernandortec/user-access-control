import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UserSessionUseCase } from './UserSessionUseCase';

class UserSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const userSessionUseCase = container.resolve(UserSessionUseCase);

    const { token, userId } = await userSessionUseCase.userSession({
      username,
      password
    });

    request.userId = userId;

    return response.json(token);
  }
}

export { UserSessionController };
