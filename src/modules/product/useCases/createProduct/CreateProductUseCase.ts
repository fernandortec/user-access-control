import { inject, injectable } from 'tsyringe';

import { Product } from '../../../entities/Product';
import { CreateProductDto } from '../../dtos/CreateProductDto';
import { ProductRepository } from '../../repositories/ProductRepository';

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: ProductRepository
  ) {}

  async createProduct({
    description,
    name,
    price
  }: CreateProductDto): Promise<Product> {
    const product = await this.productRepository.create({
      description,
      name,
      price
    });

    return product;
  }
}

export { CreateProductUseCase };
