import { getRepository } from 'typeorm';

import { Permission } from '../../../entities/Permission';
import { CreatePermissionDto } from '../../dtos/CreatePermissionDto';
import { PermissionsRepository } from '../PermissionsRepository';

class PermissionsRepositoryImpl implements PermissionsRepository {
  constructor(private permissionsRepository = getRepository(Permission)) {}
  async create({
    description,
    name
  }: CreatePermissionDto): Promise<Permission> {
    const permissions = this.permissionsRepository.create({
      description,
      name
    });

    await this.permissionsRepository.save(permissions);
    return permissions;
  }

  async findOne(name: string): Promise<Permission> {
    const permission = await this.permissionsRepository.findOne({ name });
    return permission;
  }
}

export { PermissionsRepositoryImpl };
