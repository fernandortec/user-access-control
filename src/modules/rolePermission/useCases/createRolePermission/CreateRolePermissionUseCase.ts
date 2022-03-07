import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { Role } from '../../../entities/Role';
import { PermissionsRepository } from '../../../permissions/repositories/PermissionsRepository';
import { RoleRepository } from '../../../role/repositories/RoleRepository';
import { CreateRolePermissionDto } from '../../dtos/CreateRolePermissionDto';

@injectable()
class CreateRolePermissionUseCase {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository,
    @inject('PermissionRepository')
    private permissionRepository: PermissionsRepository
  ) {}

  async createRolePermission({
    permissions,
    roleId
  }: CreateRolePermissionDto): Promise<Role> {
    const role = await this.roleRepository.findById(roleId);

    if (!role) throw new AppError('Role does not exists');

    const permissionsByIds = await this.permissionRepository.findByIds(
      permissions
    );

    role.permissions = permissionsByIds;

    await this.roleRepository.update(role);

    return role;
  }
}
export { CreateRolePermissionUseCase };
