import { Router } from 'express';

import 'express-async-errors';
import { errorHandler } from '../shared/middlewares/errorHandler';
import { permissionRoutes } from './permission.routes';
import { productRoutes } from './product.routes';
import { rolePermissionRoutes } from './role.permission.routes';
import { rolesRoutes } from './roles.routes';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use(userRoutes);
routes.use(productRoutes);
routes.use(rolesRoutes);
routes.use(permissionRoutes);
routes.use(rolePermissionRoutes);

routes.use(errorHandler);

export { routes };
