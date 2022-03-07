import { getRepository } from 'typeorm';

import { Role } from '../../../entities/Role';
import { CreateRoleDto } from '../../dtos/CreateRoleDto';
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

  async findByIds(ids: string[]): Promise<Role[]> {
    const roles = await this.roleRepository.findByIds(ids);
    return roles;
  }

  async findById(id: string): Promise<Role> {
    const role = await this.roleRepository.findOne(id);
    return role;
  }

  async update({
    created_at,
    description,
    id,
    name,
    permissions
  }: Role): Promise<void> {
    await this.roleRepository.save({
      created_at,
      description,
      id,
      name,
      permissions
    });
  }
}

export { RoleRepositoryImpl };
