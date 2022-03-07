import { getRepository } from 'typeorm';

import { Product } from '../../../entities/Product';
import { CreateProductDto } from '../../dtos/CreateProductDto';
import { ProductRepository } from '../ProductRepository';

class ProductRepositoryImpl implements ProductRepository {
  constructor(private productRepository = getRepository(Product)) {}
  async create({
    description,
    name,
    price
  }: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create({
      description,
      name,
      price
    });

    await this.productRepository.save(product);

    return product;
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepository.find();

    return products;
  }
}

export { ProductRepositoryImpl };
