import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { Permission } from './Permission';
import { Role } from './Role';

@Entity('users')
class User {
  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'users_roles',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'role_id' }]
  })
  roles: Role[];

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'users_permissions',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'permission_id' }]
  })
  permissions: Permission[];
}

export { User };