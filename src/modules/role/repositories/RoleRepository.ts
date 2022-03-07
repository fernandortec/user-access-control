import { CreateRoleDto } from '../dtos/CreateRoleDto';
import { Role } from '../../entities/Role';

interface RoleRepository {
  create({ description, name }: CreateRoleDto): Promise<Role>;
  findOne(name: string): Promise<Role>;
}
export { RoleRepository };
