import { Column, JoinTable, ManyToMany } from 'typeorm';

import { BaseEntity } from './BaseEntity';
import { Permission } from './Permission';

class Role extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'permissions_roles',
    joinColumns: [{ name: 'role_id' }],
    inverseJoinColumns: [{ name: 'permission_id' }]
  })
  permission: Permission[];
}

export { Role };
