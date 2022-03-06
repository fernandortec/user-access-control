import { nanoid } from 'nanoid';
import { CreateDateColumn, PrimaryColumn } from 'typeorm';

class BaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = nanoid();
  }
}

export { BaseEntity };
