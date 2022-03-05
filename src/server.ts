import { app } from './app';

const startServer = async () => {
  app.get('/', async (request, reply) => {
    return reply.send({ message: 'Server is running' });
  });

  app.listen(process.env.PORT || 3000);
};

startServer();
