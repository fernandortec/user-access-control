import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handleRequest(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.createUser('id');

    return reply.send(user);
  }
}

export { CreateUserController };
