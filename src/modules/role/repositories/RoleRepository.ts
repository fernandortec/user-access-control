import { Role } from '../../entities/Role';
import { CreateRoleDto } from '../dtos/CreateRoleDto';

interface RoleRepository {
  create({ description, name }: CreateRoleDto): Promise<Role>;
  findOne(name: string): Promise<Role>;
}
export { RoleRepository };
