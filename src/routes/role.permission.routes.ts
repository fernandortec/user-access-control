import { Router } from 'express';

import { CreateRolePermissionController } from '../modules/rolePermission/useCases/createRolePermission/CreateRolePermissionController';

const createRolePermissionController = new CreateRolePermissionController();

const rolePermissionRoutes = Router();

rolePermissionRoutes.post(
  '/roles/:roleId',
  createRolePermissionController.handle
);

export { rolePermissionRoutes };
