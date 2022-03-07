import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { CreateUserDto } from '../../dtos/CreateUserDto';
import { UserRepository } from '../../repositories/UserRepository';

@injectable()
class UserSessionUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async userSession({ username, password }: CreateUserDto): Promise<string> {
    const user = await this.userRepository.findOne(username);

    if (!user) throw new AppError('User does not exists');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('User or Password incorrect');

    const token = `Bearer ${sign({}, process.env.SECRET_JWT, {
      subject: user.id
    })}`;

    return token;
  }
}
export { UserSessionUseCase };
