import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async createUser(id: string): Promise<User> {
    const user = await this.userRepository.create({ id });

    return user;
  }
}

export { CreateUserUseCase };
