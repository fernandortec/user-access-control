import { Router } from 'express';

import { CreateUserController } from '../modules/user/useCases/createUser/CreateUserController';
import { CreateUserAccessControlListController } from '../modules/user/useCases/createUserAccessControlList/CreateUserAccessControlListController';
import { UserSessionController } from '../modules/user/useCases/userSession/UserSessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const userSessionController = new UserSessionController();
const createUserAccessControlListController =
  new CreateUserAccessControlListController();

userRoutes.post('/users', createUserController.handle);
userRoutes.post('/login', userSessionController.handle);
userRoutes.post('/users/acl', createUserAccessControlListController.handle);

export { userRoutes };
