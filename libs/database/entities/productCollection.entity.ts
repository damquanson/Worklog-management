import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collection } from './collection.entity';
import { Product } from './product.entity';
import CustomBaseEntity from './base.entity';

@Entity()
export class ProductCollection extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  collectionId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ManyToOne(() => Collection)
  @JoinColumn({ name: 'collectionId' })
  collection: Collection;
}
