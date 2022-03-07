import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = createProductUseCase.createProduct({
      description,
      name,
      price
    });

    return response.json(product);
  }
}

export { CreateProductController };
