import { Router } from 'express';

import { modifyResponseBody } from '../shared/middlewares/modifyResponseBody';
import { permissionRoutes } from './permission.routes';
import { productRoutes } from './product.routes';
import { rolePermissionRoutes } from './role.permission.routes';
import { rolesRoutes } from './roles.routes';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use(modifyResponseBody);
routes.use(userRoutes);
routes.use(productRoutes);
routes.use(rolesRoutes);
routes.use(permissionRoutes);
routes.use(rolePermissionRoutes);

export { routes };
