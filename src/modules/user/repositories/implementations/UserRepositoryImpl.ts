import { getRepository } from 'typeorm';

import { User } from '../../../entities/User';
import { CreateUserDto } from '../../dtos/CreateUserDto';
import { UserRepository } from '../UserRepository';

class UserRepositoryImpl implements UserRepository {
  constructor(private userRepository = getRepository(User)) {}
  async create({ password, username }: CreateUserDto): Promise<User> {
    const user = this.userRepository.create({ password, username });

    await this.userRepository.save(user);

    return user;
  }

  async findOne(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ username });

    return user;
  }
}

export { UserRepositoryImpl };
