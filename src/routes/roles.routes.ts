import { Router } from 'express';

import { CreateRoleController } from '../modules/role/useCases/createRole/CreateRoleController';
import { ensuredAuthenticated } from '../shared/middlewares/ensureAuthenticated';

const createRoleController = new CreateRoleController();

const rolesRoutes = Router();

rolesRoutes.post('/roles', ensuredAuthenticated(), createRoleController.handle);

export { rolesRoutes };
