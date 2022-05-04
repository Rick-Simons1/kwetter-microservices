import { Message } from 'src/message/entities/message.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  hashtag: string;

  @Column()
  discription: string;

  @Column()
  authId: string;

  @Column({ nullable: true })
  role: string;

  @OneToMany(() => Message, (message: Message) => message.user)
  messages: Message[];

  @CreateDateColumn()
  created_at: Date;
}
