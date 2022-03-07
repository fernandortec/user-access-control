import { Router } from 'express';

import { CreateRoleController } from '../modules/role/useCases/createRole/CreateRoleController';
import { ensuredAuthenticated } from '../shared/middlewares/ensureAuthenticated';
import { is } from '../shared/middlewares/permissions';

const createRoleController = new CreateRoleController();

const rolesRoutes = Router();

rolesRoutes.post(
  '/roles',
  ensuredAuthenticated(),
  is(['admin']),
  createRoleController.handle
);

export { rolesRoutes };
