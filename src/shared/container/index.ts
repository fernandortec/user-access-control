import { container } from 'tsyringe';

import { DefaultUserRepository } from '../../modules/user/repositories/implementations/DefaultUserRepository';
import { UserRepository } from '../../modules/user/repositories/UserRepository';

container.registerSingleton<UserRepository>(
  'UserRepository',
  DefaultUserRepository
);
