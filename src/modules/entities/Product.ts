import { Column, Entity } from 'typeorm';

import { BaseEntity } from './BaseEntity';

@Entity('product')
class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}

export { Product };
