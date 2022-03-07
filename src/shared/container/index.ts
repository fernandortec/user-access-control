import { container } from 'tsyringe';
import { DelayedConstructor } from 'tsyringe/dist/typings/lazy-helpers';

import { PermissionsRepositoryImpl } from '../../modules/permissions/repositories/implementations/PermissionsRepositoryImpl';
import { PermissionsRepository } from '../../modules/permissions/repositories/PermissionsRepository';
import { ProductRepositoryImpl } from '../../modules/product/repositories/implementations/ProductRepositoryImpl';
import { ProductRepository } from '../../modules/product/repositories/ProductRepository';
import { RoleRepositoryImpl } from '../../modules/role/repositories/implementations/RoleRepositoryImpl';
import { RoleRepository } from '../../modules/role/repositories/RoleRepository';
import { UserRepositoryImpl } from '../../modules/user/repositories/implementations/UserRepositoryImpl';
import { UserRepository } from '../../modules/user/repositories/UserRepository';

container.registerSingleton<UserRepository>(
  'UserRepository',
  UserRepositoryImpl
);

container.registerSingleton<ProductRepository>(
  'ProductRepository',
  ProductRepositoryImpl
);

container.registerSingleton<RoleRepository>(
  'RoleRepository',
  RoleRepositoryImpl
);

container.registerSingleton<PermissionsRepository>(
  'PermissionRepository',
  PermissionsRepositoryImpl
);
