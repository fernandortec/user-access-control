import { User } from '../../entities/User';
import { CreateUserDto } from '../dtos/CreateUserDto';

interface UserRepository {
  create({ password, username }: CreateUserDto): Promise<User>;
  findOne(username: string): Promise<User>;
  findById(id: string): Promise<User>;
  update({
    created_at,
    id,
    password,
    permissions,
    roles,
    username
  }: User): Promise<void>;
  findByIdWithRelations(id: string, relations: string[]): Promise<User>;
}

export { UserRepository };
