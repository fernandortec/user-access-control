import { CreateUserDTO } from '../../DTOs/CreateUserDTO';
import { User } from '../../entities/User';
import { UserRepository } from '../UserRepository';

class DefaultUserRepository implements UserRepository {
  async create({ id }: CreateUserDTO): Promise<User> {
    const user = new User(id);

    return user;
  }
}

export { DefaultUserRepository };
