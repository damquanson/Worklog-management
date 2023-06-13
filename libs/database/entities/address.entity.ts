import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import CustomBaseEntity from './base.entity';
@Entity()
export class Address extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  province: string;

  @Column()
  country: string;

  @Column()
  district: string;

  @Column()
  streetNumber: string;

  @Column()
  note: string;

  @Column()
  userId: number;
  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
