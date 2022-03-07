import { Router } from 'express';

import { CreatePermissionController } from '../modules/permissions/useCases/createPermission/CreatePermissionController';
import { ensuredAuthenticated } from '../shared/middlewares/ensureAuthenticated';

const createPermissionController = new CreatePermissionController();

const permissionRoutes = Router();

permissionRoutes.post(
  '/permissions',
  ensuredAuthenticated(),
  createPermissionController.handle
);

export { permissionRoutes };
