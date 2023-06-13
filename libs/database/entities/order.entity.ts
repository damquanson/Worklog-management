import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressId: number;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'addressId' })
  address: Address;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  total: number;

  @Column()
  status: string;

  @Column()
  paymentMethod: string;

  @Column()
  note: string;
}
