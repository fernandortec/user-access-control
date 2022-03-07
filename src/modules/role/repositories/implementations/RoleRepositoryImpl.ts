import { getRepository } from 'typeorm';

import { CreateRoleDto } from '../../dtos/CreateRoleDto';
import { Role } from '../../../entities/Role';
import { RoleRepository } from '../RoleRepository';

class RoleRepositoryImpl implements RoleRepository {
  constructor(private roleRepository = getRepository(Role)) {}
  async create({ description, name }: CreateRoleDto): Promise<Role> {
    const create = this.roleRepository.create({ description, name });
    await this.roleRepository.save(create);

    return create;
  }

  async findOne(name: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ name });

    return role;
  }
}

export { RoleRepositoryImpl };
