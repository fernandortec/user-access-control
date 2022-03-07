import { Router } from 'express';

import { CreateProductController } from '../modules/product/useCases/createProduct/CreateProductController';
import { GetAllProductsController } from '../modules/product/useCases/getAllProducts/GetAllProductsController';
import { ensuredAuthenticated } from '../shared/middlewares/ensureAuthenticated';
import { can } from '../shared/middlewares/permissions';

const getAllProductsController = new GetAllProductsController();
const createProductController = new CreateProductController();

const productRoutes = Router();

productRoutes.get('/products', getAllProductsController.handle);
productRoutes.post(
  '/products',
  ensuredAuthenticated(),
  can(['list_product', 'create_product']),
  createProductController.handle
);

export { productRoutes };
