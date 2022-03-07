import { Product } from '../../entities/Product';
import { CreateProductDto } from '../dtos/CreateProductDto';

interface ProductRepository {
  create({ description, name, price }: CreateProductDto): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
  findOne(name: string): Promise<Product>;
}

export { ProductRepository };
