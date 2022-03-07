import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { Role } from '../../../entities/Role';
import { CreateRoleDto } from '../../dtos/CreateRoleDto';
import { RoleRepository } from '../../repositories/RoleRepository';

@injectable()
class CreateRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async createRole({
    description,
    name
  }: CreateRoleDto): Promise<Role | AppError> {
    const roleExists = await this.roleRepository.findOne(name);
    if (roleExists) return new AppError('Role already exists');

    const role = await this.roleRepository.create({ description, name });
    return role;
  }
}

export { CreateRoleUseCase };
