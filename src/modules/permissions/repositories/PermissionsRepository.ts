import { Permission } from '../../entities/Permission';
import { CreatePermissionDto } from '../dtos/CreatePermissionDto';

interface PermissionsRepository {
  create({ description, name }: CreatePermissionDto): Promise<Permission>;
  findOne(name: string): Promise<Permission>;
}

export { PermissionsRepository };
