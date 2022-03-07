import { Role } from '../../entities/Role';
import { CreateRoleDto } from '../dtos/CreateRoleDto';

interface RoleRepository {
  create({ description, name }: CreateRoleDto): Promise<Role>;
  findOne(name: string): Promise<Role>;
  findByIds(ids: string[]): Promise<Role[]>;
  findById(id: string): Promise<Role>;
  update({
    created_at,
    description,
    id,
    name,
    permissions
  }: Role): Promise<void>;
}
export { RoleRepository };
