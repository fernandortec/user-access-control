import { FastifyPluginCallback, FastifyPluginOptions } from 'fastify';

import { userRoutes } from './user.routes';

const indexRouter: FastifyPluginCallback<FastifyPluginOptions> = (
  server,
  _options,
  done
) => {
  server.register(userRoutes, { prefix: 'users' });

  done();
};

export { indexRouter };
