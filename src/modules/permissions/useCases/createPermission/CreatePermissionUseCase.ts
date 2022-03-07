import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { Permission } from '../../../entities/Permission';
import { CreatePermissionDto } from '../../dtos/CreatePermissionDto';
import { PermissionsRepository } from '../../repositories/PermissionsRepository';

@injectable()
class CreatePermissionUseCase {
  constructor(
    @inject('PermissionRepository')
    private permissionRepository: PermissionsRepository
  ) {}

  async createPermission({
    description,
    name
  }: CreatePermissionDto): Promise<Permission | AppError> {
    const permission = await this.permissionRepository.create({
      description,
      name
    });

    return permission;
  }
}
export { CreatePermissionUseCase };
