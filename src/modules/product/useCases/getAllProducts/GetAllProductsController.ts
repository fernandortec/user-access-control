import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetAllProductsUseCase } from './GetAllProductsUseCase';

class GetAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllProductsUseCase = container.resolve(GetAllProductsUseCase);

    const products = await getAllProductsUseCase.getAllProducts();

    return response.json(products);
  }
}

export { GetAllProductsController };
