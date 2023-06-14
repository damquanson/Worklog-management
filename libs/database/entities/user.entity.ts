import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Address } from './address.entity';
import { Video } from './video.entity';
import { Comment } from './comment.entity';
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

  @OneToMany(() => Address, (address) => address.user)
  address: Address;

  @OneToMany(() => Video, (video) => video.user)
  video: Video;

  @OneToMany(() => Comment, (comment) => comment.user)
  user: User;
}
