import { inject, injectable } from 'tsyringe';

import { Product } from '../../../entities/Product';
import { ProductRepository } from '../../repositories/ProductRepository';

@injectable()
class GetAllProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: ProductRepository
  ) {}

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepository.getAllProducts();

    return products;
  }
}

export { GetAllProductsUseCase };
