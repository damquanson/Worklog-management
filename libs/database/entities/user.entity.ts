import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import CustomBaseEntity from './base.entity';

@Entity()
export class User extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'varchar' })
  gender: string;

  @Column()
  email: string;

  @Column()
  status: string;
}
