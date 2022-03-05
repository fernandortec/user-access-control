import { FastifyPluginCallback, FastifyPluginOptions } from 'fastify';

import { CreateUserController } from '../modules/user/useCases/CreateUser/CreateUserController';

const createUserController = new CreateUserController();

const userRoutes: FastifyPluginCallback<FastifyPluginOptions> = (
  server,
  _options,
  done
) => {
  server.post('/', createUserController.handleRequest);

  done();
};

export { userRoutes };
