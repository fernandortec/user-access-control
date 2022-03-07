import { User } from '../../entities/User';
import { CreateUserDto } from '../dtos/CreateUserDto';

interface UserRepository {
  create({ password, username }: CreateUserDto): Promise<User>;
  findOne(username: string): Promise<User>;
}

export { UserRepository };
