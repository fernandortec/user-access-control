import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { User } from '../../../entities/User';
import { CreateUserDto } from '../../dtos/CreateUserDto';
import { UserRepository } from '../../repositories/UserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async createUser({ password, username }: CreateUserDto): Promise<User> {
    const existsUser = await this.userRepository.findOne(username);

    if (existsUser) throw new AppError('User already exists');

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      password: passwordHash,
      username
    });

    return user;
  }
}

export { CreateUserUseCase };
