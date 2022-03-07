import { Router } from 'express';

import { CreateProductController } from '../modules/product/useCases/createProduct/CreateProductController';
import { GetAllProductsController } from '../modules/product/useCases/getAllProducts/GetAllProductsController';

const getAllProductsController = new GetAllProductsController();
const createProductController = new CreateProductController();

const productRoutes = Router();

productRoutes.get('/products', getAllProductsController.handle);
productRoutes.post('/products', createProductController.handle);

export { productRoutes };
