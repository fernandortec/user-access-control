import { CreateUserDTO } from '../DTOs/CreateUserDTO';
import { User } from '../entities/User';

interface UserRepository {
  create({ id }: CreateUserDTO): Promise<User>;
}

export { UserRepository };
