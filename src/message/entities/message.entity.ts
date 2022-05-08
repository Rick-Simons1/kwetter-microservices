import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user: User) => user.messages)
  user: User;

  @Column()
  messageContent: string;

  @Column({ nullable: true })
  likes: number;

  @Column({ nullable: true })
  retweets: number;
}
