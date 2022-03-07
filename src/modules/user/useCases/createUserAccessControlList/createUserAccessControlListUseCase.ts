import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { User } from '../../../entities/User';
import { PermissionsRepository } from '../../../permissions/repositories/PermissionsRepository';
import { RoleRepository } from '../../../role/repositories/RoleRepository';
import { CreateUserAccessControlListDto } from '../../dtos/CreateUserAccessControlListDto';
import { UserRepository } from '../../repositories/UserRepository';

@injectable()
class CreateUserAccessControlListUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
    @inject('PermissionRepository')
    private permissionRepository: PermissionsRepository,
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async createUserAccessControlList({
    permissions,
    roles,
    userId
  }: CreateUserAccessControlListDto): Promise<User | AppError> {
    const user = await this.userRepository.findById(userId);

    if (!user) return new AppError('User does not exists');

    const permissionsByIds = await this.permissionRepository.findByIds(
      permissions
    );

    const rolesByIds = await this.roleRepository.findByIds(roles);

    user.roles = rolesByIds;
    user.permissions = permissionsByIds;

    await this.userRepository.update(user);

    return user;
  }
}
export { CreateUserAccessControlListUseCase };
