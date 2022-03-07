import { Router } from 'express';

import { CreateUserController } from '../modules/user/useCases/createUser/CreateUserController';
import { UserSessionController } from '../modules/user/useCases/userSession/UserSessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const userSessionController = new UserSessionController();

userRoutes.post('/users', createUserController.handle);
userRoutes.post('/login', userSessionController.handle);

export { userRoutes };
